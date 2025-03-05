import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import "./App.css";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />}></Route>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="*" element={<NotFoundPage/>}></Route>
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
  
}

export default App;
