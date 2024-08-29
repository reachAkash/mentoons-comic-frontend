import { OPEN_POSITION } from "@/constant";
import FAQCard from "./FAQCard";

const FrequentlyAskeQuestion = () => {
  return (
    <section className='  flex flex-col  items-center  p-4 transition-all duration-30 0  py-8 '>
      {/* <h1 className='text-4xl font-semibold pb-8 rubik-bubbles-regular text-dark-gray  text-center'>
        Frequently Ask Question
      </h1> */}
      <div className='p-1 flex flex-col gap-4  md:w-[80%] lg:w-[65%]'>
        {OPEN_POSITION.map((job) => (
          <FAQCard key={job.id} />
        ))}
      </div>
    </section>
  );
};

export default FrequentlyAskeQuestion;
