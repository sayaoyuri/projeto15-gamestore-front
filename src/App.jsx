import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import InfoProvider from './utils/context';
import SignInPage from './pages/auth/SignInPage';
import SignUpPage from './pages/auth/SignUpPage';
import RegisterGamePage from './pages/RegisterGame';
import GameDetailsPage from './pages/GameDetailsPage';

function App() {
  return (
    <BrowserRouter>
      <InfoProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/sign-in" element={<SignInPage />} />
          <Route path="/auth/sign-up" element={<SignUpPage />} />
          <Route path="/register-game" element={<RegisterGamePage />} />
          <Route path="/games/:id" element={<GameDetailsPage />} />
        </Routes>
      </InfoProvider>
    </BrowserRouter>
  );
}

export default App;
