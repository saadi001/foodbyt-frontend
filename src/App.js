import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './pages/Route/Route';
import { Toaster } from 'react-hot-toast';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
