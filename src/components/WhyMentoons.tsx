import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const WhyMentoons: React.FC = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <video
          className="rounded-lg"
          src="akash"
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
