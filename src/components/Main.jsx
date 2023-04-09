import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import logo from './images/logostarlite.png'
import slogan from './images/slogan.png'
import cute from './images/cute.gif'
import mean from './images/mean.png'
import angel1 from './images/1_angel.png'
import angel2 from './images/2_angel.png'
import angel3 from './images/3_angel.png'
import angel4 from './images/4_angel.png'
import cosmo from './images/cosmo.gif'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import MyModal from './MyModal'
import Header from './Header'
import back from './images/back.png'
import back2 from './images/back2.png'
import roadmap from './images/roadmap.png'
import angelbeat from './images/ange1beat.jpg'
import adonis from './images/artem.jpg'
import pipidastr from './images/pipidastr.png'
import back3 from './images/back3.jpg'
import back4 from './images/back4.png'
import stargod from './images/stargodess.png'
import value1 from './images/pngwing.png'
import value from './images/main.png'
import collection1 from './images/collection1.png'
import fallstar from './images/fallingstar.gif'
import tg from './images/telega.png'
import god1 from './images/1_angel.png'
import god2 from './images/2_angel.png'
import god3 from './images/3_angel.png'
import god4 from './images/4_angel.png'
import main2 from './images/main2.png'


const Main = () => {

    const [showMyModal, setShowMyModal] = useState(false)
    const handleOnClose = () => {
        setShowMyModal(false)
    }

    const [showNick, setShowNick] = useState('')
    const [showText, setShowText] = useState('')

    const showModal = (nick, text) => {
        setShowMyModal(true)
        setShowNick(nick)
        setShowText(text)
    }


    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <>
            <div className='bg-black w-full flex flex-col items-center font-mono	font-family: ui-monospace'>
                <div className='flex flex-row w-full justify-center text-white items-center md:gap-60 gap-6 font-mono	font-family: ui-monospace fixed bg-black z-20'>
                    <a href='#col'><p className='cursor-pointer font-bold hover:text-purple-400'>Collection</p></a>
                    <img src={logo} className='w-[30%] md:w-[10%]'/>
                    <a href='#inf'><p className='cursor-pointer font-bold hover:text-purple-400'>Information</p></a>
                </div>
                <div id='inf'className='flex flex-col justify-center items-center pt-10'>
                    <img src={value} className='md:hidden'/>
                    <img src={main2} className='hidden md:flex'/>
                </div>
                <div className='flex flex-col justify-center items-center mt-[10%] text-white md:mt-[5%]'>
                    <p className='text-center p-5 md:pl-72 md:pr-72 md:text-2xl'>The light from the stars rushes at a speed of 299,792,458 m/s, but photons do not just disappear in space, they also create some creatures with special power, star goddesses will help you stay lucky and happy in your life and especially in the crypto market!</p>
                </div>
                <div id='col' className='flex flex-col justify-center items-center text-white p-8 gap-10 z-10 md:flex-row'>
                    <Link to='/felicia' className='md:w-[30%]'><img src={god2} className='shadow-blackBg z-10' data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"/></Link>
                    <Link to='/haruki' className='md:w-[30%]'><img src={god1} className='shadow-blackBg z-10' data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"/></Link>
                    <Link to='/miyuki' className='md:w-[30%]'><img src={god3} className='shadow-blackBg z-10' data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"/></Link>
                    <Link to='/kyra' className='md:w-[30%]'><img src={god4} className='shadow-blackBg z-10' data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"/></Link>
                </div>
                <div className='pt-5 pb-5'>
                <a href='https://app.ordin.finance/marketplace/'>
                <div className='flex flex-col justify-center items-center text-white text-2xl pr-12 pl-12 border-2 border-white hover:text-purple-400 hover:border-purple-400'>
                    Purchase
                </div>
                </a>

                </div>
                <div className='flex flex-col justify-center items-center pt-5 pb-5'>
                    <a href='https://t.me/YUZUKIART' className='justify-center items-center flex flex-col'><img src={tg} className='w-[40px]'/></a>
                </div>
                <div className='flex flex-col justify-center items-center text-white  pb-5 pt-5'>
                    by YUZUKIART
                </div>
            </div>
        </>
    )
}

export default Main;