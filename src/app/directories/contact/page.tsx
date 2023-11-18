"use client";

import { AOSInit } from "@/app/aos";
import styles from "./page.module.css";
import Image from "next/image";
import React from "react";
import Navigation from "@/app/component/navigation";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Contacts() {
  return (
    <>
      <html className={styles.html}>
        <body>
          <Navigation />
          {/* Here is the start of links */}
          <div className="overflow-hidden relative w-6/12 mt-5 pb-10 mr-auto ml-auto">
            <Image
              className={styles.stylebg}
              src="/assets/jpbg.jpg"
              alt=""
              width={750}
              height={270}
            />
            <div className="relative">
              <h2 className="text-yellow-400 font-semibold py-5 px-5 mt-10 text-2xl text-center">
                CONTACT ME!
              </h2>
              <div className="text-white mt-auto mb-auto px-10 text-center ">
                <p></p>
                <p className="mt-1">For more Information and Inquiries </p>
              </div>
            </div>
          </div>

          {/* Here's the start of form */}
          <div>
            <h2 className="font-semibold text-center text-white mt-20">
              Please Enter The Form Below to Contact Me
            </h2>
          </div>
          <div className={styles.container}>
            <div className="grid lg:grid-cols-2">
              <textarea
                className={styles.textarea}
                placeholder="Enter your name"
                maxLength={20}
              />
              <textarea
                className={styles.textarea}
                placeholder="Enter your email"
                maxLength={30}
              />
            </div>
            <div>
              <textarea
                className={styles.textareasubject}
                placeholder="Enter subject"
                maxLength={20}
              />
            </div>
            <div>
              <textarea
                className={styles.textareamessage}
                placeholder="Please Enter Message"
              />
            </div>
            <div>
              <button className={styles.send}>Send</button>
            </div>
          </div>

          {/* Start of contacts */}
          <div className="grid lg:grid-cols-2">
            <div>
              <AOSInit />
              <Link href="https://www.facebook.com/erwin.susanto.522">
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="100"
                  className={classNames(
                    "py-5 px-5 flex ml-20 mb-20 border-2 border-yellow-400 mr-20 rounded-3xl mt-10",
                    "hover:bg-gray-800"
                  )}
                >
                  <Image
                    className="relative rounded-3xl"
                    src="/assets/facebook.png"
                    alt="facebook"
                    width={40}
                    height={40}
                  />
                  <h1 className="mt-auto mb-auto ml-5 text-white">Facebook</h1>
                </div>
              </Link>
              <AOSInit />
              <Link href="https://www.linkedin.com/in/erwin-susanto-431670209/">
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                  className={classNames(
                    "py-5 px-5 flex ml-20 mb-20 border-2 border-yellow-400 mr-20 rounded-3xl mt-10",
                    "hover:bg-gray-800"
                  )}
                >
                  <Image
                    className="relative rounded-3xl"
                    src="/assets/linkedin.png"
                    alt="linkedin"
                    width={40}
                    height={40}
                  />
                  <h1 className="mt-auto mb-auto ml-5 text-white">LinkedIn</h1>
                </div>
              </Link>
            </div>
            <div>
              <AOSInit />
              <Link href="https://github.com/Erwin71297">
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                  className={classNames(
                    "py-5 px-5 flex mb-20 border-2 border-yellow-400 mr-20 rounded-3xl mt-10",
                    "hover:bg-gray-800"
                  )}
                >
                  <Image
                    className="relative rounded-3xl"
                    src="/assets/github.png"
                    alt="github"
                    width={40}
                    height={40}
                  />
                  <h1 className="mt-auto mb-auto ml-5 text-white">Github</h1>
                </div>
              </Link>
              <AOSInit />
              <Link href="https://www.instagram.com/erwins7/">
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                  className={classNames(
                    "py-5 px-5 flex mb-20 border-2 border-yellow-400 mr-20 rounded-3xl mt-10",
                    "hover:bg-gray-800"
                  )}
                >
                  <Image
                    className="relative rounded-3xl"
                    src="/assets/instagram.svg.png"
                    alt="instagram"
                    width={40}
                    height={40}
                  />
                  <h1 className="mt-auto mb-auto ml-5 text-white">Instagram</h1>
                </div>
              </Link>
            </div>
          </div>
        </body>
      </html>
    </>
  );
}
