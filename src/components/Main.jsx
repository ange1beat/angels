import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import logo from './images/logo.png'
import angel1 from './images/1_angel.png'
import angel2 from './images/2_angel.png'
import angel3 from './images/3_angel.png'
import angel4 from './images/4_angel.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import MyModal from './MyModal'
import Header from './Header'
import back from './images/back.png'


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
        <Header />
        <div className='bg-white w-full h-full flex flex-col items-center overflow-hidden'>
            <img src={back} className='w-[100%] md:w-[100%] mt-[90%] md:mt-[5%] background-attachment: fixed z-0 opacity-50' />
            <img src={back} className='w-[100%] mt-[120%] md:mt-[10%] background-attachment: fixed z-0 opacity-50 md:hidden' />
            <img src={back} className='w-[100%] mt-[40%] md:mt-[10%] background-attachment: fixed z-0 opacity-50 md:hidden' />
            <img src={back} className='w-[100%] mt-[170%] md:mt-[10%] background-attachment: fixed z-0 opacity-50 md:hidden' />
            <div className='flex justify-center items-center p-10'>
            </div>
            <div className='justify-center items-center text-black w-screen break-words p-10 text-center flex flex-col text-xl z-10'>
                <div className='p-2 font-bold'>Not just a picture.</div>
                <div className='p-2 md:w-[50%]'>Choose your own goddess who will protect you from all the failures in the crypto market, she will give you good luck and strength, will help you in all your affairs. Each goddess has her own character, backstory, her own lore. We want to recreate a whole universe built around anime style, blockchain technology and fandom. When you buy your goddess, you get a future character who will interact in the metaverse, give you access to the discord community, and bring you closer to other project participants.</div>
            </div>
            <div className='justify-center items-center text-black w-screen break-words p-10 text-center flex flex-col text-xl z-10'>
                <div className='p-2 font-bold'>Collection</div>
            </div>
            <div className='flex flex-col justify-center items-center z-10 p-3 md:flex-row'>
                <div className='flex flex-col p-[20px]'>
                    <img onClick={() => showModal('Mari', 'The best girl in our collection The best girl in our collection The best girl in our collection The best girl in our collection The best girl in our collection')} src={angel1} className='shadow-blackBg'/>
                </div>
                <div className='flex flex-col p-[20px]'>
                    <img onClick={() => showModal('Colesta', 'The best girl in our collection The best girl in our collection The best girl in our collection The best girl in our collection The best girl in our collection')} src={angel2} className='shadow-blackBg'/>
                </div>
                <div className='flex flex-col p-[20px]'>
                    <img src={angel3} className='shadow-blackBg'/>
                </div>
                <div className='flex flex-col p-[20px]'>
                    <img src={angel4} className='shadow-blackBg'/>
                </div>
            </div>
            <div className='mt-10 mb-10'>
                <a href='https://gamma.io/angelbeat.btc'><div className='text-white text-xl border-solid border-2 border-white pl-[125px] pr-[125px] pt-3 pb-3 rounded hover:bg-white hover:text-black'>PURCHASE</div></a>
            </div>

            <MyModal onClose={handleOnClose} visible={showMyModal} nick={showNick} text={showText}/>
        </div>
        </>
    )
}

export default Main;