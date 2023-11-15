"use client";

import styles from "./page.module.css";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import React, { useState } from "react";

export default function Contacts() {
  
  const [show, setShow] = useState(true);
  return (
    <>
      <html className={styles.html}>
        <div className={styles.body}>
          <a href="/" className={styles.homebutton}>
            Home
          </a>
        </div>

        {/* Here is the start of content */}
        <div className="overflow-hidden relative w-5/12 mt-5 pb-10 mr-auto ml-auto">
            <Image
              className={styles.stylebg}
              src="/assets/jpbg.jpg"
              alt=""
              width={550}
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
          <div className="py-5 px-5 flex mt-20">
            <Image
              className="relative rounded-3xl"
              src="/assets/newfacebook.png"
              alt="facebook"
              width={40}
              height={40}
            />
            <h1 className="mt-auto mb-auto ml-5 text-white">
              https://www.facebook.com/erwin.susanto.522
            </h1>
          </div>
          <div className="py-5 px-5 flex">
            <Image
              className="relative rounded-3xl"
              src="/assets/linkedin.png"
              alt="linkedin"
              width={40}
              height={40}
            />
            <h1 className="mt-auto mb-auto ml-5 text-white">
              https://www.linkedin.com/in/erwin-susanto-431670209/
            </h1>
          </div>
          <div className="py-5 px-5 flex">
            <Image
              className="relative rounded-3xl"
              src="/assets/github.png"
              alt="github"
              width={40}
              height={40}
            />
            <h1 className="mt-auto mb-auto ml-5 text-white">
              https://github.com/Erwin71297
            </h1>
          </div>
          <div className="py-5 px-5 flex">
            <Image
              className={styles.changeonhover}
              src="/assets/instagram.svg.png"
              alt="instagram"
              width={40}
              height={40}
            />
            <h1 className="mt-auto mb-auto ml-5 text-white">
              https://www.instagram.com/erwins7/
            </h1>
          </div>
          {/* Here's tesing appear on load */}
          <div>

          </div>
      </html>
    </>
  );
}
