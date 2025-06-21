import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Config
import RootLayout from "./layout/index";
import { ThemeProvider } from "./context/ThemeContext";

//Components
import Home from "./components/Home";
import UseStateDemo from "./components/useStateDemo";
import UseEffectDemo from "./components/useEffectDemo";
import UseRefDemo from "./components/useRefDemo";
import UseContextDemo from "./components/useContextDemo";
import UseCallbackDemo from "./components/useCallbackDemo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "use-state",
        element: <UseStateDemo />,
      },
      {
        path: "use-effect",
        element: <UseEffectDemo />,
      },
      {
        path: "use-ref",
        element: <UseRefDemo />,
      },
      {
        path: "use-context",
        element: <UseContextDemo />,
      },
      {
        path: "use-callback",
        element: <UseCallbackDemo />,
      },
    ],
  },
]);

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider
        router={router}
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      />
    </ThemeProvider>
  );
}
