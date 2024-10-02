import { userLoggedIn } from "@/redux/userSlice";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

import { toast } from "sonner";
import { AppDispatch, RootState } from "@/redux/store";
import { signup, verifyOTP, login, verifyLoginOTP } from "@/redux/loginSlice";
import Loader from "@/components/common/Loader";

type SignUpFormValues = {
  phone: string;
};

type OTPFormValues = {
  otp0: string;
  otp1: string;
  otp2: string;
  otp3: string;
};

const Auth: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [step, setStep] = useState<'signup' | 'otp' | 'login' | 'loginOtp'>('signup');
  const { loading } = useSelector((state: RootState) => state.auth);
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const signUpValidationSchema = Yup.object({
    phone: Yup.string()
      .required('Phone number is required')
      .matches(/^\+[1-9]\d{1,14}$/, 'Phone number is not valid'),
  });

  const otpValidationSchema = Yup.object({
    otp0: Yup.string().required('Required').length(1, 'Must be 1 digit'),
    otp1: Yup.string().required('Required').length(1, 'Must be 1 digit'),
    otp2: Yup.string().required('Required').length(1, 'Must be 1 digit'),
    otp3: Yup.string().required('Required').length(1, 'Must be 1 digit'),
  });

  const handleSignUp = async (values: SignUpFormValues) => {
    const { phone } = values;
    setPhoneNumber(phone);
    try {
      const res = await dispatch(signup({ phoneNumber: phone })).unwrap();
      if (res.success) {
        setStep('otp');
        toast.success(res.message || 'Signup successful. Please enter OTP.');
      }
    } catch (error: any) {
      toast.error(error.message || 'Signup failed. Please try again.');
    }
  };

  const handleOTPVerification = async (values: OTPFormValues) => {
    const otp = `${values.otp0}${values.otp1}${values.otp2}${values.otp3}`;
    try {
      const res = await dispatch(verifyOTP({ phoneNumber, otp })).unwrap();
      if (res.success) {
        dispatch(userLoggedIn());
        toast.success(res.message || 'OTP verified successfully!');
        navigate('/');
      }
    } catch (error: any) {
      toast.error(error.message || 'OTP verification failed. Please try again.');
    }
  };

  const handleLogin = async (values: SignUpFormValues) => {
    const { phone } = values;
    setPhoneNumber(phone);
    try {
      const res = await dispatch(login({ phoneNumber: phone })).unwrap();
      if (res.success) {
        setStep('loginOtp');
        toast.success(res.message || 'Login successful. Please enter the OTP sent to your phone.');
      }
    } catch (error: any) {
      toast.error(error.message || 'Login failed. Please try again.');
    }
  };

  const handleLoginOTPVerification = async (values: OTPFormValues) => {
    const otp = `${values.otp0}${values.otp1}${values.otp2}${values.otp3}`;
    try {
      const res = await dispatch(verifyLoginOTP({ phoneNumber, otp })).unwrap();
      if (res.success) {
        toast.success(res.message || 'OTP verified successfully!');
        navigate('/');
        window.location.reload();
      }
    } catch (error: any) {
      toast.error(error.message || 'Login OTP verification failed. Please try again.');
    }
  };

  const handleOtpChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    nextField: keyof OTPFormValues | null,
    setFieldValue: (field: string, value: string) => void
  ) => {
    const { value } = e.target;
    setFieldValue(e.target.name, value);
    if (value.length === 1 && nextField) {
      document.getElementById(nextField)?.focus();
    }
  };

  const handleBackspace = (
    e: React.KeyboardEvent<HTMLInputElement>,
    previousField: keyof OTPFormValues | null
  ) => {
    const input = e.target as HTMLInputElement;
    if (e.key === 'Backspace' && input.value === '' && previousField) {
      document.getElementById(previousField)?.focus();
    }
  };

  return (
    <>
    {loading && <Loader />}
    <div className="h-screen pb-6 flex flex-col lg:flex-row bg-white overflow-clip">
      <div className="w-full lg:w-1/2 hidden lg:flex items-center justify-center">
        <img src="/assets/images/team-Illustration.png" alt="auth-cover" className="h-full w-full object-cover" />
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12 bg-white shadow-lg rounded-lg lg:bg-transparent">
        <div className="bg-white py-8 lg:px-20 px-4 rounded-lg w-full lg:max-w-xl">
          <div className="flex justify-center mb-6">
            <button
              className={`px-4 py-2 rounded-l-lg ${step === 'signup' ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setStep('signup')}
            >
              Sign Up
            </button>
            <button
              className={`px-4 py-2 rounded-r-lg ${step === 'login' ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setStep('login')}
            >
              Login
            </button>
          </div>

          {step === 'signup' || step === 'login' ? (
            <Formik<SignUpFormValues>
              initialValues={{ phone: "" }}
              validationSchema={signUpValidationSchema}
              onSubmit={step === 'signup' ? handleSignUp : handleLogin}
            >
              {({ values, setFieldValue }) => (
                <Form className="space-y-4">
                  <div className="relative">
                    <img src="/assets/home/mobile.png" alt="mobile" />
                    <div className="flex flex-col items-center">
                      <PhoneInput
                        international
                        defaultCountry='IN'
                        value={values.phone}
                        onChange={(value) => setFieldValue('phone', value || '')}
                        className="mt-1 p-2 rounded-md focus:ring-indigo-500 focus:border-indigo-500 w-[70%] absolute top-[35%] lg:top-[38%] left-1/2 transform -translate-x-1/2 -rotate-[2deg] border-4 border-black font-bold"
                      />
                    </div>
                  </div>

                  <div className="text-center mt-6">
                    <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
                    <button
                      type="submit"
                      className="bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      disabled={loading}
                    >
                      {step === 'signup' ? 'Register' : 'Login'}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          ) : (
            <Formik<OTPFormValues>
              initialValues={{ otp0: "", otp1: "", otp2: "", otp3: "" }}
              validationSchema={otpValidationSchema}
              onSubmit={step === 'otp' ? handleOTPVerification : handleLoginOTPVerification}
            >
              {({ setFieldValue }) => (
                <Form className="space-y-4">
                  <div className="relative">
                    <img src="/assets/home/OTP.png" alt="OTP" />
                    <div className="flex flex-col items-center">
                      <div className="flex justify-center gap-2 lg:gap-6 w-[12rem] lg:w-[18rem] absolute top-[35%] left-1/2 transform -translate-x-1/2 -rotate-[2deg]">
                        <Field
                          id="otp0"
                          name="otp0"
                          type="text"
                          maxLength={1}
                          className="w-10 h-10 lg:w-12 lg:h-12 border-4 border-black rounded-md text-center text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleOtpChange(e, 'otp1', setFieldValue)}
                          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => handleBackspace(e, null)}
                        />
                        <Field
                          id="otp1"
                          name="otp1"
                          type="text"
                          maxLength={1}
                          className="w-10 h-10 lg:w-12 lg:h-12 border-4 border-black rounded-md text-center text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleOtpChange(e, 'otp2', setFieldValue)}
                          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => handleBackspace(e, 'otp0')}
                        />
                        <Field
                          id="otp2"
                          name="otp2"
                          type="text"
                          maxLength={1}
                          className="w-10 h-10 lg:w-12 lg:h-12 border-4 border-black rounded-md text-center text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleOtpChange(e, 'otp3', setFieldValue)}
                          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => handleBackspace(e, 'otp1')}
                        />
                        <Field
                          id="otp3"
                          name="otp3"
                          type="text"
                          maxLength={1}
                          className="w-10 h-10 lg:w-12 lg:h-12 border-4 border-black rounded-md text-center text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleOtpChange(e, null, setFieldValue)}
                          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => handleBackspace(e, 'otp2')}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-6">
                    <ErrorMessage name="otp" component="div" className="text-red-500 text-sm mt-1" />
                    <button
                      type="submit"
                      className="bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      disabled={loading}
                    >
                      Verify OTP
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default Auth;
