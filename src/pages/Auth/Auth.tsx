import { Formik, Field, Form, ErrorMessage } from "formik";
import { useState } from "react";
import * as Yup from "yup";

type FormValues = {
  userName: string;
  email: string;
  age: string;
  password: string;
  confirmPassword: string;
};

const Auth = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const validationSchema = Yup.object({
    userName: Yup.string()
      .min(2, "Name must be at least 2 characters long")
      .max(50, "Name can't be longer than 50 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Email format is not valid"
      )
      .required("Email is required"),
    age: Yup.number()
      .max(100, "Age must be less than 100 years")
      .required("Age is required")
      .typeError("Age must be a number"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/,
        "Password must contain at least one uppercase letter, one lowercase letter, and one number"
      )
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  });

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white">
      <div className="flex-1 hidden lg:block">
        <img
          src="/assets/images/blog2.png"
          alt="auth-cover"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="w-full max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg lg:flex-1 flex flex-col justify-center lg:max-w-none lg:rounded-none lg:shadow-none lg:bg-transparent">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">
            {isLogin ? "Login" : "Register"}
          </h2>
          <Formik<FormValues>
            initialValues={{
              userName: "",
              email: "",
              age: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            <Form>
              {!isLogin && (
                <div className="mb-4">
                  <label
                    htmlFor="userName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <Field
                    id="userName"
                    name="userName"
                    type="text"
                    className="cta-input w-4/5 mt-1 block p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <ErrorMessage
                    name="userName"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              )}

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  className="cta-input w-4/5 mt-1 block p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {!isLogin && (
                <div className="mb-4">
                  <label
                    htmlFor="age"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Age
                  </label>
                  <Field
                    id="age"
                    name="age"
                    type="number"
                    className="cta-input w-4/5 mt-1 block p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <ErrorMessage
                    name="age"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              )}

              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <Field
                  id="password"
                  name="password"
                  type="password"
                  className="cta-input w-4/5 mt-1 block p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {!isLogin && (
                <div className="mb-4">
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Confirm Password
                  </label>
                  <Field
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    className="cta-input w-4/5 mt-1 block p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              )}

              <div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  {isLogin ? "Login" : "Register"}
                </button>
              </div>
            </Form>
          </Formik>
          <p className="mt-4 text-center">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <span
              onClick={() => setIsLogin(!isLogin)}
              className="text-indigo-600 cursor-pointer font-semibold"
            >
              {isLogin ? "Register Here!" : "Login Here!"}
            </span>
          </p>
          {isLogin && (
            <p className="mt-2 text-center">
              <span className="text-indigo-600 cursor-pointer font-semibold">
                Forgot Password?
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
