import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Redux store
import store from './store';

// Layout components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import AlertMessage from './components/common/AlertMessage';

// Public pages
import Landing from './pages/Landing';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';

// Protected pages
import Dashboard from './pages/dashboard/Dashboard';
import Profile from './pages/dashboard/Profile';
import CreateEPK from './pages/epk/CreateEPK';
import EditEPK from './pages/epk/EditEPK';
import ViewEPK from './pages/epk/ViewEPK';
import Analytics from './pages/dashboard/Analytics';

// Routes
import PrivateRoute from './components/routing/PrivateRoute';

// Create a theme
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2c3e50',
    },
    secondary: {
      main: '#e74c3c',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: [
      'Poppins',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Header />
          <AlertMessage />
          <main className="container">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password/:token" element={<ResetPassword />} />
              <Route path="/epk/view/:slug" element={<ViewEPK />} />

              {/* Protected Routes */}
              <Route path="/dashboard" element={<PrivateRoute component={Dashboard} />} />
              <Route path="/profile" element={<PrivateRoute component={Profile} />} />
              <Route path="/epk/create" element={<PrivateRoute component={CreateEPK} />} />
              <Route path="/epk/edit/:id" element={<PrivateRoute component={EditEPK} />} />
              <Route path="/analytics" element={<PrivateRoute component={Analytics} />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;