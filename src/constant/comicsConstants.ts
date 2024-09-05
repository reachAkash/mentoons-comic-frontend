import { GamesData } from "@/pages/FreeDownload";
import { Comic } from "@/redux/comicSlice";
import workshopImg1 from "/Buddy camp.png";
import workshopImg2 from "/Teen camp .png";
import workshopImg3 from "/Family camp.png";
import workshopImg4 from "@/assets/imgs/Workshops_Page_ 8.png";
import workshopImg5 from "@/assets/imgs/Workshops_Page_ 9.png";
import { WorkshopItems } from "@/components/comics/WorkshopsPage";

export const gamesData: GamesData[] = [
  {
    name: "Hangman",
    desc: "Hangman is a game",
    image: "/hangman.png",
    imgStyling: "bg-gradient-to-t from from-rose-200 to-white",
    cardStyling: "bg-purple-200",
    thumbnail_url:
      "https://mentoons-website.s3.ap-northeast-1.amazonaws.com/board-games/thumbnail/hangman.png",
    pdf_url:
      "https://mentoons-website.s3.ap-northeast-1.amazonaws.com/board-games/pdf/Hangman+game.pdf",
  },
  {
    name: "Word Game",
    desc: "Word Game is a game",
    image: "/wordGame.png",
    imgStyling: "bg-gradient-to-b from from-purple-200 to-white",
    cardStyling: "bg-lime-200",
    thumbnail_url:
      "https://mentoons-website.s3.ap-northeast-1.amazonaws.com/board-games/thumbnail/word+game.png",
    pdf_url:
      "https://mentoons-website.s3.ap-northeast-1.amazonaws.com/board-games/pdf/word+game.pdf",
  },
  {
    name: "Insta Board",
    desc: "Instaboard is a game",
    image: "/Instaboard.png",
    imgStyling: "bg-gradient-to-l from from-amber-200 to-white",
    cardStyling: "bg-rose-200",
    thumbnail_url:
      "https://mentoons-website.s3.ap-northeast-1.amazonaws.com/board-games/thumbnail/Instaboard.png",
    pdf_url:
      "https://mentoons-website.s3.ap-northeast-1.amazonaws.com/board-games/pdf/Insta+board+game.pdf",
  },
  {
    name: "Word Quest",
    desc: "Word Quest is a game",
    image: "/wordQuest.png",
    imgStyling: "bg-gradient-to-r from from-green-200 to-white",
    cardStyling: "bg-amber-200",
    thumbnail_url:
      "https://mentoons-website.s3.ap-northeast-1.amazonaws.com/board-games/thumbnail/word+quest.png",
    pdf_url:
      "https://mentoons-website.s3.ap-northeast-1.amazonaws.com/board-games/pdf/Word+Quest.pdf",
  },
  {
    name: "Emergency Contact Numbers",
    desc: "Emergency Contact Numbers is a game",
    image: "/wordQuest.png",
    imgStyling: "bg-gradient-to-r from from-green-200 to-white",
    cardStyling: "bg-amber-200",
    thumbnail_url:
      "https://mentoons-website.s3.ap-northeast-1.amazonaws.com/board-games/thumbnail/emergency+numbers.png",
    pdf_url:
      "https://mentoons-website.s3.ap-northeast-1.amazonaws.com/board-games/pdf/emergency++contact+numbers.pdf",
  },
];

