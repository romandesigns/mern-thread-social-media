import MainLayout from "./components/layout/MainLayout";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<MainLayout />}>
      <Route path="/" index element={<h1>Home</h1>} />
      <Route path="/about" element={<h1>About</h1>} />
      <Route path="*" element={<h1>Page not found!</h1>} />
    </Route>,
  ])
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
