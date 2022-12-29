import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import CarRental from "./CarRental";
import Resources from "./Resources";
import Gateway from './Gateway';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Gateway />,
  },
  {
    path: "/rental",
    element: <CarRental />,
  },
  {
    path: "/resources",
    element: <Resources />,
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
