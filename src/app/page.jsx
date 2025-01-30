"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Homepage = () => {
  const router = useRouter();

  // Function to handle the download resume action
  const handleDownloadResume = () => {
    const resumeUrl = "/Kartikey_Experienced_Resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Kartikey_Experienced_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Function to navigate to the contact page
  const handleContactClick = () => {
    router.push("/contact");
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
          {/* DESC */}
          <p className="md:text-xl">
            A Full-Stack Developer passionate about creating seamless and innovative web solutions.
            Let&apos;s collaborate and bring your digital vision to life!
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <button onClick={handleDownloadResume} className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              Download Resume
            </button>
            <button onClick={handleContactClick} className="p-4 rounded-lg ring-1 ring-black">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
