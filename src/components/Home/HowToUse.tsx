import Heading from '../common/Heading';
import { Fade } from 'react-awesome-reveal';

type CardData = {
  imgUrl: string;
  title: string;
  description: string;
  btnTxt: string;
};

const HowToUse: React.FC = () => {
  const cardsData: CardData[] = [
    {
      imgUrl: '/create.jpg',
      title: 'Create a Account',
      description: 'Quick and easy sign-up to access all features.',
      btnTxt: 'Sign Up',
    },
    {
      imgUrl: '/plan.jpg',
      title: 'Choose Your Plan',
      description:
        'Select the subscription that best fits your needs. We offer various subscription plans to cater to different needs and budgets. Each plan provides full access to our library of comics, audio comics, stories, podcasts, and much more.',
      btnTxt: 'Check plans',
    },
    {
      imgUrl: '/explore.jpg',
      title: 'Explore and Enjoy',
      description: 'Start exploring all the content and activities available.',
      btnTxt: 'Explore more',
    },
  ];

  return (
    <div className='h-full w-full py-16 bg-light-blue relative'>
      <Heading heading='Getting Started' />
      <div className='h-[10rem] w-[10rem] absolute top-[4rem] left-[15rem]'><img src="/handprints.png" alt="icons" className='h-full w-full'/></div>
      <div className='h-[10rem] w-[10rem] absolute top-[4rem] right-[15rem]'><img src="/handprints2.png" alt="icons" className='h-full w-full'/></div>
      <div className='flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-40'>
        {cardsData.map((card, index) => (
          <Fade key={index} direction="up" triggerOnce>
            <div className="max-w-sm bg-white rounded-lg shadow-custom-light dark:bg-gray-800 dark:border-gray-700 min-h-[40rem]">
              <a href="#">
                <img className="rounded-t-lg" src={card.imgUrl} alt={card.title} />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{card.title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{card.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  {card.btnTxt}
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default HowToUse;
