'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import NavLink from './navLinks';
import { motion } from 'framer-motion';

const links = [
  { url: '/', title: 'Home' },
  { url: '/About', title: 'About' },
  //{ url: '/Portfolio', title: 'Portfolio' },
  //{ url: '/Contact', title: 'Contact' },
];
const Navbar = () => {
  {
    /* State */
  }

  const [open, setOpen] = useState(false);

  {
    /* Button */
  }

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: 'rgb(255, 255, 255)',
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const lastVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: 'rgb(255, 255, 255)',
    },
  };

  {
    /* List menu */
  }

  const listVariants = {
    closed: {
      x: '100vw',
    },
    opened: {
      x: 0,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariant = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <nav>
      {/* Links */}
      <div className="h-full flex items-center justify-between px-2 sm:px-8 lg:px-20 xl:px-48 text-xl">
        {/* Links Container */}
        <div className="hidden md:flex gap-4 w-1/1 justify-center">
          {links.map((link) => (
            <NavLink link={link} key={link.title} />
          ))}
        </div>

        {/* Logo */}
        <div className="md:hidden lg:flex w-1/2 xl:justify-center">
          <Link
            href="/"
            className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
          >
            <span className="text-white mr-1">Priya</span>
            <span className="w-16 rounded bg-white text-black">Chauhan</span>
          </Link>
        </div>

        {/*Socials */}
        <div className="hidden md:flex gap-4 w-1/9">
          <Link href="https://github.com/Sonaprishi">
            <Image src="/github.png" alt="" width={24} height={24} />
          </Link>
          <Link href="https://www.instagram.com/_prishi.__?igsh=MWt5ODh0NzB1MmFsaA==">
            <Image src="/instagram.png" alt="" width={24} height={24} />
          </Link>
          {/* <Link href="/">
                  <Image src="/facebook.png" alt="" width={24} height={24} />
                  </Link>
                  <Link href="/">
                    <Image src="/pinterest.png" alt="" width={24} height={24} />
                    </Link> */}
          <Link href="https://www.linkedin.com/in/priya-chauhan-77b88a219?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <Image src="/linkedin.png" alt="" width={24} height={24} />
          </Link>
        </div>

        {/* Menu button */}
        <div className="md:hidden">
          {/* MENU BUTTON */}
          <button
            className="w-10 h-8 flex flex-col justify-between z-50 relative"
            onClick={() => setOpen((prev) => !prev)}
          >
            <motion.div
              variants={topVariants}
              animate={open ? 'opened' : 'closed'}
              className="w-10 h-1 bg-black rounded origin-left"
            ></motion.div>
            <motion.div
              variants={centerVariants}
              animate={open ? 'opened' : 'closed'}
              className="w-10 h-1 bg-black rounded"
            ></motion.div>
            <motion.div
              variants={lastVariants}
              animate={open ? 'opened' : 'closed'}
              className="w-10 h-1 bg-black rounded origin-left"
            ></motion.div>
          </button>
          {/* MENU LIST */}
          {open && (
            <motion.div
              variants={listVariants}
              initial="closed"
              animate="opened"
              className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
            >
              {links.map((link) => (
                <motion.div
                  variants={listItemVariant}
                  className=""
                  key={link.title}
                >
                  <Link href={link.url}>{link.title}</Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
