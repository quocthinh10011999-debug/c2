import React from 'react';
import { Page } from '../../types';
import Home from '../components/Home';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return <Home onNavigate={onNavigate} />;
};

export default HomePage;
