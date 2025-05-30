import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layout/index';
import Home from './components/Home';
import UseStateDemo from './components/useStateDemo';
import UseEffectDemo from './components/useEffectDemo';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'use-state',
        element: <UseStateDemo />,
      },
      {
        path: 'use-effect',
        element: <UseEffectDemo />,
      },
    ],
  },
]);

export default function App() {
  return (
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    />
  );
}