// export const workshopData: WorkshopItems[] = [
//   {
//     name: "Buddy Camp",
//     img: WorkshopImg1,
//     desc: "Buddy Camp is a fun and educational workshop designed to help children ages 6-12 build lasting friendships and develop important social skills.",
//     video:
//       "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/Workshops/videos/Kids+Camp_01.mp4",
//     features: [
//       "Engaging activities that promote friendship and teamwork",
//       "Age-appropriate lessons on moral values and ethical decision-making",
//       "Practical exercises to improve conversation skills",
//       "Safe and supportive environment for children to practice social interactions",
//       "Experienced facilitators trained in child development",
//     ],
//     expectations: [
//       "Friendship-building games and exercises",
//       "Discussions on moral values and their importance in daily life",
//       "Role-playing scenarios to practice conversation starters",
//       "Group projects that encourage collaboration and communication",
//       "Reflection sessions to reinforce learned concepts",
//     ],
//     benefits: [
//       "Increased self-confidence in social situations",
//       "Better understanding of moral values and their application",
//       "Improved ability to initiate and maintain friendships",
//       "Enhanced communication skills for academic and personal success",
//       "Positive peer interactions in a structured setting",
//     ],
//   },
//   {
//     name: "Teen Camp",
//     img: WorkshopImg2,
//     desc: "Help your teenager navigate the challenges of adolescence De-Addiction, Scrolling De-Addiction & Hormonal Changes with our comprehensive Teen Camp workshop.",
//     video:
//       "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/Workshops/videos/Teen+Camp_01.mp4",
//     features: [
//       "Identity Exploration: Guides teens in understanding and developing their personal identity",
//       "Hormonal Changes: Educates on physical and emotional changes during puberty",
//       "Substance De-Addiction: Provides information and strategies to avoid or overcome substance use",
//       "Scrolling De-Addiction: Teaches healthy digital habits and reducing screen time",
//       "Age-Appropriate Content: Tailored for teenagers between 13-19 years old",
//       "Expert-Led Sessions: Conducted by qualified professionals in adolescent development",
//     ],
//     expectations: [
//       "Interactive group discussions",
//       "Informative presentations",
//       "Practical exercises and activities",
//       "Safe and supportive environment",
//       "Take-home resources for continued learning",
//     ],
//     benefits: [
//       "Gain confidence in their changing bodies and emotions",
//       "Learn to make informed decisions about substance use",
//       "Develop healthier relationships with technology",
//       "Improve communication skills with peers and adults",
//       "Build a stronger sense of self",
//     ],
//   },
//   {
//     name: "Family Camp",
//     img: WorkshopImg3,
//     desc: "Help your teenager navigate the challenges of adolescence De-Addiction, Scrolling De-Addiction & Hormonal Changes with our comprehensive Teen Camp workshop.",
//     video:
//       "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/Workshops/videos/Family+Camp_01.mp4",
//     features: [
//       "Engaging activities that promote friendship and teamwork",
//       "Age-appropriate lessons on moral values and ethical decision-making",
//       "Practical exercises to improve conversation skills",
//       "Safe and supportive environment for children to practice social interactions",
//       "Experienced facilitators trained in child development",
//     ],
//     expectations: [
//       "Friendship-building games and exercises",
//       "Discussions on moral values and their importance in daily life",
//       "Role-playing scenarios to practice conversation starters",
//       "Group projects that encourage collaboration and communication",
//       "Reflection sessions to reinforce learned concepts",
//     ],
//     benefits: [
//       "Increased self-confidence in social situations",
//       "Better understanding of moral values and their application",
//       "Improved ability to initiate and maintain friendships",
//       "Enhanced communication skills for academic and personal success",
//       "Positive peer interactions in a structured setting",
//     ],
//   },
// ];

export const funFacts: string[] = [
  "A group of flamingos is called a 'flamboyance.'",
  "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible.",
  "Bananas are berries, but strawberries aren't.",
  "Octopuses have three hearts and blue blood.",
  "Wombat poop is cube-shaped. This helps it stack neatly, preventing it from rolling away.",
  "A single strand of spaghetti is called a 'spaghetto.'",
  "Sea otters hold hands while sleeping to keep from drifting apart.",
  "A shrimp's heart is in its head.",
  "There are more stars in the universe than grains of sand on all the Earth's beaches.",
  "Sloths can take up to a month to digest their food.",
  "Cows have best friends and can become stressed when they are separated.",
  "Butterflies taste with their feet.",
  "A group of porcupines is called a 'prickle.'",
  "Some turtles can breathe through their butts!",
  "Koalas sleep up to 22 hours a day.",
];

