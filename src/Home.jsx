import React from 'react'
import { BiRocket } from "react-icons/bi";
import './home.css';
import mainImg from './assents/mainimg.png';
import animakid from "./assents/userImgAnimakid.png"
import dog from "./assents/dog.png";
import cat from "./assents/cat.png";
import bear from "./assents/bear.png";
import mrFox from "./assents/mrFox.png";
import mashroom1 from "./assents/mashroom1.png";
import mashroom2 from "./assents/mashroom2.png";
import mashroom3 from "./assents/mashroom3.png";
import sroomie from "./assents/shroomie.png";
import robot3 from './assents/robot1.png';
import robot2 from './assents/robot2.png';
import robot1 from './assents/robot3.png';
import bekind2robots from './assents/bekind2robots.png';

const Home = () => {
  return (
    <div>
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
    <main>
      <h1 style={{ fontSize: "25px"}}>Trending Collection</h1>
      <p style={{ fontSize: "25px"}}>Checkout Our Weekly Updated Trending Collection.</p>
      <div className="main-container">
        <div className="card">
          <img src={dog} alt="" />
          <div className='box'>
          <img src={cat} alt="" />
          <img src={bear} alt="" />
          <div>1025+</div>
          </div>
          <h3>DSGN Animals</h3>
          <p><img src={mrFox} alt="" /> Mr Fox</p>
        </div>
        <div className="card">
          <img src={mashroom1} alt="" />
          <div className='box'>
          <img src={mashroom2} alt="" />
          <img src={mashroom3} alt="" />
          <div>1025+</div>
          </div>
          <h3>Magin Mushrooms</h3>
          <p><img src={sroomie} alt="" /> Shroomie</p>
        </div>
        <div className="card">
          <img src={robot1} alt="" />
          <div className='box'>
          <img src={robot2} alt="" />
          <img src={robot3} alt="" />
          <div>1025+</div>
          </div>
          <h3>Disco Machines</h3>
          <p><img src={bekind2robots} alt="" /> Be Kind 2 Robots</p>
        </div>
      </div>
    </main>
    </div>
  )
}

export default Home