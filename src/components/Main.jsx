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
import stargod from './images/stargodess.png'



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
        <div className='bg-gradient-to-b from-violet-500 to-fuchsia-500 w-full h-full flex flex-col items-center overflow-hidden font-mono font-family: ui-monospace font-bold text-xl'>
            <div className='h-screen justify-center items-center text-white w-screen break-words pl-10 pr-10 text-center flex flex-col text-xl z-10'>
            <div className='flex flex-row items-center text-3xl text-black'>
                YUZUKI
            </div>
                <div className='p-2 pt-10 font-mono font-family: ui-monospace md:w-[50%]'>Simplicity, beauty, elegance - it's about us</div>
            </div>
            <div className='justify-center items-center text-white w-screen break-words text-center flex flex-col text-xl z-10 border-solid border-b-4 border-white pb-5'>
                <div className='p-2 font-bold'>Collections</div>
            </div>
            <div className='flex flex-col justify-center items-center z-10 p-3 md:flex-row bg-black w-full text-white'>
                <div>
                    <img src={stargod} className='w-[300px] h-[100px] object-cover rounded'></img>
                </div>


                {/* <div className='flex flex-col p-[20px]'>
                    <img onClick={() => showModal('Jishui', '')} src={angel1} className='shadow-blackBg hover: cursor-pointer'/>
                </div>
                <div className='flex flex-col p-[20px]'>
                    <img onClick={() => showModal('Colesta', 'The best girl in our collection The best girl in our collection The best girl in our collection The best girl in our collection The best girl in our collection')} src={angel2} className='shadow-blackBg hover: cursor-pointer'/>
                </div> */}
                </div>
            </div>

            <MyModal onClose={handleOnClose} visible={showMyModal} nick={showNick} text={showText}/>
            
        </>
    )
}

export default Main;