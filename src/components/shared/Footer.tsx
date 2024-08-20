// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedin,
//   FaPinterest,
// } from "react-icons/fa";

const Footer = () => {
  return (
    <section>
      <svg
        id='deco-clouds'
        xmlns='http://www.w3.org/2000/svg'
        version='1.1'
        width='100%'
        height='100'
        viewBox='0 0 100 100'
        preserveAspectRatio='none'
        fill='#34327c'
      >
        <path
          d='M-5 100 Q 0 20 5 100 Z
               M0 100 Q 5 0 10 100
               M5 100 Q 10 30 15 100
               M10 100 Q 15 10 20 100
               M15 100 Q 20 30 25 100
               M20 100 Q 25 -10 30 100
               M25 100 Q 30 10 35 100
               M30 100 Q 35 30 40 100
               M35 100 Q 40 10 45 100
               M40 100 Q 45 50 50 100
               M45 100 Q 50 20 55 100
               M50 100 Q 55 40 60 100
               M55 100 Q 60 60 65 100
               M60 100 Q 65 50 70 100
               M65 100 Q 70 20 75 100
               M70 100 Q 75 45 80 100
               M75 100 Q 80 30 85 100
               M80 100 Q 85 20 90 100
               M85 100 Q 90 50 95 100
               M90 100 Q 95 25 100 100
               M95 100 Q 100 15 105 100 Z'
        ></path>
      </svg>
      {/* <div className=' bg-[#34327c]  text-white p-[25px]'>
        <div className=' grid grid-cols-3 mx-[26px] '>
          <div className=' px-3 py-[15px] '>
            <div className=''>
              <p className='w-[50%]'>
                Mentoons is more than a service. We are a guiding light to
                evolving personalities. Help us help you transform you life
                today!
              </p>
              <div className=' p-8 w-[60%] '>
                <div className='text-center font-bold flex flex-col items-center justify-center '>
                  <span className='whitespace-nowrap'>SIGN OUR</span>
                  <span>NEWSLETTER</span>
                </div>
                <div className='box-border pt-3'>
                  <input
                    type='email'
                    placeholder='Email address'
                    className='p-2 w-full rounded-lg'
                  />
                </div>

                <div className='flex items-center  justify-center my-4 w-full'>
                  <button>SUBSCRIBE</button>
                </div>
              </div>
            </div>
          </div>
          <div className='px-12px py-15 flex flex-col items-center justify-center gap-2'>
            <div className='w-40'>
              <img src='/assets/mentoons-logo.png' alt='Mentoons Logo' />
            </div>

            <div className='flex gap-4 '>
              <div className='bg-pink-500 p-2  rounded-full'>
                <FaFacebookF />
              </div>
              <div className='bg-pink-500 p-2  rounded-full'>
                <FaLinkedin />
              </div>
              <div className='bg-pink-500 p-2  rounded-full'>
                <FaPinterest />
              </div>
              <div className='bg-pink-500 p-2  rounded-full'>
                <FaInstagram />
              </div>
            </div>
          </div>
          <div className='  px-12px py-15 flex flex-col items-center justify-center gap-2'>
            <div className=' p-2'>
              <h1 className='text-2xl text-white font-semibold text-center'>
                OPENING HOURS:
              </h1>
              <div className=' border-b flex items-center justify-center gap-4  p-2'>
                <span className='w-[]'>Monday to Friday</span>
                <span>10 a.m. to 7 p.m.</span>
              </div>

              <div className=' flex  items-center justify-between gap-4 p-4'>
                <div className=''>
                  <span>Weekends </span>
                  <p> / Holidays</p>
                </div>

                <div className=' w-32 rounded-lg bg-pink-600 p-4 text-center'>
                  available on appointment
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=' p-4 text-center text-sm text-white'>
          <p>
            Brand Powered by{" "}
            <span className='text-amber-500'>Propelling Stories</span>
          </p>
        </div>
      </div> */}
    </section>
  );
};

export default Footer;
