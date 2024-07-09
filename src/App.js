// src/App.js
import React from 'react';
import './App.css';
import Gallery from './components/Gallery'; 
import Profile from './components/Profile'; 
import Header from './components/Header'; 

const teamMembers = [
  {
    name: 'Natasha Wiliams',
    role: 'CEO',
    photo: 'https://randomuser.me/api/portraits/women/1.jpg'
  },
  {
    name: 'Mark Reed',
    role: 'CTO',
    photo: 'https://randomuser.me/api/portraits/men/2.jpg'
  },
  {
    name: 'Bob Ross',
    role: 'Lead Developer',
    photo: 'https://randomuser.me/api/portraits/men/3.jpg'
  }
];

const App = () => {
  return (
    <div className="App">
      <Header />
      <Gallery teamMembers={teamMembers} />
    </div>
  );
};

export default App;
