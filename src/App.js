// src/App.js
import React from 'react';
import MainLayout from './layout/MainLayout';
import { CssBaseline } from '@mui/material';

const App = () => {
  return (
    <div>
      {/* Reset CSS baseline to ensure consistent styling */}
      <CssBaseline />
      <MainLayout />
    </div>
  );
};

export default App;
