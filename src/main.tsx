import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register1Screen from "./screens/login/Register1Screen.tsx";
import Register2Screen from "./screens/login/Register2Screen.tsx";
import Register3Screen from "./screens/login/Register3Screen.tsx";
import RecuperacaoScreen from "./screens/login/RecuperacaoScreen.tsx";
import VerificationCodeScreen from "./screens/login/VerificationCodeScreen.tsx";
import TranksScreen from "./screens/login/TranksScreen.tsx";
import HomeScreen from "./screens/tabs/HomeScreen.tsx";
import CategoryScreen from "./screens/tabs/CategoryScreen.tsx";
import CategoryItemScreen from "./screens/tabs/subTabs/CategoryItemScreen.tsx";
import DetailsScreen from "./screens/tabs/subTabs/DetailsScreen.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/register1",
    element: <Register1Screen />,
  },
  {
    path: "/register2",
    element: <Register2Screen />,
  },
  {
    path: "/register3",
    element: <Register3Screen />,
  },
  {
    path: "/recuperacao",
    element: <RecuperacaoScreen />,
  },
  {
    path: "/verificationCode",
    element: <VerificationCodeScreen />,
  },
  {
    path: "/tranks",
    element: <TranksScreen />,
  },
  {
    path: "/home",
    element: <HomeScreen />,
  },
  {
    path: "/category",
    element: <CategoryScreen />,
  },
  {
    path: "/categoryitem",
    element: <CategoryItemScreen />,
  },
  {
    path: "/details",
    element: <DetailsScreen />,
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
