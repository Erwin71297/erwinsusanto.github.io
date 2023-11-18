"use client";

import styles from "./page.module.css";
import React from "react";
import Image from "next/image";
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  Bar,
} from "recharts";
import { Check } from "react-feather";
import Navigation from "@/app/component/navigation";
import { motion } from "framer-motion"

export default function About() {
  const circleSize = 50;
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

  const eg = [
    {
      skill: "100",
      fill: "#d0ed57",
    },
  ];

  const id = [
    {
      skill: "100",
      fill: "#d0ed57",
    },
  ];

  const jp = [
    {
      skill: "65",
      fill: "#ffc658",
    },
  ];

  const skills = [
    {
      skill: "Go",
      fill: "#ffc658",
      proficiency: "70",
    },
    {
      skill: "Next",
      fill: "#ffc658",
      proficiency: "70",
    },
    {
      skill: "HTML",
      fill: "#ffc658",
      proficiency: "85",
    },
    {
      skill: "C#",
      fill: "#ffc658",
      proficiency: "50",
    },
  ];

  let education = {
    Education: [
      {
        id: 1,
        title: "Malacca International School (Elementary Grade)",
        date: "2003-2009",
      },
      {
        id: 2,
        title: "Darma Yudha Junior High School",
        date: "2009-2012",
      },
      {
        id: 3,
        title: "Darma Yudha Senior High School",
        date: "2012-2015",
      },
      {
        id: 3,
        title: "Bina Nusanatara University",
        date: "2015-2019",
        GPA: "3.4",
      },
    ],
  };

  let origanisation = {
    "Organisational Experience": [
      {
        id: 1,
        title: "BNEC",
        date: "2015-2017",
        position: "Branding Team",
        tasks: "",
      },
      {
        id: 2,
        title: "BSSC",
        date: "2015-2017",
        position: "Branding Team",
        tasks: "",
      },
    ],
  };

  let work = {
    "Working Experience": [
      {
        id: 1,
        title: "BPR Intidana",
        date: "2020-2021",
        position: "IT Specialist",
        comments: "",
      },
      {
        id: 2,
        title: "PT Erajaya Swasembada Tbk.",
        date: "2021-2023",
        position: "Software Engineer",
        comments: "",
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
          <Navigation/>
          <div className="grid lg:grid-cols-10">
            <motion.div
                variants={right}
                initial="hidden"
                animate="enter"
                exit="exit"
                transition={{
                  ease: "linear",
                  duration: 1,
                }}className="lg:col-span-3">
              {/* Start of left side */}
              <div
                className={classNames(
                  "bg-gray-900 py-5 px-5 mt-10 ml-10 mr-10",
                  "text-center "
                )}
              >
                <Image
                  className="relative rounded-xl ml-auto mr-auto"
                  src="/assets/erwin.jpeg"
                  alt="profile picture"
                  width={60}
                  height={60}
                />
                <h2 className="text-white py-2">Erwin Susanto</h2>
                <hr className="opacity-30 mt-1 mb-1"></hr>
                <p className="text-gray-400">NextJS Based Front-End Developer</p>
                <p className="text-gray-400"> Go Based Back-End Developer</p>
              </div>
              <div
                className={classNames(
                  "px-5 mt-10 ml-10 mr-10",
                  "text-center grid lg:grid-cols-2"
                )}
              >
                <div className="text-left text-white">
                  <p>Name :</p>
                  <p>Current City :</p>
                  <p>Age :</p>
                </div>
                <div className="text-right text-gray-400">
                  <p>Erwin Susanto</p>
                  <p>Jakarta</p>
                  <p>25</p>
                </div>
              </div>
              <div
                className={classNames("px-5 mt-10 ml-10 mr-10", "text-center")}
              >
                <hr className="mt-10 mb-5"></hr>
                <p className="text-yellow-500 font-semibold mb-5">Languages</p>
                <div className="grid lg:grid-cols-3 text-white">
                  <div>
                    <div className={styles.graph}>
                      <RadialBarChart
                        width={circleSize}
                        height={circleSize}
                        cx={circleSize / 2}
                        cy={circleSize / 2}
                        innerRadius={24}
                        outerRadius={28}
                        barSize={2}
                        data={eg}
                        startAngle={90}
                        endAngle={-270}
                      >
                        <PolarAngleAxis
                          type="number"
                          domain={[0, 100]}
                          angleAxisId={0}
                          tick={false}
                        />
                        <RadialBar
                          background
                          className="clockWise"
                          dataKey="skill"
                          cornerRadius={circleSize / 2}
                          fill="#82ca9d"
                        />
                        <text
                          x={circleSize / 2}
                          y={circleSize / 2}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          className="progress-label"
                          fill="#FFD700"
                        >
                          100
                        </text>
                      </RadialBarChart>
                    </div>
                    English
                  </div>
                  <div>
                    <div className={styles.graph}>
                      <RadialBarChart
                        width={circleSize}
                        height={circleSize}
                        cx={circleSize / 2}
                        cy={circleSize / 2}
                        innerRadius={24}
                        outerRadius={28}
                        barSize={2}
                        data={id}
                        startAngle={90}
                        endAngle={-270}
                      >
                        <PolarAngleAxis
                          type="number"
                          domain={[0, 100]}
                          angleAxisId={0}
                          tick={false}
                        />
                        <RadialBar
                          background
                          className="clockWise"
                          dataKey="skill"
                          cornerRadius={circleSize / 2}
                          fill="#82ca9d"
                        />
                        <text
                          x={circleSize / 2}
                          y={circleSize / 2}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          className="progress-label"
                          fill="#FFD700"
                        >
                          100
                        </text>
                      </RadialBarChart>
                    </div>
                    Indonesian
                  </div>
                  <div>
                    <div className={styles.graph}>
                      <RadialBarChart
                        width={circleSize}
                        height={circleSize}
                        cx={circleSize / 2}
                        cy={circleSize / 2}
                        innerRadius={24}
                        outerRadius={28}
                        barSize={2}
                        data={jp}
                        startAngle={90}
                        endAngle={-270}
                      >
                        <PolarAngleAxis
                          type="number"
                          domain={[0, 100]}
                          angleAxisId={0}
                          tick={false}
                        />
                        <RadialBar
                          background
                          className="clockWise"
                          dataKey="skill"
                          cornerRadius={circleSize / 2}
                          fill="#82ca9d"
                        />
                        <text
                          x={circleSize / 2}
                          y={circleSize / 2}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          className="progress-label"
                          fill="#FFD700"
                        >
                          65
                        </text>
                      </RadialBarChart>
                    </div>
                    Japanese
                  </div>
                </div>
                <hr className="mt-10"></hr>
                <div className="mt-5">
                  <p className="text-yellow-500 font-semibold mb-5">Skills</p>
                  <BarChart
                    width={250}
                    height={200}
                    data={skills}
                    margin={{
                      top: 5,
                      right: 0,
                      left: -10,
                      bottom: 5,
                    }}
                  >
                    <XAxis dataKey="skill" />
                    <YAxis />
                    <Legend />
                    <Bar dataKey="proficiency" barSize={25} fill="#ffc658" />
                  </BarChart>
                </div>
                <hr className="mt-10 mb-5"></hr>
                <div className="text-yellow-400 text-left">
                  <div className="flex">
                    <Check></Check>
                    <p className="ml-3">Responsible</p>
                  </div>
                  <div className="flex">
                    <Check></Check>
                    <p className="ml-3">Detail Oriented</p>
                  </div>
                  <div className="flex">
                    <Check></Check>
                    <p className="ml-3">Adaptable</p>
                  </div>
                  <div className="flex">
                    <Check></Check>
                    <p className="ml-3">Team Player</p>
                  </div>
                  <div className="flex">
                    <Check></Check>
                    <p className="ml-3">Result Oriented</p>
                  </div>
                  <div className="flex">
                    <Check></Check>
                    <p className="ml-3">Willing to Speak</p>
                  </div>
                </div>
                <hr className="mt-10 mb-5"></hr>
                <div className="flex">
                  <a href="https://www.facebook.com/erwin.susanto.522">
                    <Image
                      className="relative rounded-3xl"
                      src="/assets/facebook.png"
                      alt="facebook"
                      width={40}
                      height={40}
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/erwin-susanto-431670209/"
                    className="ml-3"
                  >
                    <Image
                      className="relative rounded-3xl"
                      src="/assets/linkedin.png"
                      alt="linkedin"
                      width={40}
                      height={40}
                    />
                  </a>
                  <a href="https://github.com/Erwin71297" className="ml-3">
                    <Image
                      className="relative rounded-3xl"
                      src="/assets/github.png"
                      alt="github"
                      width={40}
                      height={40}
                    />
                  </a>
                  <a href="https://www.instagram.com/erwins7/" className="ml-3">
                    <Image
                      className="relative rounded-3xl"
                      src="/assets/instagram.svg.png"
                      alt="instagram"
                      width={40}
                      height={40}
                    />
                  </a>
                </div>
              </div>
            </motion.div>
            {/* End of left side */}
            {/* Start of right side */}
            <motion.div
                variants={left}
                initial="hidden"
                animate="enter"
                exit="exit"
                transition={{
                  ease: "linear",
                  duration: 1,
                  delay: 1,
                }} className="lg:col-span-7 overflow-hidden relative ml-5 mr-10 mt-5 py-5">
              <Image
                className={styles.stylebg}
                src="/assets/jpbg.jpg"
                alt=""
                width={850}
                height={270}
              />
              <div className="relative">
                <h2 className="text-yellow-400 font-semibold py-5 px-5 mt-10 text-2xl text-center">
                  Here is my Self-Introduction!
                </h2>
                <div className="grid grid-cols-4 px-5 w-9/12 ml-auto mr-auto pb-12">
                  <div className="lg:col-span-1">
                    <Image
                      className="relative rounded-xl ml-auto mr-auto"
                      src="/assets/image_erwin.jpeg"
                      alt="person icon"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="text-white mt-auto mb-auto px-10 text-justify lg:col-span-3">
                    <p>Hello!</p>
                    <p className="mt-1">
                      My name is Erwin Susanto. I hail from Indonesia. I am a
                      detail-oriented person who is passionate about improving
                      myself to be the best I can be.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-white py-5 px-5 mt-10">Education</h2>
              {Object.values(education).map((posts, idx) => (
                <div
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
                          <li>{post.date}</li>
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <h2 className="text-white py-5 px-5 mt-10">
                Organisational Experiences
              </h2>
              {Object.values(origanisation).map((posts, idx) => (
                <div
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
                          <li>{post.date}</li>
                        </ul>
                        <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-400">
                          <li>{post.position}</li>
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <h2 className="text-white py-5 px-5 mt-10">Work Experiences</h2>
              {Object.values(work).map((posts, idx) => (
                <div
                  key={idx}
                  className={"bg-white p-3 text-yellow-500 ml-5 mr-10 mb-20"}
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
                          <li>{post.date}</li>
                        </ul>
                        <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-400">
                          <li>{post.position}</li>
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </div>
        </body>
      </html>
    </>
  );
}
