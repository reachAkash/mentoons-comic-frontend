import type { AppDispatch, RootState } from "@/redux/store";
import { submitWorkshopForm } from "@/redux/workshopSlice";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import * as Yup from "yup";
import Loader from "./Loader";

interface FormValues {
  name: string;
  guardianName: string;
  guardianContact: string;
  age: string;
  message: string;
  city: string;
  appliedWorkshop: string;
}

type WorkshopProps = {
  selectedWorkshop?: string;
};

const WorkshopForm: React.FC<WorkshopProps> = ({ selectedWorkshop }) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { loading } = useSelector((state: RootState) => state.workshop);

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters long")
      .max(50, "Name can't be longer than 50 characters")
      .required("Name is required"),
    guardianName: Yup.string().required("Guardian name is required"),
    guardianContact: Yup.string()
      .matches(/^\d{10}$/, "Guardian contact must be a 10-digit number")
      .required("Guardian contact is required"),
    age: Yup.number()
      .min(1, "Age must be a positive number")
      .max(100, "Age must be less than 100")
      .required("Age is required")
      .typeError("Age must be a number"),
    message: Yup.string().required("Message is required"),
    city: Yup.string().required("City is required"),
  });

  const handleSubmit = async (values: FormValues) => {
    try {
      const actionResult = await dispatch(submitWorkshopForm(values));
      if (submitWorkshopForm.fulfilled.match(actionResult)) {
        setIsSubmitted(true);
        toast.success("Form submitted sucessfully");
      }
    } catch (error) {
      toast.error("something went wrong.");
      console.error(error);
    }
  };

  return (
    <>
      {loading && <Loader />}
      <div
        className={`relative ${
          !isSubmitted ? "bg-white" : "bg-transparent"
        } p-6 rounded-lg max-w-lg mx-auto`}
      >
        {!isSubmitted ? (
          <>
            <h2 className='text-2xl font-bold mb-6 text-center text-indigo-600'>
              {selectedWorkshop} Registration
            </h2>
            <Formik<FormValues>
              initialValues={{
                name: "",
                guardianName: "",
                guardianContact: "",
                age: "",
                message: "",
                city: "",
                appliedWorkshop: selectedWorkshop?.toUpperCase() || "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form className='space-y-4'>
                {/* Form Fields */}
                <div className='flex flex-col md:flex-row space-x-0 md:space-x-4'>
                  <div className='flex-1'>
                    <label
                      htmlFor='name'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Child's Name
                    </label>
                    <Field
                      id='name'
                      name='name'
                      type='text'
                      className='cta-input w-full mt-1 p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500'
                    />
                    <ErrorMessage
                      name='name'
                      component='div'
                      className='text-red-500 text-sm mt-1'
                    />
                  </div>
                  <div className='flex-1 mt-4 md:mt-0'>
                    <label
                      htmlFor='guardianName'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Guardian's/Parent's Name
                    </label>
                    <Field
                      id='guardianName'
                      name='guardianName'
                      type='text'
                      className='cta-input w-full mt-1 p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500'
                    />
                    <ErrorMessage
                      name='guardianName'
                      component='div'
                      className='text-red-500 text-sm mt-1'
                    />
                  </div>
                </div>

                <div className='flex flex-col md:flex-row space-x-0 md:space-x-4'>
                  <div className='flex-1'>
                    <label
                      htmlFor='guardianContact'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Guardian's/Parent's Contact
                    </label>
                    <Field
                      id='guardianContact'
                      name='guardianContact'
                      type='text'
                      className='cta-input w-full mt-1 p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500'
                    />
                    <ErrorMessage
                      name='guardianContact'
                      component='div'
                      className='text-red-500 text-sm mt-1'
                    />
                  </div>
                  <div className='flex-1 mt-4 md:mt-0'>
                    <label
                      htmlFor='age'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Child's Age
                    </label>
                    <Field
                      id='age'
                      name='age'
                      type='text'
                      className='cta-input w-full mt-1 p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500'
                    />
                    <ErrorMessage
                      name='age'
                      component='div'
                      className='text-red-500 text-sm mt-1'
                    />
                  </div>
                </div>

                <div className='flex flex-col'>
                  <label
                    htmlFor='city'
                    className='block text-sm font-medium text-gray-700'
                  >
                    City
                  </label>
                  <Field
                    id='city'
                    name='city'
                    type='text'
                    className='cta-input w-full mt-1 p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500'
                  />
                  <ErrorMessage
                    name='city'
                    component='div'
                    className='text-red-500 text-sm mt-1'
                  />
                </div>

                <div className='flex flex-col'>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Message
                  </label>
                  <Field
                    as='textarea'
                    id='message'
                    name='message'
                    className='cta-input w-full mt-1 p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 resize-none'
                    rows={3}
                  />
                  <ErrorMessage
                    name='message'
                    component='div'
                    className='text-red-500 text-sm mt-1'
                  />
                </div>

                <div className='text-center mt-6'>
                  <button
                    type='submit'
                    className='bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                  >
                    Register
                  </button>
                </div>
              </Form>
            </Formik>
          </>
        ) : (
          <div className='relative text-center'>
            <div className='relative inline-block w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto'>
              <img
                src='/assets/home/notif.png'
                alt='Success Image'
                className='w-full h-full'
              />
              <div className='absolute inset-0 flex flex-col justify-center items-center text-center p-4 sm:p-6'>
                <h2 className='text-2xl font-bold text-men-blue lg:mb-4'>
                  Success!
                </h2>
                <p className='text-lg text-men-blue'>
                  Your form has been successfully submitted.
                </p>
                <button
                  className='lg:mt-6 bg-men-blue text-white px-4 py-2 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                  onClick={() => navigate("/")}
                >
                  Go Home
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default WorkshopForm;
