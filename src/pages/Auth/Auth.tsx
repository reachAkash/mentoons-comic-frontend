import axiosInstance from "@/api/axios";
import { userLoggedIn } from "@/redux/userSlice";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'; // Import the styles

type SignUpFormValues = {
  phone: string;
};

type OTPFormValues = {
  otp0: string;
  otp1: string;
  otp2: string;
  otp3: string;
};

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [step, setStep] = useState<"signup" | "otp">("signup");

  const signUpValidationSchema = Yup.object({
    phone: Yup.string()
      .required("Phone number is required")
      .matches(/^\+[1-9]\d{1,14}$/, "Phone number is not valid"),
  });

  // const otpValidationSchema = Yup.object({
  //   otp0: Yup.string().required("OTP digit is required"),
  //   otp1: Yup.string().required("OTP digit is required"),
  //   otp2: Yup.string().required("OTP digit is required"),
  //   otp3: Yup.string().required("OTP digit is required"),
  // });

  const handleSignUp = async (values: SignUpFormValues) => {
    try {
      console.log("SignUp form values: ", values);
      const res = await axiosInstance.post("/signup", values);
      if (res.status === 200) {
        setStep("otp");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleOTPVerification = async (values: OTPFormValues) => {
    const otp = `${values.otp0}${values.otp1}${values.otp2}${values.otp3}`;
    console.log("OTP entered:", otp);
    try {
      const res = await axiosInstance.post("/verify-otp", { otp });
      if (res.status === 200) {
        dispatch(userLoggedIn());
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>, nextFieldId: string | null) => {
    const value = e.target.value;
    if (value.length === 1 && nextFieldId) {
      const nextField = document.getElementById(nextFieldId) as HTMLInputElement;
      if (nextField) {
        nextField.focus();
      }
    }
  };

  const handleBackspace = (e: React.KeyboardEvent<HTMLInputElement>, prevFieldId: string | null) => {
    if (e.key === 'Backspace' && prevFieldId) {
      const prevField = document.getElementById(prevFieldId) as HTMLInputElement;
      if (prevField) {
        prevField.focus();
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white">
      <div className="w-full lg:w-1/2 items-center justify-center hidden lg:flex">
        <img
          src="/team-men.png"
          alt="auth-cover"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 bg-white shadow-lg rounded-lg lg:flex-1 lg:bg-transparent">
        <div className="bg-white py-8 lg:px-20 px-4 rounded-lg shadow-md w-full lg:max-w-xl">
          <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">
            {step === "signup" ? (isLogin ? "Login" : "Register") : "Verify OTP"}
          </h2>

          {step === "signup" ? (
            <Formik<SignUpFormValues>
              initialValues={{ phone: '' }}
              validationSchema={signUpValidationSchema}
              onSubmit={handleSignUp}
            >
              {({ values, setFieldValue }) => (
                <Form className="space-y-4">
                  <div className="relative">
                    <img src="/assets/home/mobile.png" alt="mobile"/>
                    <div className="flex flex-col">
                      <PhoneInput
                        international
                        defaultCountry="IN"
                        value={values.phone}
                        onChange={value => setFieldValue("phone", value || '')}
                        className="mt-1 p-2 rounded-md focus:ring-indigo-500 focus:border-indigo-500 w-[12rem] lg:w-[18rem] absolute top-[35%] left-1/2 transform -translate-x-1/2 -rotate-[2deg] border-4 border-black font-bold"
                      />
                    </div>
                  </div>

                  <div className="text-center mt-6">
                    <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
                    <button type="submit" className="bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                      Register
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          ) : (
            <Formik<OTPFormValues>
              initialValues={{ otp0: '', otp1: '', otp2: '', otp3: '' }}
              // validationSchema={otpValidationSchema}
              onSubmit={handleOTPVerification}
            >
              {() => (
                <Form className="space-y-4">
                  <div className="relative">
                    <img src="/assets/home/OTP.png" alt="OTP"/>
                    <div className="flex flex-col">
                      <div className="flex flex-col z-10 w-[12rem] lg:w-[18rem] absolute top-[35%] left-1/2 transform -translate-x-1/2">
                        <div className="flex justify-center gap-2 lg:gap-6 lg:pr-7 pr-5">
                          <Field
                            id="otp0"
                            name="otp0"
                            type="text"
                            maxLength={1}
                            className="w-10 h-10 lg:w-12 lg:h-12 border-4 border-black rounded-md text-center text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleOtpChange(e, 'otp1')}
                            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => handleBackspace(e, null)}
                          />
                          <Field
                            id="otp1"
                            name="otp1"
                            type="text"
                            maxLength={1}W
                            className="w-10 h-10 lg:w-12 lg:h-12 border-4 border-black rounded-md text-center text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleOtpChange(e, 'otp2')}
                            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => handleBackspace(e, 'otp0')}
                          />
                          <Field
                            id="otp2"
                            name="otp2"
                            type="text"
                            maxLength={1}
                            className="w-10 h-10 lg:w-12 lg:h-12 border-4 border-black rounded-md text-center text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleOtpChange(e, 'otp3')}
                            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => handleBackspace(e, 'otp1')}
                          />
                          <Field
                            id="otp3"
                            name="otp3"
                            type="text"
                            maxLength={1}
                            className="w-10 h-10 lg:w-12 lg:h-12 border-4 border-black rounded-md text-center text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => handleBackspace(e, 'otp2')}
                          />
                        </div>
                        <ErrorMessage name="otp0" component="div" className="text-red-500 text-sm mt-1" />
                        <ErrorMessage name="otp1" component="div" className="text-red-500 text-sm mt-1" />
                        <ErrorMessage name="otp2" component="div" className="text-red-500 text-sm mt-1" />
                        <ErrorMessage name="otp3" component="div" className="text-red-500 text-sm mt-1" />
                      </div>
                      <button type="submit" className="bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        Verify OTP
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          )}

          <p className="mt-4 text-center">
            {step === "signup" ? (
              <>
                {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                <span
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-indigo-600 cursor-pointer hover:underline"
                >
                  {isLogin ? "Register" : "Login"}
                </span>
              </>
            ) : (
              <span
                onClick={() => setStep("signup")}
                className="text-indigo-600 cursor-pointer hover:underline"
              >
                Go back
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
