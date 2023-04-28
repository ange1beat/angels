import { Link } from "react-router-dom";
import logo from './images/logotip.png'
import god7 from './images/7_angel.png'

const Star = () => {
    return (
        <div className="bg-black w-full flex flex-col items-center font-mono font-family: ui-monospace text-white">
                 <div className='flex flex-row w-full justify-center text-white items-center md:gap-60 gap-6 font-mono	font-family: ui-monospace fixed bg-black z-20'>
                    <a href='/'><p className='cursor-pointer font-bold hover:text-purple-400'>Collection</p></a>
                    <img src={logo} className='w-[30%] md:w-[10%]'/>
                    <a href='/'><p className='cursor-pointer font-bold hover:text-purple-400'>Information</p></a>
                </div>
                <div className="pt-16 flex flex-col justify-center items-center">
                    <img src={god7} className='p-5 md:w-[40%]'/>
                    <div className="flex flex-col justify-center items-center">
                        <div className="font-bold md:text-3xl">
                            Star
                        </div>
                        <div className="text-center p-5 md:pr-72 md:pl-72 md:text-2xl">
                        A girl with an amazing ability to manipulate starlight. She can create light shapes, project stars onto walls, and even create illusions that can confuse her enemies. Her abilities are strong and beautiful, and she can use them for both defense and attack. The constellation usually wears clothes decorated with stars and always looks like part of the night sky. Her beautiful eyes resemble a constellation of stars, and they glow when she uses her abilities. She often looks mysterious and mysterious, and her strength can be amazing when she fights for her friends and protects her world from enemies.
                        </div>
                        <div className='pt-10 pb-10'>
                            <a href='/'>
                                <div className='flex flex-col justify-center items-center text-white text-2xl pr-12 pl-12 border-2 border-white hover:border-purple-400 hover:text-purple-400'>
                                    CHECK ID
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Star