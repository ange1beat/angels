import { Link } from "react-router-dom";
import logo from './images/logotip.png'
import god8 from './images/8_angel.png'

const Aqua = () => {
    return (
        <div className="bg-black w-full flex flex-col items-center font-mono font-family: ui-monospace text-white">
                 <div className='flex flex-row w-full justify-center text-white items-center md:gap-60 gap-6 font-mono	font-family: ui-monospace fixed bg-black z-20'>
                    <a href='/'><p className='cursor-pointer font-bold hover:text-purple-400'>Collection</p></a>
                    <img src={logo} className='w-[30%] md:w-[10%]'/>
                    <a href='/'><p className='cursor-pointer font-bold hover:text-purple-400'>Information</p></a>
                </div>
                <div className="pt-16 flex flex-col justify-center items-center">
                    <img src={god8} className='p-5 md:w-[40%]'/>
                    <div className="flex flex-col justify-center items-center">
                        <div className="font-bold md:text-3xl">
                            Aqua
                        </div>
                        <div className="text-center p-5 md:pr-72 md:pl-72 md:text-2xl">
                        A beautiful girl with the ability to manipulate water. She can create beautiful fountains, crystal walls of ice and powerful water strokes that can destroy everything in their path. Her abilities are strong and graceful, and she can use them for both defense and attack. Aqua usually wears light clothing in the colors of sea foam and algae, and often leads local fishermen and marine explorers. Her beautiful blue eyes resemble the color of deep waters, and they glow when she uses her abilities. She often looks kind and caring, and her strength can be amazing when she fights for her friends and protects her world from enemies.
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

export default Aqua