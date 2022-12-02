import React from "react"
import { homeData } from "../../dummyData"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='box'>
            <ul className='flex'>
              <li>Qayipsizdik</li>
              <li>Blog</li>
              <li>FAQ</li>
              <li>Film tizimderi</li>
            </ul>
            <p>© 2022 QAZAQSHA FILM ONLINE -BY USSEN KARLYGASH</p>
          </div>
          <div className='box'>
            <h3>QAZAQSHA FILM App </h3>
            <div className='img flexSB'>
              <img src='https://img.icons8.com/color/48/000000/apple-app-store--v3.png' />
              <span>App Store</span>
              <img src='https://img.icons8.com/fluency/48/000000/google-play.png' />
              <span>Google Play Store</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
