const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 3001;
const SECRET_KEY = 'your_jwt_secret_key'; // Replace with a strong secret key in production

app.use(cors());
app.use(bodyParser.json());

// Mock data (in-memory)
let users = [
  { id: '1', username: 'admin', password: '123456', role: 'superadmin', fullName: 'Quản trị viên' },
  { id: '2', username: 'staff1', password: '123', role: 'staff', fullName: 'Nhân viên 1' },
];
let registrations = [];
let feedbacks = [];

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Public route: Login
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    const token = jwt.sign({ id: user.id, username: user.username, role: user.role }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ user: { id: user.id, username: user.username, role: user.role, fullName: user.fullName }, token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Protected routes (require token)
app.get('/api/users', authenticateToken, (req, res) => {
  if (req.user.role !== 'superadmin') return res.sendStatus(403);
  res.json(users.map(u => ({ id: u.id, username: u.username, role: u.role, fullName: u.fullName })));
});

app.post('/api/users', authenticateToken, (req, res) => {
  if (req.user.role !== 'superadmin') return res.sendStatus(403);
  const { username, fullName, role, password } = req.body;
  if (!username || !fullName || !role || !password) {
    return res.status(400).json({ message: 'Missing required fields' });
  }
  const newUser = { id: uuidv4(), username, fullName, role, password };
  users.push(newUser);
  res.status(201).json({ id: newUser.id, username: newUser.username, fullName: newUser.fullName, role: newUser.role });
});

app.delete('/api/users/:id', authenticateToken, (req, res) => {
  if (req.user.role !== 'superadmin') return res.sendStatus(403);
  const userId = req.params.id;
  const userIndex = users.findIndex(u => u.id === userId);
  if (userIndex === -1) return res.status(404).json({ message: 'User not found' });
  users.splice(userIndex, 1);
  res.sendStatus(204);
});

// Registration routes
app.get('/api/registrations', authenticateToken, (req, res) => {
  res.json(registrations);
});

app.post('/api/registrations', (req, res) => {
  const { name, phone, email, visitDate, purpose, notes } = req.body;
  if (!name || !phone || !email || !visitDate || !purpose) {
    return res.status(400).json({ message: 'Missing required fields' });
  }
  const newRegistration = {
    id: uuidv4(),
    name,
    phone,
    email,
    visitDate,
    purpose,
    notes: notes || '',
    status: 'pending',
    createdAt: new Date().toISOString()
  };
  registrations.push(newRegistration);
  res.status(201).json(newRegistration);
});

app.put('/api/registrations/:id/status', authenticateToken, (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const registration = registrations.find(r => r.id === id);
  if (!registration) return res.status(404).json({ message: 'Registration not found' });
  registration.status = status;
  res.json(registration);
});

// Feedback routes
app.get('/api/feedbacks', authenticateToken, (req, res) => {
  res.json(feedbacks);
});

app.post('/api/feedbacks', (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }
  const newFeedback = {
    id: uuidv4(),
    name,
    email,
    subject,
    message,
    createdAt: new Date().toISOString()
  };
  feedbacks.push(newFeedback);
  res.status(201).json(newFeedback);
});

app.delete('/api/feedbacks/:id', authenticateToken, (req, res) => {
  const feedbackId = req.params.id;
  const feedbackIndex = feedbacks.findIndex(f => f.id === feedbackId);
  if (feedbackIndex === -1) return res.status(404).json({ message: 'Feedback not found' });
  feedbacks.splice(feedbackIndex, 1);
  res.sendStatus(204);
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Military Portal API is running' });
});

app.listen(PORT, () => {
  console.log(`API Server running on http://localhost:${PORT}`);
});
