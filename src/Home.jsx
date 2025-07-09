import React from 'react'
import { BiRocket } from "react-icons/bi";
import './home.css';
import mainImg from './assents/mainimg.png';
import animakid from "./assents/userImgAnimakid.png"

const Home = () => {
  return (
    <header>
      <div className="header-info">
        <h1>Discover <br /> Digital Art & <br /> Collect NFTs</h1>
        <p>NFT Marketplace UI Created With Anima For <br /> Figma. Collect, Buy And Sell Art From More <br /> Than 20k NFT Artists.</p>
        <button className='get-started'><BiRocket /> Get Started</button>
        <div className="header-info-users">
        <div className='header-sale'>
          <h1>240k+</h1>
          <h3>Total Sale</h3>
        </div>
        <div className='header-auctions'>
          <h1>100k+</h1>
          <h3>Auctions</h3>
        </div>
        <div className='header-artists'>
          <h1>240k+</h1>
          <h3>Artists</h3>
        </div>
        </div>
      </div>
      <div className="header-img">
        <img src={mainImg} alt="" />
        <div className="header-img-user">
          <h1>Space Walking</h1>
          <h3><img src={animakid} alt="" />
          Animakid</h3>
        </div>
      </div>
    </header>
  )
}

export default Home