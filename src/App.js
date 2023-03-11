import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './pages/Route/Route';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useContext } from 'react';
import { NavColorContext } from './Contexts/NavcolorProvider';

function App() {
  const {color, setColor} = useContext(NavColorContext)

     const changeColor = () => {
          console.log('scrolled')
          if (window.scrollY > 10) {
               setColor(true)
               console.log('scrolled')
          }
          else {
               setColor(false)
          }
     }

     window.addEventListener('scroll', changeColor);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
