import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router} from 'react-router-dom';
import { App } from './components';
import './index.css';

const app = document.getElementById('app');
const root = createRoot(app);
root.render(
    <Router>
        <App />
    </Router>
);