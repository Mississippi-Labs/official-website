import { useState } from 'react'

import './App.scss'
import Header from './components/header';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css';
import FAQ from './config/faq.js';
import imgPlayer from '@/assets/img/player_1.png';
import imgPlayers from '@/assets/img/players.png';

function App() {
  const [faqActiveIndex, setFaqActiveIndex] = useState(-1);
  SwiperCore.use([Mousewheel]);
  return (
    <div className="mi-home-page">
      <Header/>
      <Swiper
        direction={'vertical'}
        mousewheel
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <section className={"mi-section mi-section1"}>
            <button className={'play-btn'}>PLAY NOW</button>

            <div className="scroll-tip">
              Scroll
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className={"mi-section mi-section2"}>
            <div className="mi-home-desc">
              <div className="mi-home-desc-title-wrap">
                <h2>Welcome to Mississippi for Gold Prospecting! </h2>
              </div>
              <p>y'all! Just a heads up, your neighbors ain't the friendliest bunch. It's a wild ride of plunderin' and survivin', so go hunt that treasure and claim your bounty.</p>
              <img src={imgPlayer} alt="" className="player p1"/>
              <img src={imgPlayer} alt="" className="player p2"/>
            </div>
            <div className="mi-home-desc-wrapper">
              <dl className="mi-home-desc-item">
                <dt>Gameplay</dt>
                <dd>Mississippi is a fully on-chain roguelike PVP game where players battle for limited resources within a complex cave. Welcome to Mississippi for gold prospecting! Compete with others, take on greed, and see who comes out on top!</dd>
              </dl>
              <dl className="mi-home-desc-item">
                <dt>Mission</dt>
                <dd>To create great games only enabled by Web3. We are striving to find and leverage the unique fun factor that Web3 offers.</dd>
              </dl>
              <dl className="mi-home-desc-item">
                <dt>Approach</dt>
                <dd>We will keep exploring the potential of Autonomous Worlds. The composability of Autonomous Worlds will pave the way for a new labor relations between developers and game players.</dd>
              </dl>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className={"mi-section mi-section-faq"}>
            <h2>Frequently Asked Questions</h2>
            <div className="faq-wrapper">
              {
                FAQ.map((item, index) => {
                  return (
                    <dl
                      key={item.title}
                      onClick={() => setFaqActiveIndex(faqActiveIndex === index ? -1 : index)}
                    >
                      <dt className={faqActiveIndex === index ? 'active' : ''}>{item.title}</dt>
                      <dd>{item.content}</dd>
                    </dl>
                  )
                })
              }
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className={"mi-section mi-section-last"}>
            <img src={imgPlayers} alt="" className="players"/>
            <div className="player-desc">
              Hey, buddy, you've reached the horizon, <br/>  but the real excitement begins when you enter the cave!
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default App
