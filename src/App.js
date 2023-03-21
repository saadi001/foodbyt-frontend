import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './pages/Route/Route';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
