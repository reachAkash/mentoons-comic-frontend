import FrequentlyAskeQuestion from "../FAQSection/FrequentlyAskeQuestion";

const Career = () => {
  return (
    <section className='relative  '>
      {/* Testimonial */}

      <div className='w-full relative'>
        <img
          src='/assets/images/join_us.jpg'
          alt=''
          className='w-full object-cover'
        />
      </div>

      <div className=' grid md:grid-cols-2  bg-[url(/assets/images/join_us.jpg)]  position-center '>
        <div className=' background-blur '></div>
        <div className='relative p-4 pt-0 pl-5 rounded-lg'>
          <video className='h-full w-full rounded-lg' controls>
            <source
              src='https://mentoons-website.s3.ap-northeast-1.amazonaws.com/experience+video/Abhishek+Testimonial.mp4'
              type='video/mp4'
            />
          </video>
        </div>
        <div className='relative p-4 pt-0 pl-5 rounded-lg'>
          <video className='h-full w-full rounded-lg' controls>
            <source
              src='https://mentoons-website.s3.ap-northeast-1.amazonaws.com/experience+video/Ayushi+Testimonial.mp4'
              type='video/mp4'
            />
          </video>
        </div>
      </div>
      {/* open position is acorrdian */}
      <div className='relative  '>
        <div className='relative w-80 mx-auto'>
          <img
            src='/assets/images/open-position-bg.svg'
            alt=''
            className='w-full object-cover '
          />
          <h1 className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  text-[28px] font-bold whitespace-nowrap'>
            Open position
          </h1>
        </div>
      </div>

      <div className='relative'>
        <FrequentlyAskeQuestion />
      </div>
    </section>
  );
};

export default Career;