export const comicsData: Comic[] = [
  // groupSmall = 6 - 12, groupMedium = 13 - 19, groupLarge = 20+
  {
    name: "Bet Your Life",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente maiores eius libero a commodi.",
    duration: "2:17",
    mini_thumbnail:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-09.jpg",
    thumbnail:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/Audio+comics+thumbnails/Untitled_Artwork+37.jpg",
    videoLink:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/AGES+13+-+19/BET_YOUR_LIFE.mp4",
    category: "groupMedium",
  },
  {
    name: "The Cell Life of Soniya",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente maiores eius libero a commodi.",
    duration: "2:31",
    mini_thumbnail:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-12.jpg",
    thumbnail:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/Audio+comics+thumbnails/Untitled_Artwork+27.jpg",
    videoLink:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/AGES+13+-+19/CELL_LIFE_OF_SONIYA_02.mp4",
    category: "groupMedium",
  },
  {
    name: "Choose Wisely",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente maiores eius libero a commodi.",
    duration: "4:27",
    mini_thumbnail:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-08.jpg",
    thumbnail:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/Audio+comics+thumbnails/Untitled_Artwork+33.jpg",
    videoLink:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/AGES+13+-+19/CHOOSE_WISELY.mp4",
    category: "groupMedium",
  },
  {
    name: "Come out of Gaming",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente maiores eius libero a commodi.",
    duration: "5:51",
    mini_thumbnail:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-05.jpg",
    thumbnail:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/Audio+comics+thumbnails/Untitled_Artwork+36.jpg",
    videoLink:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/AGES+13+-+19/COME_OUT_OF_GAMING_02.mp4",
    category: "groupMedium",
  },
  {
    name: "Comic on Divorce",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente maiores eius libero a commodi.",
    duration: "2:04",
    mini_thumbnail:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-07.jpg",
    thumbnail:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/Audio+comics+thumbnails/Untitled_Artwork+1+4.jpg",
    videoLink:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/AGES+13+-+19/COMIC_ON_DIVORCE_01.mp4",
    category: "groupMedium",
  },
  {
    name: "Don't Fade Away",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente maiores eius libero a commodi.",
    duration: "2:54",
    mini_thumbnail:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-05.jpg",
    thumbnail:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/Audio+comics+thumbnails/Untitled_Artwork+35.jpg",
    videoLink:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/AGES+13+-+19/DONT_FADE_AWAY_02.mp4",
    category: "groupMedium",
  },
  {
    name: "Hungry for Likes Not Life",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente maiores eius libero a commodi.",
    duration: "2:10",
    mini_thumbnail:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-15.jpg",
    thumbnail:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/Audio+comics+thumbnails/Untitled_Artwork+34.jpg",
    videoLink:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/AGES+13+-+19/HUNGRY_FOR_LIKES_NOT_LIFE_01.mp4",
    category: "groupMedium",
  },
  {
    name: "One Way Trip",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente maiores eius libero a commodi.",
    duration: "4:09",
    mini_thumbnail:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-22.jpg",
    thumbnail:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/Audio+comics+thumbnails/Untitled_Artwork+38.jpg",
    videoLink:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/AGES+13+-+19/ONE-WAY-TRIP_1.mp4",
    category: "groupMedium",
  },
  {
    name: "Rishi and Rohit",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente maiores eius libero a commodi.",
    duration: "2:20",
    mini_thumbnail:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-16.jpg",
    thumbnail:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/Audio+comics+thumbnails/Untitled_Artwork+29.jpg",
    videoLink:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/AGES+13+-+19/RISHI+AND+ROHIT.mp4",
    category: "groupMedium",
  },
  {
    name: "Rohan and the Puppies",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente maiores eius libero a commodi.",
    duration: "2:09",
    mini_thumbnail:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-17.jpg",
    thumbnail:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/Audio+comics+thumbnails/Untitled_Artwork+28.jpg",
    videoLink:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/AGES+13+-+19/Rohan+and+the+Puppies_01.mp4",
    category: "groupMedium",
  },
  {
    name: "Think Before You Act",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente maiores eius libero a commodi.",
    duration: "3:45",
    mini_thumbnail:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-17.jpg",
    thumbnail:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/Audio+comics+thumbnails/Think_Before_You_Act!.jpg",
    videoLink:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/AGES+13+-+19/Think+Before+You+Act.mp4",
    category: "groupMedium",
  },
  {
    name: "Tanya's Downfall",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente maiores eius libero a commodi.",
    duration: "1:53",
    mini_thumbnail:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-06.jpg",
    thumbnail:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/Audio+comics+thumbnails/Untitled_Artwork+26.jpg",
    videoLink:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/AGES+13+-+19/TANYA_DOWN-FALL_02.mp4",
    category: "groupMedium",
  },
  {
    name: "How Teenagers Lose Their Jobs Part-1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente maiores eius libero a commodi.",
    duration: "1:13",
    mini_thumbnail:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-23.jpg",
    thumbnail:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/Audio+comics+thumbnails/Untitled_Artwork+1+3.jpg",
    videoLink:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/AGES+20%2B/SANKAR_INTERVIEW.mp4",
    category: "groupLarge",
  },
  {
    name: "How Teenagers Lose Their Jobs Part-2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente maiores eius libero a commodi.",
    duration: "0:58",
    mini_thumbnail:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-24.jpg",
    thumbnail:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/Audio+comics+thumbnails/Untitled_Artwork+19.jpg",
    videoLink:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/AGES+20%2B/Sana+Comic+Interview.mp4",
    category: "groupLarge",
  },
  {
    name: "I can Manage (Time Management)",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente maiores eius libero a commodi.",
    duration: "1:29",
    mini_thumbnail:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-02.jpg",
    thumbnail:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/Audio+comics+thumbnails/Untitled_Artwork+24.jpg",
    videoLink:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/AGES+6+-+12/Asha+%26+Simran-+Time+management+(6-12)_1.mp4",
    category: "groupSmall",
  },
  {
    name: "Comic on Honesty",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente maiores eius libero a commodi.",
    duration: "1:16",
    mini_thumbnail:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-01.jpg",
    thumbnail:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/Audio+comics+thumbnails/Untitled_Artwork+40.jpg",
    videoLink:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/AGES+6+-+12/COMIC_ON_HONESTY.mp4",
    category: "groupSmall",
  },
  {
    name: "Greeting Comic",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente maiores eius libero a commodi.",
    duration: "1:44",
    mini_thumbnail:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/comic_4.jpg",
    thumbnail:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/Audio+comics+thumbnails/Untitled_Artwork+39.jpg",
    videoLink:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/AGES+6+-+12/GREETING_COMIC.mp4",
    category: "groupSmall",
  },
  {
    name: "Live and Let Live",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente maiores eius libero a commodi.",
    duration: "2:02",
    mini_thumbnail:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-21.jpg",
    thumbnail:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/Audio+comics+thumbnails/Untitled_Artwork+23.jpg",
    videoLink:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/AGES+6+-+12/SAY+SORRY+COMIC.mp4",
    category: "groupSmall",
  },
  {
    name: "Say Sorry",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente maiores eius libero a commodi.",
    duration: "2:08",
    mini_thumbnail:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-10.jpg",
    thumbnail:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/Audio+comics+thumbnails/Untitled_Artwork+20.jpg",
    videoLink:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/AGES+6+-+12/SAY+SORRY+COMIC.mp4",
    category: "groupSmall",
  },
  {
    name: "My Daily Routine",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente maiores eius libero a commodi.",
    duration: "0:47",
    mini_thumbnail:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-01.jpg",
    thumbnail:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/Audio+comics+thumbnails/Untitled_Artwork+25.jpg",
    videoLink:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/AGES+6+-+12/SUPRIYA_TIME_MANAGEMENT_1.mp4",
    category: "groupSmall",
  },
  {
    name: "Do You Know",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente maiores eius libero a commodi.",
    duration: "3:44",
    mini_thumbnail:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-20.jpg",
    thumbnail:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/Audio+comics+thumbnails/Untitled_Artwork+31.jpg",
    videoLink:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/BOOKS/BOOK+3+DO+YOU+KNOW_FINAL.mp4",
    category: "groupMedium",
  },
  {
    name: "Electronic Gadgets And Kids",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente maiores eius libero a commodi.",
    duration: "5:21",
    mini_thumbnail:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-13.jpg",
    thumbnail:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/Audio+comics+thumbnails/Untitled_Artwork+32.jpg",
    videoLink:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/BOOKS/BOOK_02_GADGETS_AND_KIDS_01.mp4",
    category: "groupMedium",
  },
  {
    name: "How to Handle Relationships",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente maiores eius libero a commodi.",
    duration: "5:11",
    mini_thumbnail:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-14.jpg",
    thumbnail:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/Audio+comics+thumbnails/Untitled_Artwork+30.jpg",
    videoLink:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/BOOKS/HOW+TO+HANDLE+RELATIONSHIP.mp4",
    category: "groupMedium",
  },
  {
    name: "Listen To Me",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente maiores eius libero a commodi.",
    duration: "2:12",
    mini_thumbnail:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-19.jpg",
    thumbnail:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/Audio+comics+thumbnails/Untitled_Artwork+22.jpg",
    videoLink:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/AGES+6+-+12/Comic+on+Listen+to+me_01.mp4",
    category: "groupSmall",
  },
];

