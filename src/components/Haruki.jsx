import { Link } from "react-router-dom";
import logo from './images/logostarlite.png'
import god1 from './images/1_angel.png'

const Haruki = () => {
    return (
        <div className="bg-black w-full flex flex-col items-center font-mono font-family: ui-monospace text-white">
                 <div className='flex flex-row w-full justify-center text-white items-center md:gap-60 gap-6 font-mono	font-family: ui-monospace fixed bg-black z-20'>
                    <a href='/'><p className='cursor-pointer font-bold hover:text-purple-400'>Collection</p></a>
                    <img src={logo} className='w-[30%] md:w-[10%]'/>
                    <a href='/'><p className='cursor-pointer font-bold hover:text-purple-400'>Information</p></a>
                </div>
                <div className="pt-16 flex flex-col justify-center items-center">
                    <img src={god1} className='p-5 md:w-[40%]'/>
                    <div className="flex flex-col justify-center items-center">
                        <div className="font-bold md:text-3xl">
                            Haruki
                        </div>
                        <div className="text-center p-5 md:pr-72 md:pl-72 md:text-2xl">
                        Beautiful and mysterious girl who is always dressed in a red kimono. She has a cold and domineering character, but at the same time she is very smart and purposeful. Haruki is a kitsune, a fox spirit in Japanese mythology, and she has supernatural powers. She can transform into a fox and use her abilities to protect herself and those she loves. Despite his domineering nature, Haruki is a man with a big heart and protects those who are in trouble. She is always ready to challenge any opponent and fight for her beliefs.
                        </div>
                        <div className='pt-10 pb-10'>
                            <a href='https://ordinals.hiro.so/inscription/e4763ed3c212d8dcc28b2a868f93b08c786fa9e13977895caec812398dd2349fi0'>
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

export default Haruki