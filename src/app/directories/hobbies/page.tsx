"use client";

import styles from "./page.module.css";
import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import Navigation from "@/app/component/navigation";

export default function Hobbies() {
  let [categories] = useState({
    General: [
      {
        id: 1,
        title: "Singing",
        types: "Japanese, English, Korean, Chinese",
        comments:
          "I've loved singing since childhood, this is one of my hobbies that's persisted throughout the years",
      },
      {
        id: 2,
        title: "Games",
        types:
          "FPS, MOBAs, JRPGS, Nintendo Switch, Escape Rooms, Paintball, Bowling, Billiards",
        comments: "I'm an avid gamer, be it outdoor gaming or indoor gaming.",
      },
    ],
    Indoors: [
      {
        id: 1,
        title: "Reading books",
        types:
          "Light novels, auto-biographies, motivational, knowledge on miscellaneous stuff",
        comments:
          "I prefer to read books indoors as I can read at a leisurely pace with books that catch my interest",
      },
      {
        id: 2,
        title: "Coding",
        types: "Front-end, back-end",
        comments:
          "Obviously to code you need to have some motivation to learn code, as such it's also one of my hobbies",
      },
    ],
    Outdoors: [
      {
        id: 1,
        title: "Going out with friends",
        types:
          "staycations, going to the mall, outdoor activities, escape rooms, board games",
        comments:
          "I've mostly evolved from just being cooped up in my room to preferring outings with friends. Any activities done with the right friends are always fun",
      },
      {
        id: 2,
        title: "Travelling",
        types: "Tours, self-healing journeys, trips to other countries",
        comments:
          "Similarly to the above, I've learnt to enjoy the joys of the outside world. Being cooped up is very comfortable, but once in a while, a journey outside is needed to heal the mind, body and soul",
      },
    ],
  });

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <html className={styles.html}>
        <body>
         <Navigation/>
          <div className="w-full px-2 py-16 mr-auto ml-auto px-5">
            <Tab.Group>
              <Tab.List className="flex space-x-1 rounded-xl bg-yellow-900/20 p-1">
                {Object.keys(categories).map((category) => (
                  <Tab
                    key={category}
                    className={({ selected }) =>
                      classNames(
                        "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black-700",
                        "ring-white/60 ring-offset-2 ring-offset-yellow-400 focus:outline-none focus:ring-2",
                        selected
                          ? "bg-white shadow text-black"
                          : "text-yellow-100 hover:bg-white/[0.12] hover:text-white"
                      )
                    }
                  >
                    {category}
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels className="mt-2">
                {Object.values(categories).map((posts, idx) => (
                  <Tab.Panel
                    key={idx}
                    className={classNames(
                      "rounded-xl bg-white p-3",
                      "ring-white/60 ring-offset-2 ring-offset-yellow-400 focus:outline-none focus:ring-2"
                    )}
                  >
                    <ul>
                      {posts.map((post) => (
                        <li
                          key={post.id}
                          className="relative rounded-md p-3 hover:bg-gray-100"
                        >
                          <h3 className="text-sm font-medium leading-5 text-gray-700">
                            {post.title}
                          </h3>

                          <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                            <li>{post.types}</li>
                          </ul>
                          <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                            <li>{post.comments}</li>
                          </ul>

                          <a
                            href="#"
                            className={classNames(
                              "absolute inset-0 rounded-md",
                              "ring-yellow-400 focus:z-10 focus:outline-none focus:ring-2"
                            )}
                          />
                        </li>
                      ))}
                    </ul>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>
          </div>
        </body>
      </html>
    </>
  );
}
