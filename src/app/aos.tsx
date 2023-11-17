"use client"

import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

export const AOSInit = () => {
  useEffect(() => {
    AOS.init({
        once: false,
        duration: 1000,
        easing: "ease",
        anchorPlacement: "top-bottom",
        offset: 120,
    });
  }, [])

  return null
}