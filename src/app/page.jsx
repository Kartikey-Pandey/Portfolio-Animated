"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  // Function to handle the download resume action
  const handleDownloadResume = () => {
    // Replace 'resume.pdf' with the actual file name and path in the public directory
    const resumeUrl = "/Kartikey_Experienced_Resume.pdf";
    // Create a temporary anchor element to trigger the download
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Kartikey_Experienced_Resume.pdf"; // The name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">Hello, I&apos;m Kartikey</h1>
          {/* SUBTITLE */}
          <h2 className="text-2xl md:text-4xl font-semibold">Full Stack Developer</h2>
          {/* MAIN TITLE */}
           {/* <h1 className="text-4xl md:text-6xl font-bold">
             Crafting Digital Experiences, Designing Tomorrow.
           </h1> */}
          {/* DESC */}
          <p className="md:text-xl">
            A Full-Stack Developer passionate about creating seamless and innovative web solutions.
            Let&apos;s collaborate and bring your digital vision to life!
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <button  onClick={handleDownloadResume} className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              Dowmload Resume
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
