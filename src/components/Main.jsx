import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import logo from './images/logotip.png'
import slogan from './images/slogan.png'
import cute from './images/meaning.png'
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
import value from './images/value.png'
import collection1 from './images/collection1.png'
import fallstar from './images/fallingstar.gif'
import tg from './images/telega.png'


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
            <div className='bg-black w-full flex flex-col items-center'>
                <div className='flex flex-row w-full justify-center text-white items-center md:gap-60 gap-6 font-mono	font-family: ui-monospace fixed bg-black'>
                    <p className='cursor-pointer font-bold hover:text-purple-400'>Collections</p>
                    <img src={logo} className='w-[30%] md:w-[10%]'/>
                    <p className='cursor-pointer font-bold hover:text-purple-400'>Information</p>
                </div>
                <div className='flex flex-col justify-center items-center text-white pt-28 pr-10 pl-10 gap-5'>
                    <img src={cosmo}/>
                    <img src={slogan} className='md:w-[40%]'/>
                    <img src={cute} className='w-[50%] md:w-[20%]'/>
                    <img src={mean} className='md:w-[40%]'/>
                    <img src={value1} className='w-[50%] md:w-[20%]'/>
                    <img src={value} className='md:w-[40%]'/>
                </div>
                <div className='flex flex-col text-white font-mono	font-family: ui-monospace text-xl p-16'>
                    Collections
                </div>
                <div className='flex flex-col justify-center items-center gap-5'>
                    <Link to='/starlite'><img src={collection1}/></Link>
                    <p className='text-white absolute mt-[100%] md:mt-[40%] md:text-2xl font-mono	font-family: ui-monospace'>Other collections coming soon</p>
                    <img src={tg} className='absolute w-[10%] mt-[140%] md:mt-[75%] md:w-[5%]'/>
                    <img src={fallstar} className='md:w-[1920px]'/>
                </div>
            </div>
        </>
    )
}

export default Main;