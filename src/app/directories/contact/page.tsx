"use client";

import styles from "./page.module.css";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, {useEffect} from "react";

export default function Contacts() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1000,
      easing: "ease",
      anchorPlacement: "top-bottom",
      offset: 120,
    });
  })
  return (
    <>
      <html className={styles.html}>
        <div className={styles.body}>
          <a href="/" className={styles.homebutton}>
            Home
          </a>
        </div>

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
              <textarea className={styles.textarea} placeholder="Enter your name" maxLength={20}/>
              <textarea className={styles.textarea} placeholder="Enter your email" maxLength={30}/>
            </div>
            <div>
              <textarea className={styles.textareasubject} placeholder="Enter subject" maxLength={20}/>
            </div>
            <div>
              <textarea className={styles.textareamessage} placeholder="Please Enter Message"/>
            </div>
            <div>
              <button className={styles.send}>Send</button>
            </div>
			  </div>

          {/* Start of contacts */}
          <div data-aos="fade-left-up" data-aos-delay="50" className="py-5 px-5 flex mt-20 ml-20">
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
          <div data-aos="fade-left-up" data-aos-delay="50" className="py-5 px-5 flex ml-20">
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
          <div data-aos="fade-left-up" data-aos-delay="50" className="py-5 px-5 flex ml-20">
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
          <div data-aos="fade-left-up" data-aos-delay="50" className="py-5 px-5 flex ml-20 mb-20">
            <Image
              className="relative rounded-3xl"
              src="/assets/instagram.svg.png"
              alt="instagram"
              width={40}
              height={40}
            />
            <h1 className="mt-auto mb-auto ml-5 text-white">
              https://www.instagram.com/erwins7/
            </h1>
          </div>
      </html>
    </>
  );
}
