import logo from './images/logotip.png'
import logostarlite from './images/logostarlite.png'
import { startTransition } from 'react';
import god1 from './images/1_angel.png'
import god2 from './images/2_angel.png'
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <>
            <div className='bg-black w-full flex flex-col items-center font-mono font-family: ui-monospace'>
                <div className='flex flex-row justify-center text-white items-center md:gap-60 gap-6 font-mono	font-family: ui-monospace fixed bg-black w-full'>
                    <p className='cursor-pointer font-bold hover:text-purple-400'>Collections</p>
                    <img src={logo} className='w-[30%] md:w-[10%]'/>
                    <p className='cursor-pointer font-bold hover:text-purple-400'>Information</p>
                </div>
                <div className='flex flex-col justify-center items-center mt-[10%] text-white'>
                    <img src={logostarlite} className='w-[80%]'/>
                    <p className='text-center p-5'>The light from the stars rushes at a speed of 299,792,458 m/s, but photons do not just disappear in space, they also create some creatures with special power, star goddesses will help you stay lucky and happy in your life and especially in the crypto market!</p>
                </div>
                <div className='flex flex-col justify-center items-center text-white p-8 gap-10'>
                    <Link to='/'><img src={god2} className='shadow-blackBg'/></Link>
                    <Link to='/'><img src={god1} className='shadow-blackBg'/></Link>
                </div>
                <div className='pt-5 pb-10'>
                <div className='flex flex-col justify-center items-center text-white text-2xl pr-12 pl-12 border-2 border-white'>
                    Purchase
                </div>
                </div>
            </div>
        </>
    )
}

export default Main;