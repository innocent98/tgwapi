import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import CarRental from "./CarRental";
import Resources from "./Resources";

const router = createBrowserRouter([
  {
    path: "/",
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
