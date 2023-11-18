"use client";

import styles from "./page.module.css";
import React, { use, useState } from "react";
import Navigation from "@/app/component/navigation";
import { motion } from "framer-motion";

export default function Hobbies() {
  const left = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };

  const right = {
    hidden: { opacity: 0, x: 200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 100 },
  };

  let General = {
    General: [
      {
        id: 1,
        title: "Singing",
        types: "Japanese, English, Korean, Chinese",
        img: "/assets/erwin.jpeg",
        comments:
          "I've loved singing since childhood, this is one of my hobbies that's persisted throughout the years",
      },
      {
        id: 2,
        title: "Games",
        types:
          "FPS, MOBAs, JRPGS, Nintendo Switch, Escape Rooms, Paintball, Bowling, Billiards",
        img: "/assets/erwin.jpeg",
        comments: "I'm an avid gamer, be it outdoor gaming or indoor gaming.",
      },
    ],
  };

  let Indoors = {
    Indoors: [
      {
        id: 1,
        title: "Reading books",
        types:
          "Light novels, auto-biographies, motivational, knowledge on miscellaneous stuff",
        img: "/assets/erwin.jpeg",
        comments:
          "I prefer to read books indoors as I can read at a leisurely pace with books that catch my interest",
      },
      {
        id: 2,
        title: "Coding",
        types: "Front-end, back-end",
        img: "/assets/erwin.jpeg",
        comments:
          "Obviously to code you need to have some motivation to learn code, as such it's also one of my hobbies",
      },
    ],
  };

  let Outdoors = {
    Outdoors: [
      {
        id: 1,
        title: "Going out with friends",
        types:
          "staycations, going to the mall, outdoor activities, escape rooms, board games",
        img: "/assets/erwin.jpeg",
        comments:
          "I've mostly evolved from just being cooped up in my room to preferring outings with friends. Any activities done with the right friends are always fun",
      },
      {
        id: 2,
        title: "Travelling",
        types: "Tours, self-healing journeys, trips to other countries",
        img: "/assets/erwin.jpeg",
        comments:
          "Similarly to the above, I've learnt to enjoy the joys of the outside world. Being cooped up is very comfortable, but once in a while, a journey outside is needed to heal the mind, body and soul",
      },
    ],
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <html className={styles.html}>
        <body>
          <Navigation />
          <div className="w-full px-2 mt-16 mr-auto ml-auto px-5">
            <motion.h3
              variants={left}
              initial="hidden"
              animate="enter"
              exit="exit"
              transition={{
                ease: "linear",
                duration: 2,
                x: { duration: 1 },
              }}
              className="bg-gray-700 p-3 space-x-1 text-yellow-500 ml-5 mr-10 mb-3"
            >
              General
            </motion.h3>
            {Object.values(General).map((posts, idx) => (
              <motion.div
                variants={left}
                initial="hidden"
                animate="enter"
                exit="exit"
                transition={{
                  ease: "linear",
                  duration: 2,
                  x: { duration: 1 },
                  delay: 1, 
                }}
                key={idx}
                className={"bg-white p-3 text-yellow-500 ml-5 mr-10"}
              >
                <ul>
                  {posts.map((post) => (
                    <li
                      key={post.id}
                      className="relative p-3 hover:bg-gradient-to-r from-gray-900 from:10% to-gray-500"
                    >
                      <h3 className="text-sm font-medium leading-5">
                        {post.title}
                      </h3>
                      <hr className={styles.line}></hr>
                      <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-400">
                        <li>{post.types}</li>
                      </ul>
                      <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-400">
                        <li>{post.comments}</li>
                      </ul>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="w-full px-2 mt-6 mr-auto ml-auto px-5">
            <motion.h3
              variants={right}
              initial="hidden"
              animate="enter"
              exit="exit"
              transition={{
                ease: "linear",
                duration: 2,
                x: { duration: 1 },
                delay: 2, 
              }}
              className="bg-gray-700 p-3 space-x-1 text-yellow-500 ml-5 mr-10 mb-3"
            >
              Indoors
            </motion.h3>
            {Object.values(Indoors).map((posts, idx) => (
              <motion.div
                variants={right}
                initial="hidden"
                animate="enter"
                exit="exit"
                transition={{
                  ease: "linear",
                  duration: 2,
                  x: { duration: 1 },
                  delay: 3, 
                }}
                key={idx}
                className={"bg-white p-3 text-yellow-500 ml-5 mr-10"}
              >
                <ul>
                  {posts.map((post) => (
                    <li
                      key={post.id}
                      className="relative p-3 hover:bg-gradient-to-r from-gray-900 from:10% to-gray-500"
                    >
                      <h3 className="text-sm font-medium leading-5">
                        {post.title}
                      </h3>
                      <hr className={styles.line}></hr>
                      <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-400">
                        <li>{post.types}</li>
                      </ul>
                      <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-400">
                        <li>{post.comments}</li>
                      </ul>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="w-full px-2 mt-6 mr-auto ml-auto px-5 mb-20">
            <motion.h3
              variants={left}
              initial="hidden"
              animate="enter"
              exit="exit"
              transition={{
                ease: "linear",
                duration: 2,
                x: { duration: 1 },
                delay: 4, 
              }}
              className="bg-gray-700 p-3 space-x-1 text-yellow-500 ml-5 mr-10 mb-3"
            >
              Outdoors
            </motion.h3>
            {Object.values(Outdoors).map((posts, idx) => (
              <motion.div
                variants={left}
                initial="hidden"
                animate="enter"
                exit="exit"
                transition={{
                  ease: "linear",
                  duration: 2,
                  x: { duration: 1 },
                  delay: 5, 
                }}
                key={idx}
                className={"bg-white p-3 text-yellow-500 ml-5 mr-10"}
              >
                <ul>
                  {posts.map((post) => (
                    <li
                      key={post.id}
                      className="relative p-3 hover:bg-gradient-to-r from-gray-900 from:10% to-gray-500"
                    >
                      <h3 className="text-sm font-medium leading-5">
                        {post.title}
                      </h3>
                      <hr className={styles.line}></hr>
                      <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-400">
                        <li>{post.types}</li>
                      </ul>
                      <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-400">
                        <li>{post.comments}</li>
                      </ul>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </body>
      </html>
    </>
  );
}
