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
import back2 from './images/back2.png'
import roadmap from './images/roadmap.png'
import angelbeat from './images/ange1beat.jpg'
import adonis from './images/artem.jpg'
import pipidastr from './images/pipidastr.png'


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
            <img src={back2} className='w-[100%] mt-[150%] background-attachment: fixed z-0 opacity-50 md:hidden' />
            <img src={back2} className='w-[100%] mt-[20%] background-attachment: fixed z-0 opacity-50 md:hidden' />
            <img src={back2} className='w-[100%] mt-[200%] background-attachment: fixed z-0 opacity-50 md:hidden' />
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
                    <img onClick={() => showModal('Mari', 'The best girl in our collection The best girl in our collection The best girl in our collection The best girl in our collection The best girl in our collection')} src={angel1} className='shadow-blackBg hover: cursor-pointer'/>
                </div>
                <div className='flex flex-col p-[20px]'>
                    <img onClick={() => showModal('Colesta', 'The best girl in our collection The best girl in our collection The best girl in our collection The best girl in our collection The best girl in our collection')} src={angel2} className='shadow-blackBg hover: cursor-pointer'/>
                </div>
                <div className='flex flex-col p-[20px]'>
                    <img src={angel3} className='shadow-blackBg hover: cursor-pointer'/>
                </div>
                <div className='flex flex-col p-[20px]'>
                    <img src={angel4} className='shadow-blackBg hover: cursor-pointer'/>
                </div>
            </div>
            <div className='mt-10 mb-10 z-10'>
                <a href='https://gamma.io/angelbeat.btc'><div className='text-black font-bold text-xl border-solid border-4 shadow-blackBg border-black pl-[100px] pr-[100px] pt-3 pb-3 rounded hover:bg-purple-400 hover:text-white z-10'>PURCHASE</div></a>
            </div>

            <div className='justify-center items-center flex flex-col bg-black text-white w-screen z-10'>
            <div className='justify-center items-center text-white w-screen break-words p-10 text-center flex flex-col text-xl z-10 bg-black'>
                <div className='p-2 font-bold'>Roadmap</div>
            </div>
                <img src={roadmap}/>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center z-10 bg-white'>
            <div className='justify-center items-center text-black w-screen break-words p-10 text-center flex flex-col text-xl z-10 bg-white'>
                <div className='p-2 font-bold'>Team</div>
            </div>
                <div className='flex flex-col justify-center items-center p-3 gap-1'>
                    <img src={angelbeat} className='rounded-full w-[50%]'/>
                    <div className='text-black font-bold'>Ange1beat</div>
                    <div className='text-black text-center w-[70%]'>The creator of the project, the developer, the employee of the central bank and just a good person</div>
                </div>
                <div className='flex flex-col justify-center items-center p-3 gap-1'>
                    <img src={adonis} className='rounded-full w-[50%]'/>
                    <div className='text-black font-bold'>Adonis</div>
                    <div className='text-black text-center w-[70%]'>Philosopher, sociologist, political scientist, helps with social interaction in the project</div>
                </div>
                <div className='flex flex-col justify-center items-center p-3 gap-1'>
                    <img src={pipidastr} className='rounded-full w-[50%]'/>
                    <div className='text-black font-bold'>Pipidastr</div>
                    <div className='text-black text-center w-[70%]'>An artist who comes up with character designs, has extensive experience in drawing in the style of anime</div>
                </div>
            </div>

            <MyModal onClose={handleOnClose} visible={showMyModal} nick={showNick} text={showText}/>
        </div>
        </>
    )
}

export default Main;