import React from "react";
import Header from "../../../parts/header/header";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAuth } from "../../../../utils/customContexts/authContext";
import { logout as logoutAPI } from "../../../../api/endpoints";

const HomePage = (props) => {
  const { user, logout } = useAuth();
  const handleLogout = async () => {
    const response = await logoutAPI();
    if (response.ok) {
      logout();
    }
  };
  return (
    <HomePageWrapper>
      <HomePageMaxWidth>
        <Header>
          {!user ? (
            <>
              <Link
                to="login"
                className="bg-indigo-600 px-5 py-3 rounded-md text-white font-bold text-md shadow-md hover:bg-indigo-800 block max-w-[200px] text-center"
              >
                Click here to sign in
              </Link>
              <Link
                to="register"
                className="text-indigo-500 hover:text-indigo-800 hover:underline hover:underline-offset-4"
              >
                Don't have an account? sign up now.
              </Link>
            </>
          ) : (
            <div>
              <p className="mb-5">
                You've logged in! now you can go to /dashboard
              </p>
              <button
                className="bg-indigo-600 px-5 py-3 rounded-md text-white font-bold text-md shadow-md hover:bg-indigo-800 block max-w-[200px] text-center"
                onClick={handleLogout}
              >
                Sign out
              </button>
            </div>
          )}
        </Header>
      </HomePageMaxWidth>
    </HomePageWrapper>
  );
};

const HomePageWrapper = styled.div``;
const HomePageMaxWidth = styled.div``;

export default HomePage;
