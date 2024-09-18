import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { submitWorkshopForm } from '@/redux/workshopSlice';
import type { AppDispatch } from '@/redux/store';

interface FormValues {
  name: string;
  guardianName: string;
  guardianContact: string;
  age: string;
  message: string;
}
type WorkshopProps = {
  selectedWorkshop?: any
}
const WorkshopForm: React.FC<WorkshopProps> = ({selectedWorkshop}) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters long')
      .max(50, "Name can't be longer than 50 characters")
      .required('Name is required'),
    guardianName: Yup.string().required('Guardian name is required'),
    guardianContact: Yup.string()
      .matches(/^\d{10}$/, 'Guardian contact must be a 10-digit number')
      .required('Guardian contact is required'),
    age: Yup.number()
      .min(1, 'Age must be a positive number')
      .max(100, 'Age must be less than 100')
      .required('Age is required')
      .typeError('Age must be a number'),
    message: Yup.string().required('Message is required'),
  });

  const handleSubmit = async (values: FormValues) => {
    try {
      const actionResult = await dispatch(submitWorkshopForm(values));
      if (submitWorkshopForm.fulfilled.match(actionResult)) {
        navigate('/');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="relative bg-white p-6 rounded-lg max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">
        {selectedWorkshop} Registration
      </h2>
      <Formik<FormValues>
        initialValues={{
          name: '',
          guardianName: '',
          guardianContact: '',
          age: '',
          message: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-4">
          <div className="flex flex-col md:flex-row space-x-0 md:space-x-4">
            <div className="flex-1">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <Field
                id="name"
                name="name"
                type="text"
                className="cta-input w-full mt-1 p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
              <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <div className="flex-1 mt-4 md:mt-0">
              <label htmlFor="guardianName" className="block text-sm font-medium text-gray-700">
                Guardian Name
              </label>
              <Field
                id="guardianName"
                name="guardianName"
                type="text"
                className="cta-input w-full mt-1 p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
              <ErrorMessage name="guardianName" component="div" className="text-red-500 text-sm mt-1" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row space-x-0 md:space-x-4">
            <div className="flex-1">
              <label htmlFor="guardianContact" className="block text-sm font-medium text-gray-700">
                Guardian Contact
              </label>
              <Field
                id="guardianContact"
                name="guardianContact"
                type="text"
                className="cta-input w-full mt-1 p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
              <ErrorMessage name="guardianContact" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <div className="flex-1 mt-4 md:mt-0">
              <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                Age
              </label>
              <Field
                id="age"
                name="age"
                type="text"
                className="cta-input w-full mt-1 p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
              <ErrorMessage name="age" component="div" className="text-red-500 text-sm mt-1" />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <Field
              as="textarea"
              id="message"
              name="message"
              className="cta-input w-full mt-1 p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 resize-none"
              rows={3}
            />
            <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
          </div>

          <div className="text-center mt-6">
            <button
              type="submit"
              className="bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Register
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default WorkshopForm;
