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
        <div className='bg-black w-screen h-full flex flex-col items-center'>
            <div className='flex justify-center items-center p-10'>
                <img src={logo} className='w-[50%]'/>
            </div>
            <div className='justify-center items-center text-white w-screen break-words p-10 text-center flex flex-col text-xl'>
                <div className='p-2'>Not just a picture.</div>
                <div className='p-2'>Choose your own guardian angel who will give you good luck. She will be yours and only yours.</div>
                <div className='p-2 font-bold'>Only ten angels in the collection.</div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className='flex flex-col p-[20px]'>
                    <img onClick={() => showModal('Mari', 'The best girl in our collection The best girl in our collection The best girl in our collection The best girl in our collection The best girl in our collection')} src={angel1} className='hover:scale-75'/>
                </div>
                <div className='flex flex-col p-[20px]'>
                    <img onClick={() => showModal('Colesta', 'The best girl in our collection The best girl in our collection The best girl in our collection The best girl in our collection The best girl in our collection')} src={angel2} className=''/>
                </div>
                <div className='flex flex-col p-[20px]'>
                    <img src={angel3} className=''/>
                </div>
                <div className='flex flex-col p-[20px]'>
                    <img src={angel4} className=''/>
                </div>
            </div>
            <div className='mt-10 mb-10'>
                <a href='https://gamma.io/angelbeat.btc'><div className='text-white text-xl border-solid border-2 border-white pl-[125px] pr-[125px] pt-3 pb-3 rounded hover:bg-white hover:text-black'>PURCHASE</div></a>
            </div>

            <MyModal onClose={handleOnClose} visible={showMyModal} nick={showNick} text={showText}/>
        </div>
    )
}

export default Main;