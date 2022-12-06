import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./app/App";
import AuthPage from "./components/layouts/home/authPage/authPage";
import HomePage from "./components/layouts/home/homePage/homePage";
import ProfilePage from "./components/layouts/protected/profilePage/profilePage";
import RegisterPage from "./components/layouts/home/registerPage/registerPage";
import HomeLayout from "./components/layouts/home/homeLayout";
import ProtectedLayout from "./components/layouts/protected/protectedLayout";
import { AuthLayout } from "./utils/customContexts/authLayout/authLayout";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AuthLayout />}>
      <Route path="/" element={<App />}>
        <Route element={<HomeLayout />}>
          <Route path="" element={<HomePage />} />
          <Route path="login" element={<AuthPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
        <Route path="dashboard" element={<ProtectedLayout />}>
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Route>
    </Route>
  )
);
