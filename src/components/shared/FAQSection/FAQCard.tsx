import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { applyForJob } from "@/redux/careerSlice";
import { uploadFile } from "@/redux/fileUploadSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { Loader } from "lucide-react";

// import emailjs from "emailjs-com";
import React, {FormEvent, useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

export type TPOSITION = {
  _id: string;
  jobTitle: string;
  jobDescription: string;
  thumbnail: string;
  skillsRequired: string[];
  jobType: string;
  location: string;

};
// JOB ACCORDIAN COMPONENT
const FAQCard = ({ position ,id}: { position: TPOSITION ,id:string}) => {
  const [isExpanded, setIsExpanded] = React.useState<boolean>(false);

  const handleIsExpanded = () => {
    setIsExpanded((prev) => !prev);
  };
  return (
    <div
      className={` ${
        isExpanded ? "max-h-full" : "max-h-16"
      } rounded-xl flex flex-col items-center justify-between overflow-hidden transition-transform duration-300   bg-orange-200 hover:scale-105`}
    >
      <div
        className=" w-full flex items-center justify-between p-4 text-neutral-700 
        "
        onClick={handleIsExpanded}
      >
        <span className="text-2xl font-bold">{position.jobTitle}</span>

        <span
          className={`p-1 rounded-full border border-neutral-700 hover:border-orange-400 hover:bg-orange-400/40
             flex items-center transition-all duration-300 cursor-pointer ${
               isExpanded && "rotate-180"
             }`}
        >
          <IoChevronDown className="" />
        </span>
      </div>
      {/* <span className='p-4 text-white'>
        <h1 className='text-xl font-bold'>Job Description</h1>
        {position.jobDescription}
        <div className='w-96 mx-auto'>
          <img
            src={position.jobIllustration}
            alt=''
            className='w-full object-cover  '
          />
        </div>
        {position?.jobRequirement.length > 0 && (
          <h1 className='text-xl font-bold pt-4'>Requirement</h1>
        )}
        {position?.jobRequirement.length > 0 && (
          <ol className='list-disc list-inside'>
            {position.jobRequirement.map((requirement, index) => {
              return (
                <li className='pl-4' key={index}>
                  {requirement}
                </li>
              );
            })}
          </ol>
        )}
        {position.skills.length > 0 && (
          <h1 className='text-xl font-bold pt-4'>Skills</h1>
        )}
        {position?.skills.length > 0 && (
          <div>
            <ul className='flex items-center justify-start gap-2 flex-wrap '>
              {position.skills.map((skill, index) => (
                <li
                  className='px-3 py-1 rounded-full bg-blue-400 text-sm'
                  key={index}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        )}
      </span> */}
      <div className="p-4">
        {/* description and illustration */}
        <div className="flex-wrap flex md:flex-nowrap items-start justify-center gap-2">
          <div className="w-full">
            <img
              src={position.thumbnail}
              alt=""
              className="w-full object-cover"
            />
          </div>
          <div className=" text-neutral-700 w-full  ">
            {position.jobDescription}
            <div className="flex flex-wrap  ">
              {position.skillsRequired.map((item) => {
                return (
                  <div className="w-32 relative " key={item}>
                    <img
                      src="/assets/images/stroke1.png"
                      alt=""
                      className=" object-cover"
                    />
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full  text-purple-100">
                      {item}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* skill */}
      </div>
      <div className=" w-full px-4 ">
        <JobApplicationForm id={id} />
      </div>
    </div>
  );
};

export default FAQCard;

export interface HiringFormData {
  name: string;
  email: string;
  phone: string;
  gender: string;
  portfolioLink: string;
  coverNote: string;
  resume: File | null;
}

interface FormError {
  [key: string]: string;
}

export function JobApplicationForm({id}:{id:string}) {

  const dispatch = useDispatch<AppDispatch>();

  const {loading} = useSelector((state:RootState)=>state.career)
  const [formData, setFormData] = useState<HiringFormData>({
    name: "",
    email: "",
    phone: "",
    gender: "",
    portfolioLink: "",
    coverNote: "",
    resume: null,
  });

  const [formErrors, setFormErrors] = useState<FormError>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData(prevData => ({
        ...prevData,
        resume: e.target.files![0],
      }));
    }
  };

  const validateForm = (): boolean => {
    const errors: FormError = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email address";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = "Phone number must be 10 digits";
    }

    if (!formData.gender) {
      errors.gender = "Please select a gender";
    }

    if (!formData.portfolioLink.trim()) {
      errors.portfolioLink = "Portfolio link is required";
    } else if (!/^https?:\/\/.+\..+/.test(formData.portfolioLink)) {
      errors.portfolioLink = "Invalid URL";
    }

    if (formData.coverNote.length > 500) {
      errors.coverNote = "Cover note must be 500 characters or less";
    }

    if (!formData.resume) {
      errors.resume = "Resume is required";
    } else {
      const fileType = formData.resume.type;
      const validTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
      if (!validTypes.includes(fileType)) {
        errors.resume = "File must be PDF, DOC, or DOCX";
      } else if (formData.resume.size > 5000000) {
        errors.resume = "File size must be less than 5MB";
      }
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      if (formData.resume) {
        const fileAction = await dispatch(uploadFile(formData.resume));
        console.log(fileAction,'fileAction')
        const fileData = fileAction.payload?.data?.imageUrl;
        console.log(fileData,'fileData')
        await dispatch(applyForJob({jobId:id, formData:{...formData, resume:fileData}}));
        toast.success("Application submitted successfully");
      } else {
        toast.error("Resume is required");
      }
      console.log("Form data:", formData);
    } else {      
      toast.error("Please fill all the required fields");
      console.log("Form has errors");
    }
  };
if(loading) return <Loader/>
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-neutral-700 font-bold px-5 py-2 w-full border bg-transparent border-neutral-700 hover:bg-orange-400/40 hover:border-orange-400 mb-4 rounded-md transition-all duration-300">
          Apply Now
        </Button>
      </DialogTrigger>
      <DialogContent className="z-[999999]">
        <DialogHeader>
          <DialogTitle className="text-center">Job Application Form</DialogTitle>
          <DialogDescription className="text-center">
            Fill in the details below and we'll contact you.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="w-full flex flex-col mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="p-3 text-base outline-black border bg-white text-black rounded-lg"
            />
            {formErrors.name && (
              <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
            )}
          </div>

          <div className="w-full flex flex-col mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="p-3 text-base outline-black border bg-white text-black rounded-lg"
            />
            {formErrors.email && (
              <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
            )}
          </div>

          <div className="w-full flex flex-col mb-4">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="p-3 text-base outline-black border bg-white text-black rounded-lg"
            />
            {formErrors.phone && (
              <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>
            )}
          </div>

          <div className="w-full flex flex-col mb-4">
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="p-3 text-base outline-black border bg-white text-black rounded-lg"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
            {formErrors.gender && (
              <p className="text-red-500 text-sm mt-1">{formErrors.gender}</p>
            )}
          </div>

          <div className="w-full flex flex-col mb-4">
            <input
              type="url"
              name="portfolioLink"
              value={formData.portfolioLink}
              onChange={handleChange}
              placeholder="Portfolio Link"
              className="p-3 text-base outline-black border bg-white text-black rounded-lg"
            />
            {formErrors.portfolioLink && (
              <p className="text-red-500 text-sm mt-1">{formErrors.portfolioLink}</p>
            )}
          </div>

          <div className="w-full flex flex-col mb-4">
            <textarea
              name="coverNote"
              value={formData.coverNote}
              onChange={handleChange}
              placeholder="Cover Note"
              className="p-3 text-base outline-black border bg-white text-black rounded-lg"
            />
            {formErrors.coverNote && (
              <p className="text-red-500 text-sm mt-1">{formErrors.coverNote}</p>
            )}
          </div>

          <div className="w-full flex flex-col mb-4">
            <input
              type="file"
              id="resume"
              name="resume"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
              className="hidden"
            />
            <label htmlFor="resume">
              <Button
                type="button"
                onClick={() => document.getElementById("resume")?.click()}
                className="p-3 w-full text-base text-black mb-4 rounded-lg bg-slate-200 hover:bg-slate-300 transition-all duration-300"
              >
                {formData.resume ? formData.resume.name : "Upload Resume"}
              </Button>
            </label>
            {formErrors.resume && (
              <p className="text-red-500 text-sm mt-1">{formErrors.resume}</p>
            )}
          </div>

          <Button
            type="submit"
            className="p-3 text-base bg-primary text-white mb-4 rounded-lg hover:bg-orange-500 transition-all duration-300"
          >
            Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
