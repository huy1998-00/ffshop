import { useState } from "react";
import Homepage from "./Pages/Homepage/Homepage";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// setup- Router
const router = createBrowserRouter([
  // home page
  {
    path: "/",
    element: <Homepage />,
  },
]);

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
