import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ArtisanDashboard from './pages/ArtisanDashboard';
import MarketplacePage from './pages/MarketplacePage';
import ProductDetailPage from './pages/ProductDetailPage';
import CommunityPage from './pages/CommunityPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<ArtisanDashboard />} />
            <Route path="/marketplace" element={<MarketplacePage />} />
            <Route path="/product/:productId" element={<ProductDetailPage />} />
            <Route path="/community" element={<CommunityPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;