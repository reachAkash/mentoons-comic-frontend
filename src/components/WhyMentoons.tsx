import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { FaRegCirclePlay } from "react-icons/fa6";

const WhyMentoons: React.FC = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-fit mx-auto lg:mx-0  flex items-center justify-between gap-4">
          <div>
            <FaRegCirclePlay className="text-red-500 text-6xl cursor-pointer" />
          </div>
          <button className="text-red-500 text-3xl">Why Mentoons</button>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-[600px]">
        <video
          className="rounded-lg"
          src="https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/Others/What+is+Mentoons+(Buddy+Nubby)_01.mp4"
          width="700"
          height="400"
          loop
          autoPlay
          controls
          controlsList="nodownload"
        ></video>
      </DialogContent>
    </Dialog>
  );
};

export default WhyMentoons;
