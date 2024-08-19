const WhyMentoons = () => {
  return (
    <section className='relative '>
      <div className='w-full rounded-t-full bg-white h-[900px] flex flex-col items-center justify-start relative  lg:h-[700px] '>
        {/* <h2 className='text-4xl text-dark-gray rubik-bubbles-regular pb-8 text-center pt-2 '></h2> */}

        <div className='absolute w-full flex flex-col  items-center   '>
          <div className=' w-full max-w-[640px] relative  p-6 pt-44 '>
            <p className='absolute w-[80%] left-1/2 -translate-x-1/2 top-20 text-4xl text-rose-600 font-bold text-center lg:text-5xl lg:top-[120%]'>
              Why Our Podcast Matter?
            </p>
            <div className='max-w-[800px] lg:absolute lg:-bottom-[140%] mb-4'>
              <p className='w-full text-sm md:text-lg text-rose-600 font-bold text-center mx-auto md:w-[85%] lg:w-[95%] '>
                Our content goes beyond entertainment. We create safe spaces for
                learning, growing, and understanding. Whether you're a child
                exploring new ideas, a teenager facing changes, or a parent
                seeking ways to connect, we have something for you.
              </p>
            </div>
            <div className=' p-4 px-8 rounded-3xl bg-amber-200 shadow-2xl mb-6 lg:absolute lg:top-12 lg:-left-[30%]  '>
              <div className='w-full flex items-start justify-start'>
                <img
                  src='/assets/images/quotation-mark.svg'
                  alt='quotation mark icon'
                  className='w-6'
                />
              </div>
              <p className='text-font-22 font-bold text-amber-600 pl-8 pr-8 text-center'>
                Expert-Crafted Content
              </p>
              <div className=' flex items-end justify-end'>
                <img
                  src='/assets/images/quotation-mark.svg'
                  alt='quotation mark icon'
                  className='w-6 rotate-360 transform scale-x-[-1]'
                />
              </div>
            </div>
            <div className='   p-4  px-8   rounded-3xl bg-rose-200 shadow-2xl mb-6 lg:absolute lg:top-16 lg:-right-[30%]'>
              <div className=' w-full flex items-start justify-start'>
                <img
                  src='/assets/images/quotation-mark.svg'
                  alt='quotation mark icon'
                  className='w-6'
                />
              </div>
              <p className='text-font-22 font-bold text-rose-400 pl-8 pr-8 text-center '>
                Age Appropriate Disscussion
              </p>
              <div className=' flex items-end justify-end'>
                <img
                  src='/assets/images/quotation-mark.svg'
                  alt='quotation mark icon'
                  className='w-6 rotate-360 transform scale-x-[-1]'
                />
              </div>
            </div>
            <div className=' p-4  px-8 rounded-3xl bg-purple-200 shadow-2xl mb-6 lg:absolute lg:-bottom-[220%]  lg:-left-[25%]'>
              <div className=' w-full flex items-start justify-start'>
                <img
                  src='/assets/images/quotation-mark.svg'
                  alt='quotation mark icon'
                  className='w-6'
                />
              </div>
              <p className='text-font-22 font-bold text-purple-600  text-center '>
                Engaging Storytelling
              </p>
              <div className=' flex items-end justify-end'>
                <img
                  src='/assets/images/quotation-mark.svg'
                  alt='quotation mark icon'
                  className='w-6 rotate-360 transform scale-x-[-1]'
                />
              </div>
            </div>
            <div className='   p-4  px-8  rounded-3xl bg-lime-200 shadow-2xl mb-6 lg:absolute lg:-bottom-[210%]  lg:-right-[20%]'>
              <div className=' w-full flex items-start justify-start'>
                <img
                  src='/assets/images/quotation-mark.svg'
                  alt='quotation mark icon'
                  className='w-6'
                />
              </div>
              <p className='text-font-22  text-center font-bold text-lime-600 '>
                Valuable life lesson
              </p>
              <div className=' flex items-end justify-end'>
                <img
                  src='/assets/images/quotation-mark.svg'
                  alt='quotation mark icon'
                  className='w-6 rotate-360 transform scale-x-[-1]'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMentoons;
