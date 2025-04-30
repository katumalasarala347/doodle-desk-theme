// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => (
  <nav className="bg-primary text-white p-4 flex justify-between">
    <h1 className="font-bold">DoodleDesk</h1>
    <div className="space-x-4">
      <Link to="/">Home</Link>
      <Link to="/themes">Themes</Link>
    </div>
  </nav>
);
