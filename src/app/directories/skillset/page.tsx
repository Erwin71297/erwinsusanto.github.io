"use client";

import styles from "./page.module.css";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/app/component/navigation";

export default function Skillset() {
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

  let go = {
    Go: [
      {
        id: 1,
        title: "Go Language",
        types:
          "go-routines, message brokers (ex: GCP Pubsub), Redis (cache), Logging, Error handling, and Tracking (scalyr, otel, sonarqube, New Relic)",
        comments:
          "I started golang at around the same time I started learning backend engineering. It was a new experience which took a while to get used to. To me golang is easy to learn but hard to master, as there's a lot of stuff that needs consideration before implementation. A typical example of this is when accessing the queries, you have the option to use the golang provided gorm or you could still use rawquery. Both have pros and cons and needs sufficient enough knowledge to know when to use which. Another clear example of this is when using golang to perform functions that can be run using go routines. This is because while go routines are recommended when you have many background tasks, the way you use it can result in it being slower and heavier than the typical methods like async functions.",
        commentscont:
          "All in all, golang is a fun language to learn with many capabilies and synergy with the newer front-end technology. And even after continuing to use it after 2 years +, I believe that I have only scratched the surface of what's to come.",
      },
    ],
  };

  let next = {
    Next: [
      {
        id: 1,
        title: "Next.js",
        types: "Routing, Usestates, Transitions, Modals, etc",
        comments:
          "Originally I took the multimedia sub course for Computer Science in uni, meaning that I'm actually more well versed in front-end centric theories, but in comparison, most of the works that's I've done front-end wise is more or less self projects rather than real work experience. This site alone is one such example.",
        commentscont:
          "I do have some favorability towards front-end code as it was my original choice to pursue front-end. And although I've left it for a while in wake of gaining knowledge and experience in back-end, I've been trying to keep my knowledge on the best front-end tech that's available and as such have been practicing it, like nextjs.",
      },
    ],
  };

  let html = {
    HTML: [
      {
        id: 1,
        title: "HTML",
        comments:
          "As a person who came from studying multimedia in Computer Science I am well versed in both HTML and CSS.",
      },
    ],
  };

  let java = {
    Java: [
      {
        id: 1,
        title: "Java",
        comments:
          "During my time in internship is where I learnt most my knowledge on javascript. As I learnt to code front-end as well as using android studio to code mobile apps, I learnt how to utilize javascript.",
      },
    ],
  };

  let sql = {
    MySql: [
      {
        id: 1,
        title: "MySQL",
        comments:
          "One of the two server databases that I am acquainted with when coding using the go language.",
      },
    ],
  };

  let postgre = {
    Postgre: [
      {
        id: 1,
        title: "PostGreSQL",
        comments:
          "One of the two server databases that I am acquainted with when coding using the go language.",
      },
    ],
  };

  let c = {
    C: [
      {
        id: 1,
        title: "C#",
        comments:
          "A language that I learnt during my time at uni when learning to use unity in my multimedia course.",
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
              Go Language
            </motion.h3>
            {Object.values(go).map((posts, idx) => (
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
                      className="relative p-3 hover:bg-gradient-to-r from-gray-900 from:10% to-gray-600"
                    >
                      <hr className={styles.line}></hr>
                      <h4 className="mt-2">Examples :</h4>
                      <ul className="mt-1 flex space-x-1 text-base font-normal leading-4 text-gray-400">
                        <li>{post.types}</li>
                      </ul>
                      <h4 className="mt-5">Description :</h4>
                      <ul className="mt-2 flex space-x-1 text-base font-normal leading-4 text-gray-400">
                        <li>{post.comments}</li>
                      </ul>
                      <ul className="mt-3 flex space-x-1 text-base font-normal leading-4 text-gray-400">
                        <li>{post.commentscont}</li>
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
              Next JS & React JS
            </motion.h3>
            {Object.values(next).map((posts, idx) => (
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
                      className="relative p-3 hover:bg-gradient-to-r from-gray-900 from:10% to-gray-600"
                    >
                      <hr className={styles.line}></hr>
                      <h4 className="mt-2">Examples :</h4>
                      <ul className="mt-1 flex space-x-1 text-base font-normal leading-4 text-gray-400">
                        <li>{post.types}</li>
                      </ul>
                      <h4 className="mt-5">Description :</h4>
                      <ul className="mt-2 flex space-x-1 text-base font-normal leading-4 text-gray-400">
                        <li>{post.comments}</li>
                      </ul>
                      <ul className="mt-3 flex space-x-1 text-base font-normal leading-4 text-gray-400">
                        <li>{post.commentscont}</li>
                      </ul>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="w-full px-2 mt-6 mr-auto ml-auto px-5">
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
              HTML & CSS
            </motion.h3>
            {Object.values(html).map((posts, idx) => (
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
                      className="relative p-3 hover:bg-gradient-to-r from-gray-900 from:10% to-gray-600"
                    >
                      <hr className={styles.line}></hr>
                      <h4 className="mt-2">Description :</h4>
                      <ul className="mt-2 flex space-x-1 text-base font-normal leading-4 text-gray-400">
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
                delay: 6,
              }}
              className="bg-gray-700 p-3 space-x-1 text-yellow-500 ml-5 mr-10 mb-3"
            >
              Javascript
            </motion.h3>
            {Object.values(java).map((posts, idx) => (
              <motion.div
                variants={right}
                initial="hidden"
                animate="enter"
                exit="exit"
                transition={{
                  ease: "linear",
                  duration: 2,
                  x: { duration: 1 },
                  delay: 7,
                }}
                key={idx}
                className={"bg-white p-3 text-yellow-500 ml-5 mr-10"}
              >
                <ul>
                  {posts.map((post) => (
                    <li
                      key={post.id}
                      className="relative p-3 hover:bg-gradient-to-r from-gray-900 from:10% to-gray-600"
                    >
                      <hr className={styles.line}></hr>
                      <h4 className="mt-2">Description :</h4>
                      <ul className="mt-2 flex space-x-1 text-base font-normal leading-4 text-gray-400">
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
              variants={left}
              initial="hidden"
              animate="enter"
              exit="exit"
              transition={{
                ease: "linear",
                duration: 2,
                x: { duration: 1 },
                delay: 8,
              }}
              className="bg-gray-700 p-3 space-x-1 text-yellow-500 ml-5 mr-10 mb-3"
            >
              MySQL
            </motion.h3>
            {Object.values(sql).map((posts, idx) => (
              <motion.div
                variants={left}
                initial="hidden"
                animate="enter"
                exit="exit"
                transition={{
                  ease: "linear",
                  duration: 2,
                  x: { duration: 1 },
                  delay: 9,
                }}
                key={idx}
                className={"bg-white p-3 text-yellow-500 ml-5 mr-10"}
              >
                <ul>
                  {posts.map((post) => (
                    <li
                      key={post.id}
                      className="relative p-3 hover:bg-gradient-to-r from-gray-900 from:10% to-gray-600"
                    >
                      <hr className={styles.line}></hr>
                      <h4 className="mt-2">Description :</h4>
                      <ul className="mt-2 flex space-x-1 text-base font-normal leading-4 text-gray-400">
                        <li>{post.comments}</li>
                      </ul>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="w-full px-2 mt-6 mr-auto ml-auto px-5 ">
            <motion.h3
              variants={right}
              initial="hidden"
              animate="enter"
              exit="exit"
              transition={{
                ease: "linear",
                duration: 2,
                x: { duration: 1 },
                delay: 10,
              }}
              className="bg-gray-700 p-3 space-x-1 text-yellow-500 ml-5 mr-10 mb-3"
            >
              PostGreSQL
            </motion.h3>
            {Object.values(postgre).map((posts, idx) => (
              <motion.div
                variants={right}
                initial="hidden"
                animate="enter"
                exit="exit"
                transition={{
                  ease: "linear",
                  duration: 2,
                  x: { duration: 1 },
                  delay: 11,
                }}
                key={idx}
                className={"bg-white p-3 text-yellow-500 ml-5 mr-10"}
              >
                <ul>
                  {posts.map((post) => (
                    <li
                      key={post.id}
                      className="relative p-3 hover:bg-gradient-to-r from-gray-900 from:10% to-gray-600"
                    >
                      <hr className={styles.line}></hr>
                      <h4 className="mt-2">Description :</h4>
                      <ul className="mt-2 flex space-x-1 text-base font-normal leading-4 text-gray-400">
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
                delay: 12,
              }}
              className="bg-gray-700 p-3 space-x-1 text-yellow-500 ml-5 mr-10 mb-3"
            >
              C#
            </motion.h3>
            {Object.values(c).map((posts, idx) => (
              <motion.div
                variants={left}
                initial="hidden"
                animate="enter"
                exit="exit"
                transition={{
                  ease: "linear",
                  duration: 2,
                  x: { duration: 1 },
                  delay: 13,
                }}
                key={idx}
                className={"bg-white p-3 text-yellow-500 ml-5 mr-10"}
              >
                <ul>
                  {posts.map((post) => (
                    <li
                      key={post.id}
                      className="relative p-3 hover:bg-gradient-to-r from-gray-900 from:10% to-gray-600"
                    >
                      <hr className={styles.line}></hr>
                      <h4 className="mt-2">Description :</h4>
                      <ul className="mt-2 flex space-x-1 text-base font-normal leading-4 text-gray-400">
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
