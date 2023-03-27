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
import back3 from './images/back3.jpg'
import back4 from './images/back4.png'


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
        <div className='bg-black w-full h-full flex flex-col items-center overflow-hidden'>
            {/* <img src={back} className='w-[100%] md:w-[100%] mt-[90%] md:mt-[5%] background-attachment: fixed z-0 opacity-50' />
            <img src={back2} className='w-[100%] mt-[150%] background-attachment: fixed z-0 opacity-50 md:hidden' />
            <img src={back2} className='w-[100%] mt-[20%] background-attachment: fixed z-0 opacity-50 md:hidden' />
            <img src={back2} className='w-[100%] mt-[200%] background-attachment: fixed z-0 opacity-50 md:hidden' /> */}
            <img src={back4} className='w-[100%] mt-[17%] fixed z-0 opacity-70 md:hidden' />
            <div className='flex justify-center items-center p-10'>
            </div>
            <div className='h-screen justify-center items-center text-white w-screen break-words mt-[-20%] p-10 text-center flex flex-col text-xl z-10'>
                <div className='p-2 font-bold'>Not just a picture.</div>
                <div className='p-2 pt-10 md:w-[50%] font-bold'>Choose your own goddess and get your own iNFT. When you buy a girl you get access to a chatbot where you can chat with your goddess who has her own artificial intelligence. Only you will have access, because the blockchain checks for NFT in your wallet. Each goddess has its own character, its own way of communication, choose your favorite and enjoy it!</div>
            </div>
            <div className='justify-center items-center text-white w-screen break-words text-center flex flex-col text-xl z-10 border-solid border-b-4 border-white pb-5 pt-5'>
                <div className='p-2 font-bold'>Collection</div>
            </div>
            <div className='flex flex-col justify-center items-center z-10 p-3 md:flex-row bg-black'>
                <div className='flex flex-col p-[20px]'>
                    <img onClick={() => showModal('Jishui', '')} src={angel1} className='shadow-blackBg hover: cursor-pointer'/>
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
                <img src={roadmap}/>
            </div>




                  
           
            <div className='flex flex-col md:flex-row justify-center items-center z-10 bg-white'>
            <div className='justify-center items-center text-black w-screen break-words text-center flex flex-col text-xl z-10 bg-white pt-5 pb-5'>
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
                <div>
                {/* <button class="bg-red-500 group hover:scale-105 flex space-x-2 transition-all duration-150 ease-in-out hover:bg-red-600 shadow-md shadow-red-700 rounded-full px-4 py-1">
    <span class="group-hover:text-white">Button</span>
    <span class="group-hover:hidden">🙈</span>
    <span class="group-hover:block hidden">🙉</span>
  </button> */}
                </div>
            </div>

            <MyModal onClose={handleOnClose} visible={showMyModal} nick={showNick} text={showText}/>
            
        </div>
        </>
    )
}

export default Main;