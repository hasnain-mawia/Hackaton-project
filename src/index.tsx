import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Errorpage from './screens/404 page';
import Dasboard from './screens/dashboard';
import Register from './screens/Authentication screens/register';
import Login from './screens/Authentication screens/login';
import CheckAuth from './config/checkAuth';
import Upload from './screens/uploadProduct';
import { Provider } from 'react-redux';
import {store, persistor} from './store';
import { PersistGate } from 'redux-persist/integration/react';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Errorpage/>,
    children:[
      {
      path: "/Dashboard",loader:CheckAuth,
      element: <Dasboard/>,
    },
    {
      path: "/",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
    {
      path: "/upload",loader:CheckAuth,
      element: <Upload/>,
    },
  ]
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
  <RouterProvider router={router} />
  </PersistGate>
  </Provider>
);

reportWebVitals();
