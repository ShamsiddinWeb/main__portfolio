"use client"
import React, {useState} from 'react'
import "./Mainheader.css"
import Link from 'next/link'

const MainHeader = () => {
  const [shrink, setShrink] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 150) {
      setShrink(true);
    } else {
      setShrink(false);
    }
  });
  return (
    <header  className={`header ${shrink ? "shrink" : ""}`}>
      <Link href="/" className="brand">N.SH.K</Link>
      <div className="menu-btn"><i className="fas fa-times menu-icon"></i></div>
      <div className="navigation">
        <Link href="#main">home</Link>
        <Link href="#about">about</Link>
        <Link href="#skills">skills</Link>
        <Link href="#services">services</Link>
        <Link href="#work">work</Link>
        <Link href="#contact">contact</Link>
      </div>
    </header>
  )
}

export default MainHeader