import { Routes, Route, Navigate } from 'react-router-dom'; // Use Navigate for redirecting
import { Result } from './Result';

const AppRoutes = () => {
  return (
    <div className='p-4'>
      <Routes>
        <Route path='/' element={<Navigate to="/search" replace />} /> {/* Redirect to /search */}
        <Route path="/search" element={<Result />} /> {/* Separate route for /search */}
        <Route path="/images" element={<Result />} /> {/* Separate route for /images */}
        <Route path="/news" element={<Result />} /> {/* Separate route for /news */}
        <Route path="/video" element={<Result />} /> {/* Separate route for /video */}
      </Routes>
    </div>
  );
}

export default AppRoutes;
