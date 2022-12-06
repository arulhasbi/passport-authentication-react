import React from "react";
import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import { localAuth } from "../../../../api/endpoints";
import { Link } from "react-router-dom";
import { useAuth } from "../../../../utils/customContexts/authContext";

const usernameInput = (props) => (
  <input
    type="text"
    className="border rounded border-indigo-800 px-2 h-8"
    {...props}
  />
);
const passwordInput = (props) => (
  <input
    type="password"
    className="border rounded border-indigo-800 px-2 h-8"
    {...props}
  />
);

const AuthPage = () => {
  const { login } = useAuth();
  return (
    <AuthPageWrapper>
      <AuthPageMaxWidth className="max-w-fit mr-auto ml-auto">
        <div>
          <Link
            to="/"
            className="mb-5 hover:text-indigo-800 hover:underline hover:underline-offset-4 block"
          >
            Go back
          </Link>
          <Formik
            initialValues={{
              username: "",
              password: "",
            }}
            onSubmit={async (body) => {
              const response = await localAuth(body);
              if (response.ok) {
                const json = await response.json();
                login(json);
                return;
              }
            }}
          >
            <Form className="flex flex-col gap-7">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label htmlFor="username">Username</label>
                  <Field name="username" as={usernameInput} />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="password">Password</label>
                  <Field name="password" as={passwordInput} />
                </div>
              </div>
              <button
                className="bg-indigo-600 px-5 py-3 rounded-md text-white font-bold text-md shadow-md hover:bg-indigo-800"
                type="submit"
              >
                Sign in
              </button>
            </Form>
          </Formik>
        </div>
        <Link
          to="/register"
          className="text-indigo-500 hover:text-indigo-800 hover:underline hover:underline-offset-4 mt-5 block"
        >
          Don't have an account? sign up now.
        </Link>
      </AuthPageMaxWidth>
    </AuthPageWrapper>
  );
};

const AuthPageWrapper = styled.div``;
const AuthPageMaxWidth = styled.div``;

export default AuthPage;
