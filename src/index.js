import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AboutScreen from './screen/AboutScreen';
import ProjectsScreen from './screen/ProjectsScreen';
import ContactScreen from './screen/ContactScreen';
import './App.css';
import NotFound from './screen/NotFound';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound/>,
  },
  {
    path: '/projects',
    element:  <ProjectsScreen />,
  },
  {
    path: '/contact',
    element: <ContactScreen />,
  }

])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<RouterProvider router={router} />
 
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
