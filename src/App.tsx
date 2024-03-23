import MainLayout from "./components/layout/MainLayout";
import { ThemeProvider } from "./components/theme-provider";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// Pages
import HomePage from "./pages/Home";
import PostPage from "./pages/Post";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<MainLayout />}>
      <Route path="/" index element={<HomePage />} />
      <Route path="/:username" element={<h1>Username</h1>} />
      <Route path="/:username/post/:postId" element={<PostPage />} />
      <Route path="/about" element={<h1>About</h1>} />
      <Route path="*" element={<h1>Page not found!</h1>} />
    </Route>,
  ])
);

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />;
    </ThemeProvider>
  );
}

export default App;
