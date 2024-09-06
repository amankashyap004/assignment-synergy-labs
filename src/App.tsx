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
      path: "/user/:id",
      element: <UserDetails />,
    },
  ]);
  return (
    <main className="flex flex-col justify-center items-center gap-y-8 font-poppins">
      <Header />
      <div className="pt-20"></div>
      <RouterProvider router={router} />
      <Footer />
    </main>
  );
}

export default App;
