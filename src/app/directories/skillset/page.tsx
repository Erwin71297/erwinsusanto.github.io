"use client";

import styles from "./page.module.css";
import React, { useState } from "react";
import { Tab } from "@headlessui/react";

export default function Skillset() {
  const [show, setShow] = useState(false);
  const [showGolang, setShowGolang] = useState(true);
  const [showJs, setShowJs] = useState(true);
  const [showHtml, setShowHtml] = useState(true);
  const [showCss, setShowCss] = useState(true);
  const [showJava, setShowJava] = useState(true);
  const [showSql, setShowSql] = useState(true);
  const [showPostgre, setShowPostgre] = useState(true);
  const [showC, setShowC] = useState(true);

  let [categories] = useState({
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
    HTML: [
      {
        id: 1,
        title: "HTML",
        comments:
          "As a person who came from studying multimedia in Computer Science I am well versed in both HTML and CSS.",
      },
    ],
    CSS: [
      {
        id: 1,
        title: "CSS",
        comments:
          "As a person who came from studying multimedia in Computer Science I am well versed in both HTML and CSS.",
      },
    ],
    Java: [
      {
        id: 1,
        title: "Java",
        comments:
          "During my time in internship is where I learnt most my knowledge on javascript. As I learnt to code front-end as well as using android studio to code mobile apps, I learnt how to utilize javascript.",
      },
    ],
    MySql: [
      {
        id: 1,
        title: "MySQL",
        comments:
          "One of the two server databases that I am acquainted with when coding using the go language.",
      },
    ],
    Postgre: [
      {
        id: 1,
        title: "PostGreSQL",
        comments:
          "One of the two server databases that I am acquainted with when coding using the go language.",
      },
    ],
    C: [
      {
        id: 1,
        title: "C#",
        comments:
          "A language that I learnt during my time at uni when learning to use unity in my multimedia course.",
      },
    ],
  });

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <html className={styles.html}>
       <div className={styles.body}>
          <a href="/" className={styles.homebutton}>
            Home
          </a>
          <h1 className={styles.header}>Skillset</h1>
        </div>
        <div className="w-full h-80 py-16 mr-auto ml-auto px-16 grid lg:grid-cols-6">
          <Tab.Group vertical>
            <Tab.List className="flex rounded-l-xl bg-gray-700 px-1 py-1 grid lg:grid-rows-8">
              {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-lg py-2.5text-sm font-medium leading-5 text-black-700",
                      "ring-white/60 ring-offset-2 ring-offset-yellow-400 focus:outline-none focus:ring-2",
                      selected
                        ? "bg-white shadow"
                        : "text-yellow-100 hover:bg-white/[0.12] hover:text-white"
                    )
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="lg:col-span-5">
              {Object.values(categories).map((posts, idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames(
                    "rounded-r-xl bg-white p-3",
                    "ring-white/60 ring-offset-2 ring-offset-yellow-400 focus:outline-none focus:ring-2"
                  )}
                >
                  <ul >
                    {posts.map((post) => (
                      <li
                        key={post.id}
                        className="h-80 rounded-md p-3 hover:bg-gray-100"
                      >
                        <h3 className="text-lg font-medium leading-7">
                          {post.title}
                        </h3>
                        <hr className={styles.line}></hr>
                        <ul className="mt-2 flex space-x-1 text-base font-normal leading-5 text-gray-500">
                          <li>{post.types}</li>
                        </ul>
                        <ul className="mt-5 flex space-x-1 text-base font-normal leading-4 text-gray-500">
                          <li>{post.comments}</li>
                        </ul>
                        <ul className="mt-2 flex space-x-1 text-base font-normal leading-4 text-gray-500">
                          <li>{post.commentscont}</li>
                        </ul>
                      </li>
                    ))}
                  </ul>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </html>
    </>
  );
}
