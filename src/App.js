import { Route, Routes } from 'react-router-dom';
import { HomePage, FavoritesPage, DonatPage, ContactPage } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/donat" element={<DonatPage />} />
      <Route path="/contacts" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
