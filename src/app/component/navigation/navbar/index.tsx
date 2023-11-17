import React from "react";
import Link from "next/link";
import styles from "./index.module.css"

const Navbar = ({
  toggle,
}:{
  toggle: () => void;
}) => {
  return (
    <>
      <div className="w-full h-20 bg-yellow-400 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <a href="/" className={styles.homebutton}>
              Home
            </a>
            <ul className="hidden md:flex gap-x-6 text-black mr-auto ml-auto">
              <li>
                <Link href="/directories/about">
                  <p className={styles.text}>About</p>
                </Link>
              </li>
              <li>
                <Link href="/directories/skillset">
                  <p className={styles.text}>Skillset</p>
                </Link>
              </li>
              <li>
                <Link href="/directories/contact">
                  <p className={styles.text}>Contacts</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;