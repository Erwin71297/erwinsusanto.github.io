"use client"

import styles from './page.module.css'
import React, {useState} from "react"

export default function ExtraInfo() {

    return <>
        <html className={styles.html}>
            <div className={styles.body}>
                <h1 className={styles.header}>Here's some extra info!</h1>
            </div>
            
      </html>
    </>;
}