// import { RootState } from "@/redux/store";
import React, { useEffect, useRef, useState } from "react";
// import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaRegCirclePlay } from "react-icons/fa6";
import { IoShareSocial } from "react-icons/io5";
import { TbExchange } from "react-icons/tb";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Comic } from "@/redux/comicSlice";
import PurchaseDialog from "../components/comics/PurchaseDialog";
import { toast } from "sonner";
import { useParams } from "react-router-dom";

export const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const AudioComicPage: React.FC = () => {
  const { comic } = useParams();
  const [showPurchaseDialog, setShowPurchaseDialog] = useState<boolean>(false);
  const navigate = useNavigate();
  const comicData = useSelector((store: RootState) => store.comics.comics);
  const [searchedComics, setSearchedComics] = useState<Comic[]>([]);
  const [currentComic, setCurrentComic] = useState<Comic>();
  const [factNm, setFactNm] = useState<number>(0);
  const [input, setInput] = useState<string>("");
  const videoRef = useRef<any>();
  const [hasPurchased, setHasPurchased] = useState<boolean>(false);
  const funFacts: string[] = [
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

  // handlers

  const handleShowPurchase = () => {
    setShowPurchaseDialog(true);
  };

  const handleCheckPurchased = () => {
    if (hasPurchased) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  const handleComic = (name: string) => {
    if (name === comic) return;
    navigate("/mentoons-comics/audio-comics/" + name);
  };

  const handleRandomFact = () => {
    const val = Math.floor(Math.random() * funFacts.length);
    console.log(val);
    setFactNm(val);
  };

  const handleFilterComics = (value: string) => {
    const items = comicData?.filter((item) => {
      return item.name.toLowerCase().includes(value.toLowerCase());
    });
    setSearchedComics(items);
  };

  const handleFindComic = () => {
    const data = comicData?.find((item: Comic) => {
      return item.name == comic;
    });
    setCurrentComic(data);
  };

  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(
      () => {
        toast("Link copied to clipboard", {
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        });
      },
      (err) => {
        console.error("Failed to copy URL: ", err);
      }
    );
  };

  const comicsToDisplay =
    searchedComics.length > 0 ? searchedComics : comicData;

  useEffect(() => {
    handleRandomFact();
    handleFindComic();
  }, [comic]);

  useEffect(() => {
    const key = setTimeout(() => {
      handleShowPurchase();
      handleCheckPurchased();
    }, 30000);
    return () => {
      clearTimeout(key);
    };
  }, [comic]);

  useEffect(() => {
    handleCheckPurchased();
  }, [hasPurchased]);
  // const comic = useSelector((store:RootState)=>store.comics.cart)
  return (
    <>
      <div className="container relative py-16 pb-20 space-y-10">
        <div className="relative flex flex-col md:flex-row  items-start justify-between space-y-8 md:space-y-0">
          <div className="w-full md:w-[60%] space-y-6">
            <video
              ref={videoRef}
              className="rounded-lg"
              src={currentComic?.videoLink}
              width="700"
              height="400"
              loop
              autoPlay
              controls={hasPurchased ? true : false}
              controlsList="nodownload"
            ></video>
            <div className="space-y-2">
              <div className="border w-fit px-2 py-1 rounded-md text-sm border-green-300 text-green-400 bg-green-100 font-semibold">
                Audio Comic
              </div>
              <div className="text-3xl font-semibold tracking-wide">
                {comic}
              </div>
              <div
                onClick={handleShare}
                className="flex items-center gap-2 border border-black w-fit px-4 py-1 rounded-full bg-black text-white hover:bg-white hover:text-black cursor-pointer transition-all ease-in-out duration-300"
              >
                <IoShareSocial /> Share
              </div>
            </div>
          </div>
          <div className="w-full md:w-[40%]  group px-6 pt-4 pb-10 space-y-8 rounded-md bg-white text-black shadow-xl">
            <div className="space-y-1">
              <div className="font-semibold text-lg">Other Comics</div>
              <div className="text-gray-400">{comicData.length} Comics</div>
              <div className=" flex items-center rounded-md bg-white border border-gray-300 px-3 py-2">
                <CiSearch className="text-black text-2xl" />{" "}
                <input
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                    handleFilterComics(e.target.value);
                  }}
                  className="bg-transparent text-black border-none outline-none px-2"
                  placeholder="Search Comics..."
                />
              </div>
              {input && searchedComics.length == 0 && (
                <div className="gap-4">
                  <span className="text-xs text-red-500">
                    No comics found!{" "}
                  </span>
                  <span className="text-xs text-green-400">
                    Explore other comics!
                  </span>
                </div>
              )}
            </div>
            <div className="overflow-hidden group-hover:overflow-y-scroll pr-[1rem] h-[20rem] transition-all ease-in-out duration-300">
              {comicsToDisplay?.map((item: Comic) => {
                return (
                  <div
                    onClick={() => handleComic(item.name)}
                    className="flex items-center gap-4 px-4 py-3 hover:bg-gray-100 rounded-md transition-all ease-in-out duration-300 cursor-pointer"
                  >
                    <FaRegCirclePlay className="text-2xl text-gray-400" />
                    <div>
                      <div className="font-medium">{item.name}</div>
                      <div className="text-sm italic text-gray-400">
                        {item.duration} mins
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="bg-primary pb-6 rounded-md space-y-6">
          <div className="flex items-center gap-2 text-3xl text-black w-fit px-4 py-3 shadow-2xl font-semibold bg-white rounded-b-lg rounded-s-none">
            Fun Fact
          </div>
          <div className="flex items-center justify-between px-12">
            <div className="text-white text-2xl space-y-5">
              <div className="text-sm md:text-base">{funFacts[factNm]}</div>
              <div
                onClick={handleRandomFact}
                className="flex items-center gap-2 bg-white hover:bg-black hover:text-white cursor-pointer shadow-xl w-fit text-black text-sm px-4 py-2 rounded-md"
              >
                New Fact
                <TbExchange className="text-2xl" />
              </div>
            </div>
            {/* <BsEmojiAstonished className="flex-shrink-0 text-[10rem] text-white" /> */}
            {/* <div className="hidden md:flex flex-shrink-0 text-[10rem] text-white">
              🫨
            </div> */}
          </div>
        </div>
      </div>
      {showPurchaseDialog && (
        <PurchaseDialog
          setHasPurchased={setHasPurchased}
          currData={currentComic}
        />
      )}
    </>
  );
};

export default AudioComicPage;
