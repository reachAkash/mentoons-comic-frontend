import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { IoMdClose } from "react-icons/io";
import MiniLogo from "@/assets/imgs/logo mini.png";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

interface FormType {
  name: string;
  email: string;
  phone: string;
}

interface FreeDownloadForm {
  setShowFreeDownloadForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required!"),
  email: Yup.string()
    .email("Invalid email address!")
    .required("Email is required!"),
  phone: Yup.string()
    .required("Phone number is required!")
    .matches(
      /^\+?\d{10,15}$/,
      "Invalid phone number format (e.g., +918777328451)"
    ),
});

const initialState: FormType = { name: "", email: "", phone: "" };

const FreeDownloadForm: React.FC<FreeDownloadForm> = ({
  setShowFreeDownloadForm,
}) => {
  const sendEmail = (values: FormType) => {
    emailjs
      .send(
        import.meta.env.VITE_EMAIL_JS_SERVICE_ID_FREE_DOWNLOAD,
        import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID_FREE_DOWNLOAD,
        {
          from_name: "Mentoons",
          to_name: values.name,
          to_email: values.email,
          message: `Hello ${values.name}, thank you for choosing us. Claim your free comic 🥳`,
          pdf_url:
            "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/Comics-Pdf/Book+2+-+Electronic+gadgets+and+kids.pdf",
          thumbnail_url:
            "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-13.jpg",
        },
        import.meta.env.VITE_EMAIL_JS_USER_ID
      )
      .then(
        (response) => {
          console.log(
            "Email sent successfully!",
            response.status,
            response.text
          );
        },
        (error) => {
          console.error("Failed to send email.", error);
        }
      )
      .finally(() => {
        setShowFreeDownloadForm(false);
      });
  };
  return (
    <div className="flex items-center justify-center bg-black bg-opacity-50 fixed inset-0">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="relative text-black w-[90%] md:max-w-md py-8 px-10 space-y-4 rounded-md bg-white shadow shadow-white"
      >
        <button
          onClick={() => setShowFreeDownloadForm(false)}
          className="absolute top-2 right-2"
        >
          <IoMdClose className="text-2xl hover:text-red-400 active:scale-50 transition-all ease-in-out duration-300" />
        </button>
        <h1 className="font-semibold text-xl flex justify-center gap-2">
          Free <img className="w-20" src={MiniLogo} alt="mentoons logo" /> Gifts
        </h1>
        <Formik<FormType>
          initialValues={initialState}
          validationSchema={validationSchema}
          onSubmit={(values) => sendEmail(values)}
        >
          <Form className="flex flex-col w-full space-y-3">
            <div className="w-full">
              <Field
                type="text"
                placeholder="Your Name"
                name="name"
                className="cta-input w-full "
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm mt-3 ml-4"
              />
            </div>
            <div className="w-full">
              <Field
                type="email"
                placeholder="Your Email"
                name="email"
                className="cta-input w-full"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-3 ml-4"
              />
            </div>
            <div className="w-full">
              <Field
                type="tel"
                placeholder="Your Phone"
                name="phone"
                className="cta-input w-full"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-red-500 text-sm mt-3 ml-4"
              />
            </div>
            <button type="submit" className="cta-button-footer">
              Submit
            </button>
          </Form>
        </Formik>
      </motion.div>
    </div>
  );
};

export default FreeDownloadForm;
