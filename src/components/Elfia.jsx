import { Link } from "react-router-dom";
import logo from './images/logotip.png'
import god6 from './images/6_angel.png'

const Necro = () => {
    return (
        <div className="bg-black w-full flex flex-col items-center font-mono font-family: ui-monospace text-white">
                 <div className='flex flex-row w-full justify-center text-white items-center md:gap-60 gap-6 font-mono	font-family: ui-monospace fixed bg-black z-20'>
                    <a href='/'><p className='cursor-pointer font-bold hover:text-purple-400'>Collection</p></a>
                    <img src={logo} className='w-[30%] md:w-[10%]'/>
                    <a href='/'><p className='cursor-pointer font-bold hover:text-purple-400'>Information</p></a>
                </div>
                <div className="pt-16 flex flex-col justify-center items-center">
                    <img src={god6} className='p-5 md:w-[40%]'/>
                    <div className="flex flex-col justify-center items-center">
                        <div className="font-bold md:text-3xl">
                            Elfia
                        </div>
                        <div className="text-center p-5 md:pr-72 md:pl-72 md:text-2xl">
                        A girl with beautiful horns who has the ability to control nature. It can cause rain, control wind and plants, and create powerful protective shields of earth and stones. Her abilities are strong and varied, and she can use them for both defense and attack. The Horned Elf usually wears light cloth clothing decorated with elements of nature, and is always ready to protect her forest and its inhabitants. Her beautiful horns symbolize her connection with nature and give her an imposing appearance. She often looks calm and balanced, but her anger can be terrifying when she defends her territory and her friends.A girl with beautiful horns who has the ability to control nature. It can cause rain, control wind and plants, and create powerful protective shields of earth and stones. Her abilities are strong and varied, and she can use them for both defense and attack. The Horned Elf usually wears light cloth clothing decorated with elements of nature, and is always ready to protect her forest and its inhabitants. Her beautiful horns symbolize her connection with nature and give her an imposing appearance. She often looks calm and balanced, but her anger can be terrifying when she defends her territory and her friends.
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

export default Necro