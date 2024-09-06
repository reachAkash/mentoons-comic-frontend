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
          <button className="text-red-500 text-3xl">
            Why Choose Mentoons Comics
          </button>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-white sm:max-w-[425px] md:max-w-[600px]">
        <video
          className="rounded-lg"
          src="https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/Others/Why+Choose+Mentoons+Comics.mp4"
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
