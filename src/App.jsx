import { useState } from 'react'
import logoImg from './assets/logo.png'
import ImagePle from './assets/Image PlaceHolder (1).png'
import ImgPro from  './assets/Avatar Placeholder.png'
import ImgAss from  './assets/Asset 12 2.png'
import ImagePLE1 from './assets/Image PlaceHolder (2).png'
import ImagePLE2 from './assets/Image PlaceHolder (3).png'
import ImagePLE3 from './assets/Image PlaceHolder (4).png'
import ImagePLE4 from './assets/Image PlaceHolder (5).png'
import ImagePLE5 from './assets/Image PlaceHolder (6).png'
import ImagePLE6 from './assets/Image PlaceHolder (7).png'
import ImagePLE7 from './assets/Image PlaceHolder (8).png'
import ImagePLE8 from './assets/Image PlaceHolder (9).png'
import ImagePLE9 from './assets/Image (16).png'
import { BsPerson } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { PiDiscordLogoBold } from "react-icons/pi";
import { LuYoutube } from "react-icons/lu";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram,FaPlus } from "react-icons/fa";
import { BiCopy } from "react-icons/bi";
import './App.scss'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='Mehribon'>
     <nav>
      <img src={logoImg} alt="" />
      <ul>
        <li>Marketplace</li>
        <li>Rankings</li>
        <li>Connect a wallet</li>
        <button > <BsPerson  className='icon'/>Sign up</button>
      </ul>
     </nav>
     <main>
      <img src={ImagePle} alt="" />
      <div className='IMG'>  <img src={ImgPro} alt="" className='Img2' /></div>
      <div className="Artis">
        <div className="Info">
          <div className="left">
            <h1>Animakid</h1>
            <div className="TEXT">
              <div className="tx">
                <h2>250k+</h2>
                <p>Volume</p>
              </div>
              <div className="tx">
                <h2>50+</h2>
                <p>NFTs Sold</p>
              </div>
              <div className="tx">
                <h2>3000+</h2>
                <p>Followers</p>
              </div>
            </div>
            <div className="TX">
              <h4>Bio</h4>
              <p>The Internet's Friendliest Designer Kid.</p>
            </div>
            <div className="TEX">
              <h5>Links</h5>
              <div className="ico">
              < AiOutlineGlobal className='ic'  />
              <PiDiscordLogoBold className='ic' />
              <LuYoutube  className='ic'/>
              <CiTwitter  className='ic'/>
              <FaInstagram  className='ic'/>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="BTN">
              <button className='bt1'><BiCopy  className='i' /> 0xc0E3...B79C</button>
              <button className='bt2'> <FaPlus className='i2' />Follow</button>
            </div>
          </div>
        </div>
      </div>
      <div className="Frame">
        <div className="Fram">
          <div className="tab1">
            <h1>Created</h1>
            <div className="bo">302</div>
          </div>
          <div className="tab">
          <h1>Owend</h1>
          <div className="ba">67</div>
          </div>
          <div className="tab">
          <h1>Collection</h1>
          <div className="ba">4</div>
          </div>
        </div>
      </div>
      <div className="CARDSSection">
        <div className="Cards">
          <div className="card">
            <img src={ImagePLE1} alt="" />
            <div className="TO">
            <div className="to1">
              <h1>Distant Galaxy</h1>
             <div className="it">
              <img src={ImgAss} alt="" />
              <p>Animkid</p>
             </div>
              </div>
            <div className="to2">
              <div className="t1">
                <p>Price</p>
                <h1>1.63 ETH</h1>
              </div>
              <div className="t2">
              <p>Highest Bid </p>
              <h1>0.33 wETH</h1>
              </div>
            </div>
            </div>
  
          </div>
          <div className="card">
          <img src={ImagePLE2} alt="" />
            <div className="TO">
            <div className="to1">
              <h1>Life On Edena</h1>
             <div className="it">
              <img src={ImgAss} alt="" />
              <p>Animkid</p>
             </div>
              </div>
            <div className="to2">
              <div className="t1">
                <p>Price</p>
                <h1>1.63 ETH</h1>
              </div>
              <div className="t2">
              <p>Highest Bid </p>
              <h1>0.33 wETH</h1>
              </div>
            </div>
            </div>
          </div>
          <div className="card">
          <img src={ImagePLE3} alt="" />
            <div className="TO">
            <div className="to1">
              <h1>AstroFiction</h1>
             <div className="it">
              <img src={ImgAss} alt="" />
              <p>Animkid</p>
             </div>
              </div>
            <div className="to2">
              <div className="t1">
                <p>Price</p>
                <h1>1.63 ETH</h1>
              </div>
              <div className="t2">
              <p>Highest Bid </p>
              <h1>0.33 wETH</h1>
              </div>
            </div>
            </div>
          </div>
        </div>
        <div className="Cards">
        <div className="card">
        <img src={ImagePLE4} alt="" />
            <div className="TO">
            <div className="to1">
              <h1>CryptoCity</h1>
             <div className="it">
              <img src={ImgAss} alt="" />
              <p>Animkid</p>
             </div>
              </div>
            <div className="to2">
              <div className="t1">
                <p>Price</p>
                <h1>1.63 ETH</h1>
              </div>
              <div className="t2">
              <p>Highest Bid </p>
              <h1>0.33 wETH</h1>
              </div>
            </div>
            </div>
        </div>
          <div className="card">
          <img src={ImagePLE5} alt="" />
            <div className="TO">
            <div className="to1">
              <h1>ColorfulDog 0524</h1>
             <div className="it">
              <img src={ImgAss} alt="" />
              <p>Animkid</p>
             </div>
              </div>
            <div className="to2">
              <div className="t1">
                <p>Price</p>
                <h1>1.63 ETH</h1>
              </div>
              <div className="t2">
              <p>Highest Bid </p>
              <h1>0.33 wETH</h1>
              </div>
            </div>
            </div>
          </div>
          <div className="card">
          <img src={ImagePLE6} alt="" />
            <div className="TO">
            <div className="to1">
              <h1>Space Tales</h1>
             <div className="it">
              <img src={ImgAss} alt="" />
              <p>Animkid</p>
             </div>
              </div>
            <div className="to2">
              <div className="t1">
                <p>Price</p>
                <h1>1.63 ETH</h1>
              </div>
              <div className="t2">
              <p>Highest Bid </p>
              <h1>0.33 wETH</h1>
              </div>
            </div>
            </div>
          </div>
        </div>
        <div className="Cards">
        <div className="card">
        <img src={ImagePLE7} alt="" />
            <div className="TO">
            <div className="to1">
              <h1>Cherry Blossom Girl 037</h1>
             <div className="it">
              <img src={ImgAss} alt="" />
              <p>Animkid</p>
             </div>
              </div>
            <div className="to2">
              <div className="t1">
                <p>Price</p>
                <h1>1.63 ETH</h1>
              </div>
              <div className="t2">
              <p>Highest Bid </p>
              <h1>0.33 wETH</h1>
              </div>
            </div>
            </div>
        </div>
          <div className="card">
          <img src={ImagePLE8} alt="" />
            <div className="TO">
            <div className="to1">
              <h1>Dancing Robots 0987</h1>
             <div className="it">
              <img src={ImgAss} alt="" />
              <p>Animkid</p>
             </div>
              </div>
            <div className="to2">
              <div className="t1">
                <p>Price</p>
                <h1>1.63 ETH</h1>
              </div>
              <div className="t2">
              <p>Highest Bid </p>
              <h1>0.33 wETH</h1>
              </div>
            </div>
            </div>
          </div>
          <div className="card">
          <img src={ImagePLE9} alt="" />
            <div className="TO">
            <div className="to1">
              <h1>IceCream Ape</h1>
             <div className="it">
              <img src={ImgAss} alt="" />
              <p>Animkid</p>
             </div>
              </div>
            <div className="to2">
              <div className="t1">
                <p>Price</p>
                <h1>1.63 ETH</h1>
              </div>
              <div className="t2">
              <p>Highest Bid </p>
              <h1>0.33 wETH</h1>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
     </main>
     <footer>
      <div className="foif">
       <div className="fi1">
        <img src={logoImg} alt="" />
        <div className="f1">
          <h1>NFT marketplace UI created
            <br />
             with Anima for Figma.</h1>
             <div className="pi">
              <p>Join our community</p>
              <div className="ico2">
              <PiDiscordLogoBold className='ic' />
              <LuYoutube  className='ic'/>
              <CiTwitter  className='ic'/>
              <FaInstagram  className='ic'/>
              </div>
             </div>
        </div>
       </div>
       <div className="fi2">
        <h1>Explore</h1>
          <div className="f2">
            <p>Marketplace</p>
            <p>Rankings</p>
            <p>Connect a wallet</p>
          </div>
       </div>
       <div className="fi3">
        <h1>Join our weekly digest</h1>
        <div className="f3">
          <h1>Get exclusive promotions & updates
            <br />
             straight to your inbox.</h1>
             <div className="fy3">
              <h1>Enter your email here</h1>
              <button>Subscribe</button>
             </div>
        </div>
       </div>
      </div>
      <div className="fo">
        <h1>Ⓒ NFT Market. Use this template freely.</h1>
      </div>
  
     </footer>
    </div>
  )
}

export default App
