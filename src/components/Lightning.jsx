import { Link } from "react-router-dom";
import logo from './images/logotip.png'
import god10 from './images/10_angel.png'

const Gold = () => {
    return (
        <div className="bg-black w-full flex flex-col items-center font-mono font-family: ui-monospace text-white">
                 <div className='flex flex-row w-full justify-center text-white items-center md:gap-60 gap-6 font-mono	font-family: ui-monospace fixed bg-black z-20'>
                    <a href='/'><p className='cursor-pointer font-bold hover:text-purple-400'>Collection</p></a>
                    <img src={logo} className='w-[30%] md:w-[10%]'/>
                    <a href='/'><p className='cursor-pointer font-bold hover:text-purple-400'>Information</p></a>
                </div>
                <div className="pt-16 flex flex-col justify-center items-center">
                    <img src={god10} className='p-5 md:w-[40%]'/>
                    <div className="flex flex-col justify-center items-center">
                        <div className="font-bold md:text-3xl">
                        Lightning
                        </div>
                        <div className="text-center p-5 md:pr-72 md:pl-72 md:text-2xl">
                        A demonic girl with an incredible ability to manipulate lightning. It can create powerful electric charges, cause lightning and control their direction. Her abilities can be used for both attack and defense. Usually wear black clothing decorated with zippers and other electrical symbols. Her eyes glow with a bright light when she uses her abilities, and this makes her even more intimidating. The train may seem cold and distant, but it is always ready to protect its friends and its world from dangers.
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

export default Gold