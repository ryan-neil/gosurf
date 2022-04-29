import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';

// invoke react query
const queryClient = new QueryClient();

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Router>
    <QueryClientProvider client={queryClient}>
      <App tab="home" />
    </QueryClientProvider>
  </Router>
);
