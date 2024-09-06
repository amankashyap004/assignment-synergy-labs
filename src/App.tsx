import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import UserDetails from "./pages/UserDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/user",
      element: <UserDetails />,
    },
  ]);
  return (
    <main className="font-poppins">
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </main>
  );
}

export default App;
