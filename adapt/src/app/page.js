'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

import Image from 'next/image';
//import { motion } from 'framer-motion';
import Link from 'next/link';
const Homepage = () => {
  return (
    <motion.div
      className="h-screen flex items-center justify-center"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className="w-full max-w-7xl flex flex-col lg:flex-row px-4 sm:px-8 lg:px-20 xl:px-48 text-lg lg:text-xl">
        {/* Image Container */}
        <div className="w-full lg:w-1/3 flex justify-center items-center relative mb-8 lg:mb-0">
          <div className="w-64 h-64 lg:w-full lg:h-full relative">
            <Image
              src="/priya.jpg"
              alt="Priya Chauhan"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Text Container */}
        <div className="w-full lg:w-2/3 flex flex-col gap-8 items-center justify-center">
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-center lg:text-left">
            Priya Chauhan
          </h1>

          {/* Description */}
          <p className="text-base lg:w-2/3 sm:text-lg lg:text-xl text-center lg:text-left leading-relaxed">
            Dynamic and results-driven Project Manager with 2 years of
            experience specializing in the successful management and execution
            of integration projects. Adept at coordinating cross-functional
            teams, driving project timelines, and delivering exceptional results
            within budgetary constraints. Seeking to leverage expertise in
            project management to contribute to the success and growth of a
            forward-thinking organization.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="./Portfolio">
              <button className="p-2 rounded-lg ring-1 ring-black bg-black text-white text-sm w-full sm:w-auto">
                View My Work
              </button>
            </Link>
            <Link href="./Contact">
              <button className="p-2 rounded-lg ring-1 ring-white bg-white text-black text-sm w-full sm:w-auto">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
