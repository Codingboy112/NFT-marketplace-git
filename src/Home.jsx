import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BiRocket,BiPaint } from "react-icons/bi";
import { IoEyeOutline } from "react-icons/io5";
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
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import keepitreal from './assents/keepitreal.png';
import digilap from "./assents/digilab.png"
import gravityone from "./assents/gravityone.png"
import juanie from "./assents/juanie.png"
import bluewhale from "./assents/bluewhale.png"
import robotica from "./assents/robotica.png"
import rustyrobot from "./assents/rustyrobot.png"
import ghiblier from "./assents/ghiblier.png"

const Home = () => {
  const [swiperN, setswiperN] = useState(3)
  const [swiperN1, setswiperN1] = useState(4)
  function mobileView() {
      if (window.innerWidth < 791) {
        setswiperN(1)
        setswiperN1(1)
      } else if (window.innerWidth < 1300) {
        setswiperN(2)
        setswiperN1(2)
      }
      else {
        setswiperN(3)
        setswiperN1(4)
      }
  }
    
  return (
    <>
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
      <Swiper
        slidesPerView={swiperN}
        onResize={() => {
          mobileView();
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="main-container-swiper"
      >
        <SwiperSlide className="card">
            <img src={dog} alt="" />
            <div className='box'>
            <img src={cat} alt="" />
            <img src={bear} alt="" />
            <div>1025+</div>
            </div>
            <h3>DSGN Animals</h3>
            <p><img src={mrFox} alt="" /> Mr Fox</p>
        </SwiperSlide>
        <SwiperSlide className="card">
          <img src={mashroom1} alt="" />
          <div className='box'>
          <img src={mashroom2} alt="" />
          <img src={mashroom3} alt="" />
          <div>1025+</div>
          </div>
          <h3>Magin Mushrooms</h3>
          <p><img src={sroomie} alt="" /> Shroomie</p>
        </SwiperSlide>
        <SwiperSlide className="card">
          <img src={robot1} alt="" />
          <div className='box'>
          <img src={robot2} alt="" />
          <img src={robot3} alt="" />
          <div>1025+</div>
          </div>
          <h3>Disco Machines</h3>
          <p><img src={bekind2robots} alt="" /> Be Kind 2 Robots</p>
        </SwiperSlide>
      </Swiper>
      </div>
    </main>
    <section id="creators">
      <div className="creators-header">
        <div className="creators-info">
          <h1>Top Creators</h1>
          <h3>Checkout Top Rated Creators On The NFT Marketplace</h3>
        </div>
        <button><BiRocket /> View Rankings</button>
      </div>
      <div className="creators-container">
        <Swiper
        slidesPerView={swiperN1}
        onResize={() => {
          mobileView();
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="creators-container"
      >
        <SwiperSlide className="card">
          <div className="level">1</div>
          <img src={keepitreal} alt="" />
          <h1>Keepitreal</h1>
          <h3><b>Total Sales:</b> 34.53 ETH</h3>
        </SwiperSlide>
        <SwiperSlide className="card">
          <div className="level">2</div>
          <img src={digilap} alt="" />
          <h1>DigiLab</h1>
          <h3><b>Total Sales:</b> 34.53 ETH</h3>
        </SwiperSlide>
        <SwiperSlide className="card">
          <div className="level">3</div>
          <img src={gravityone} alt="" />
          <h1>GravityOne</h1>
          <h3><b>Total Sales:</b> 34.53 ETH</h3>
        </SwiperSlide>
        <SwiperSlide className="card">
          <div className="level">4</div>
          <img src={juanie} alt="" />
          <h1>Juanie</h1>
          <h3><b>Total Sales:</b> 34.53 ETH</h3>
        </SwiperSlide>
        <SwiperSlide className="card">
          <div className="level">5</div>
          <img src={bluewhale} alt="" />
          <h1>BlueWhale</h1>
          <h3><b>Total Sales:</b> 34.53 ETH</h3>
        </SwiperSlide>
        <SwiperSlide className="card">
          <div className="level">6</div>
          <img src={mrFox} alt="" />
          <h1>Mr Fox</h1>
          <h3><b>Total Sales:</b> 34.53 ETH</h3>
        </SwiperSlide>
        <SwiperSlide className="card">
          <div className="level">7</div>
          <img src={sroomie} alt="" />
          <h1>Shroomie</h1>
          <h3><b>Total Sales:</b> 34.53 ETH</h3>
        </SwiperSlide>
        <SwiperSlide className="card">
          <div className="level">8</div>
          <img src={robotica} alt="" />
          <h1>Robotica</h1>
          <h3><b>Total Sales:</b> 34.53 ETH</h3>
        </SwiperSlide>
        <SwiperSlide className="card">
          <div className="level">9</div>
          <img src={rustyrobot} alt="" />
          <h1>RustyRobot</h1>
          <h3><b>Total Sales:</b> 34.53 ETH</h3>
        </SwiperSlide>
        <SwiperSlide className="card">
          <div className="level">10</div>
          <img src={animakid} alt="" />
          <h1>Animakid</h1>
          <h3><b>Total Sales:</b> 34.53 ETH</h3>
        </SwiperSlide>
        <SwiperSlide className="card">
          <div className="level">11</div>
          <img src={bekind2robots} alt="" />
          <h1>BeKind2Robot</h1>
          <h3><b>Total Sales:</b> 34.53 ETH</h3>
        </SwiperSlide>
        <SwiperSlide className="card">
          <div className="level">12</div>
          <img src={ghiblier} alt="" />
          <h1>Ghiblier</h1>
          <h3><b>Total Sales:</b> 34.53 ETH</h3>
        </SwiperSlide>
      </Swiper>
      </div>
    </section>
    <section className="categories">
      <h1>Browse Categories</h1>
      <div className="categories-container">
        <Swiper
        slidesPerView={swiperN1}
        onResize={() => {
          mobileView();
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="categories-container"
      >
        <SwiperSlide className="card">
          <img src="" alt="" />
          <div><BiPaint /></div>
          <h1>Art</h1>
        </SwiperSlide>
        </Swiper>
      </div>
    </section>
    <section className="discover">
      <div className="discover-header">
        <div className="discover-info">
          <h1>Discover MOre NFTs</h1>
          <h3>Explore New trending NFTs</h3>
        </div>
        <button><IoEyeOutline /> See All</button>
      </div>
    </section>
    </>
  )
}

export default Home