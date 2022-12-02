import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Components/Router/Router';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
     <RouterProvider router={router}>
      
     </RouterProvider>
    </div>
  );
}

export default App;
