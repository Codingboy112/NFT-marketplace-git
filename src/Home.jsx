import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BiRocket,BiPaint } from "react-icons/bi";
import { IoEyeOutline,IoMail } from "react-icons/io5";
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
import robotica from "./assents/robotica.png"
import rustyrobot from "./assents/rustyrobot.png"
import moondancer from "./assents/moondacer.png"
import spaceship from "./assents/spaceship.png"
import nebulakid from "./assents/nebulakid.png"
import edena from "./assents/edena.png"
import spaceone from "./assents/spaceone.png"
import astro from "./assents/astro.png"
import wallet from "./assents/wallet.png"
import collection from "./assents/collection.png"
import earn from "./assents/earn.png"
import astrocos from "./assents/astrocos.png"
import img from "./assents/image.png"

const Home = () => {
  const [swiperN, setswiperN] = useState(3)
  const [swiperN1, setswiperN1] = useState(4)
  const [hour, sethour] = useState([])
  
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
  useEffect(() => {
    setInterval(() => {
    let data = new Date()
    let hours = data.getHours()
    let min = data.getMinutes()
    let sec = data.getSeconds()
    sethour([...hour,hours,min,sec])
  }, 1000);
  }, [])
  
  
  
  
  
    
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
          <img src={nebulakid} alt="" />
          <h1>NebulaKid</h1>
          <h3><b>Total Sales:</b> 34.53 ETH</h3>
        </SwiperSlide>
        <SwiperSlide className="card">
          <div className="level">5</div>
          <img src={moondancer} alt="" />
          <h1>MoonDancer</h1>
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
          <img src={spaceone} alt="" />
          <h1>SpaceOne</h1>
          <h3><b>Total Sales:</b> 34.53 ETH</h3>
        </SwiperSlide>
      </Swiper>
      </div>
    </section>
    <section className="categories">
      <h1>Browse Categories</h1>
    </section>
    <section className="discover">
      <div className="discover-header">
        <div className="discover-info">
          <h1>Discover More NFTs</h1><br />
          <h3>Explore New trending NFTs</h3>
        </div>
        <button><IoEyeOutline /> See All</button>
      </div>
      <div className="discover-container">
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
        className="discover-container"
      >
        <SwiperSlide className="card">
          <img src={spaceship} alt="" />
          <div className="inner-card">
          <h1>Distant Galaxy</h1>
          <h3><img src={moondancer} alt="" /> MoonDancer</h3>
          <div className="card-info">
            <div className="price">
              <h3>Price</h3>
              <h1>1.63 ETH</h1>
            </div>
            <div className="bid">
              <h3>Highest Bid</h3>
              <h1>0.33 wETH</h1>
            </div>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="card">
          <img src={edena} alt="" />
          <div className="inner-card">
          <h1>Life On Edena</h1>
          <h3><img src={nebulakid} alt="" /> NebulaKid</h3>
          <div className="card-info">
            <div className="price">
              <h3>Price</h3>
              <h1>1.63 ETH</h1>
            </div>
            <div className="bid">
              <h3>Highest Bid</h3>
              <h1>0.33 wETH</h1>
            </div>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="card">
          <img src={astro} alt="" />
          <div className="inner-card">
          <h1>Life On Edena</h1>
          <h3><img src={spaceone} alt="" /> SpaceOne</h3>
          <div className="card-info">
            <div className="price">
              <h3>Price</h3>
              <h1>1.63 ETH</h1>
            </div>
            <div className="bid">
              <h3>Highest Bid</h3>
              <h1>0.33 wETH</h1>
            </div>
          </div>
          </div>
        </SwiperSlide>
        </Swiper>
      </div>
    </section><br /><br /><br />
    <section className="timer">
        <div className="purple">
          <div className="left">
            <div className="user-nick">
              <img src={sroomie} alt="" />
              <h3>Shroomie</h3>
            </div>
            <h1>Magic Mashrooms</h1>
            <button><IoEyeOutline /> See All</button>
          </div>
          <div className="right">
            <h3>Auction ends in:</h3>
            <div className="hour">
              <h1 className="h">{hour[0] < 10 ? "0" + hour[0] : hour[0]}</h1>
              <h1>:</h1>
              <h1>{hour[1] < 10 ? "0" + hour[1] : hour[1]}</h1>
              <h1>:</h1>
              <h1>{hour[2] < 10 ? "0" + hour[2] : hour[2]}</h1>
            </div>
            <div className="hour-info">
              <h5>Hours</h5>            
              <h5>Minutes</h5>
              <h5>Seconds</h5>
            </div>
          </div>
        </div>
    </section>
    <section className="working">
      <h1>How It Works</h1>
      <h3>Find Out How To  Get Started</h3>
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
        className="working-container"
      >
        <SwiperSlide className="card">
          <img src={wallet} alt="" />
          <h1>Setup Your Wallet</h1>
          <h3>Set up your wallet of choice. 
          <br /> Connect it to the Animarket by 
          <br /> clicking the wallet icon in the top 
          <br /> right corner.</h3>
        </SwiperSlide>
        <SwiperSlide className="card">
          <img src={collection} alt="" />
          <h1>Create Collection</h1>
          <h3>Upload your work and setup your <br /> collection. Add a description, <br /> social links and floor price.</h3>
        </SwiperSlide>
        <SwiperSlide className="card">
          <img src={earn} alt="" />
          <h1>Start Earning</h1>
          <h3>Choose between auctions and <br /> fixed-price listings. Start earning <br /> by selling your NFTs or trading <br /> others.</h3>
        </SwiperSlide>
        </Swiper>
    </section>
    <section className="join">
      <div className="join-container">
      <div className="img">
      <img src={astrocos} alt="" />
      </div>
      <div className="join-info">
        <h1>Join Our weekly <br /> Digest</h1>
        <h3>Get Exclusive Promotions & Updates <br /> Straight To Your Inbox.</h3>
        <div className="mess">
        <input type="email" placeholder="Enter your enail here" />
        <button><IoMail /> Subscribe</button>
        </div>
      </div>
      </div>
    </section>
    </>
  )
}

export default Home