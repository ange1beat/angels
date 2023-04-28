import { Link } from "react-router-dom";
import logo from './images/logotip.png'
import god9 from './images/9_angel.png'

const Gold = () => {
    return (
        <div className="bg-black w-full flex flex-col items-center font-mono font-family: ui-monospace text-white">
                 <div className='flex flex-row w-full justify-center text-white items-center md:gap-60 gap-6 font-mono	font-family: ui-monospace fixed bg-black z-20'>
                    <a href='/'><p className='cursor-pointer font-bold hover:text-purple-400'>Collection</p></a>
                    <img src={logo} className='w-[30%] md:w-[10%]'/>
                    <a href='/'><p className='cursor-pointer font-bold hover:text-purple-400'>Information</p></a>
                </div>
                <div className="pt-16 flex flex-col justify-center items-center">
                    <img src={god9} className='p-5 md:w-[40%]'/>
                    <div className="flex flex-col justify-center items-center">
                        <div className="font-bold md:text-3xl">
                            Gold
                        </div>
                        <div className="text-center p-5 md:pr-72 md:pl-72 md:text-2xl">
                        A girl who has the ability to create jewelry with magic. She can create crystals, precious stones and other shiny objects depending on her mood and desires. Her abilities can be used both to create beautiful jewelry and to defeat enemies by creating pointed crystals. Usually wears clothes in red and purple tones, decorated with sequins and crystals. Her beautiful and deep eyes resemble pearls, and they glow when she uses her abilities. Rubinia looks mysterious and dreamy, but her abilities can be dangerous when she protects her friends and her world from enemies.
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