export const workshopDetails: WorkshopItems[] = [
  {
    name: "Buddy Camp",
    desc: "Buddy Camp is a fun and educational workshop designed to help children ages 6-12 build lasting friendships and develop important social skills.",
    img: workshopImg1,
    video:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/Workshops/videos/Kids+Camp_01.mp4",
  },
  {
    name: "Teen Camp",
    desc: "Help your teenager navigate the challenges of adolescence De-Addiction, Scrolling De-Addiction & Hormonal Changes with our comprehensive Teen Camp workshop.",
    img: workshopImg2,
    video:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/Workshops/videos/Teen+Camp_01.mp4",
  },
  {
    name: "Family Camp",
    desc: "Help your teenager navigate the challenges of adolescence De-Addiction, Scrolling De-Addiction & Hormonal Changes with our comprehensive Teen Camp workshop.",
    img: workshopImg3,
    video:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/Workshops/videos/Family+Camp_01.mp4",
  },
  {
    name: "How to make your own Comic",
    desc: "Buddy Camp is a fun and educational workshop designed to help children ages 6-12 build lasting friendships and develop important social skills.",
    img: workshopImg4,
    video:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/Workshops/videos/How+to+make+your+Own+Comic+Workshop+Trailer_01.mp4",
  },
  {
    name: "How to make your own Character",
    desc: "Help your teenager navigate the challenges of adolescence De-Addiction, Scrolling De-Addiction & Hormonal Changes with our comprehensive Teen Camp workshop.",
    img: workshopImg5,
    video:
      "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/Workshops/videos/how+to+make+your+own+character+workshop.mp4",
  },
];
