import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Product from './components/Product';
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import RootLayout from './components/RootLayout';
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Dashboard />}></Route>
      <Route path='/cart' element={<Cart />}></Route>

    </Route>
  ))
  return (
    <div className="App">
  
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
