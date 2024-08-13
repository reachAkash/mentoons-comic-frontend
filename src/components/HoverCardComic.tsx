import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { SheetClose } from "./ui/sheet";
import { useNavigate } from "react-router-dom";
import { Comic } from "@/redux/comicSlice";
import React from "react";
import { ShowButtonInterface } from "./Search";

export interface HoverCardComicProps {
  item: Comic;
  index: number;
  setShowButton: Function;
  showButton: ShowButtonInterface;
}

const HoverCardComic: React.FC<HoverCardComicProps> = ({
  item,
  index,
  showButton,
  setShowButton,
}) => {
  const navigate = useNavigate();
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div
          onMouseOver={() => setShowButton({ index, show: true })}
          onMouseLeave={() => setShowButton({ index: null, show: false })}
          className="relative flex flex-col items-center justify-center transition-all ease-in-out"
        >
          <SheetClose>
            <img
              onClick={() => navigate("/audio-comic?comic=" + item.name)}
              className={`cursor-pointer ${
                index === showButton?.index && "grayscale-[80%]"
              } w-full md:w-[15rem] md:h-[14rem] duration-700`}
              key={index}
              src={item.thumbnail}
            />
          </SheetClose>
          {index === showButton?.index && showButton.show === true && (
            <SheetClose>
              {" "}
              <Button
                onClick={() => navigate("/audio-comic?comic=" + item.name)}
                className="absolute left-0 font-semibold bottom-0 w-full bg-primary text-white hover:text-primary hover:bg-white duration-500"
              >
                View Sample
              </Button>
            </SheetClose>
          )}
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-11rem">
        <div className="px-2 py-2">
          <img
            className="w-full h-[80%]"
            src={item.thumbnail}
            alt="comic thumbnail"
          />
          <div className="cursor-pointer hover:text-primary text-sm font-semibold text-center underline">
            {item.name}
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export const ComicCard: React.FC<{ item: Comic }> = ({ item }) => {
  return (
    <div className="fixed left-[52%] z-[9999] top-[50%] translate-y-[-50%] bg-white shadow px-4 py-3 w-[20rem] space-y-2 rounded-lg">
      <img className="rounded-lg" src={item?.thumbnail} alt="comic card" />
      <div className="text-center font-semibold text-sm">{item?.name}</div>
    </div>
  );
};

export default HoverCardComic;
