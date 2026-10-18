import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Builds from './pages/Builds.jsx';
import BuildDetail from './pages/BuildDetail.jsx';
import Upgrades from './pages/Upgrades.jsx';
import Gallery from './pages/Gallery.jsx';
import Request from './pages/Request.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="builds" element={<Builds />} />
        <Route path="builds/:slug" element={<BuildDetail />} />
        <Route path="upgrades" element={<Upgrades />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="request" element={<Request />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
