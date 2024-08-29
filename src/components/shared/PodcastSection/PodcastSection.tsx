import Wordbreak from "@/components/comics/Wordbreak";
import { motion } from "framer-motion";
import React from "react";
import { PODCAST_DETAILS } from "../../../constant";
import PodcastCardExp from "./PodcastCardExp";

const PodcastSection = () => {
  const [currentlyPlaying, setCurrentlyPlaying] =
    React.useState<HTMLAudioElement | null>(null);
  const [isSubscribed, setIsSubscribed] = React.useState<boolean>(false);

  return (
    <section className='p-4 py-12  bg-primary'>
      <motion.div
        initial={{ opacity: 0.5 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className='space-y-5 pb-8 text-center lg:text-start md:pl-8'
      >
        <motion.div
          initial={{ opacity: 0.5 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className=' text-3xl text-orange-900 lineBefore uppercase'
        >
          Podcast
        </motion.div>
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1.5 }}
          className='text-5xl lg:text-7xl text-white w-full font-extrabold leading-[1.10]'
        >
          Our Top Trendy <Wordbreak /> Fun Podcast
        </motion.div>
      </motion.div>

      <div className='grid grid-cols-1 gap-4  md:grid-cols-2  md:px-8 lg:grid-cols-3'>
        {PODCAST_DETAILS.map((podcast) => (
          // <PodcastCard
          //   key={podcast.id}
          //   podcast={podcast}
          //   currentlyPlaying={currentlyPlaying}
          //   setCurrentlyPlaying={setCurrentlyPlaying}
          // />
          <PodcastCardExp
            key={podcast.id}
            isSubscribed={isSubscribed}
            setIsSubscribed={setIsSubscribed}
            podcast={podcast}
            currentlyPlaying={currentlyPlaying}
            setCurrentlyPlaying={setCurrentlyPlaying}
          />
        ))}
      </div>
    </section>
  );
};

export default PodcastSection;
