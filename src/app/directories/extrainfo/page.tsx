"use client";

import Navigation from "@/app/component/navigation";
import styles from "./page.module.css";

export default function ExtraInfo() {
  return (
    <>
      <html className={styles.html}>
        <body>
          <Navigation />
          <a>This site was made with static data as you can probably tell.</a>
        </body>
      </html>
    </>
  );
}
