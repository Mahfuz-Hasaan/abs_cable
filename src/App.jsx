import Clientele from "@pages/Clientele";
import ContactUs from "@pages/ContactUs";
import NewsBlogs from "@pages/NewsBlogs";
import Products from "@pages/Products";
import Services from "@pages/Services";
import Team from "@pages/Team";
import { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";
import "./App.css";
const MainLayout = lazy(() => import("@layout/MainLayout.jsx"));
const Loader = lazy(() => import("@shared/Loader.jsx"));
const Home = lazy(() => import("@pages/Home.jsx"));
const About = lazy(() => import("@pages/About.jsx"));
const FoundersVision = lazy(() => import("@pages/FoundersVision"));

function App() {
  const routes = [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "mission-&-vission",
          element: <About />,
        },
        {
          path: "founders-vision",
          element: <FoundersVision />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "services",
          element: <Services />,
        },
        {
          path: "clientele",
          element: <Clientele />,
        },
        {
          path: "team-members",
          element: <Team />,
        },
        {
          path: "news-&-blogs",
          element: <NewsBlogs />,
        },
        {
          path: "contact-us",
          element: <ContactUs />,
        },
      ],
    },
  ];
  const renderRoutes = useRoutes(routes);
  return <Suspense fallback={<Loader />}>{renderRoutes}</Suspense>;
}

export default App;
