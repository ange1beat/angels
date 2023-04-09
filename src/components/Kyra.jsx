import { Link } from "react-router-dom";
import logo from './images/logostarlite.png'
import god4 from './images/4_angel.png'

const Kyra = () => {
    return (
        <div className="bg-black w-full flex flex-col items-center font-mono font-family: ui-monospace text-white">
                 <div className='flex flex-row w-full justify-center text-white items-center md:gap-60 gap-6 font-mono	font-family: ui-monospace fixed bg-black z-20'>
                    <a href='/'><p className='cursor-pointer font-bold hover:text-purple-400'>Collection</p></a>
                    <img src={logo} className='w-[30%] md:w-[10%]'/>
                    <a href='/'><p className='cursor-pointer font-bold hover:text-purple-400'>Information</p></a>
                </div>
                <div className="pt-16 flex flex-col justify-center items-center">
                    <img src={god4} className='p-5 md:w-[40%]'/>
                    <div className="flex flex-col justify-center items-center">
                        <div className="font-bold md:text-3xl">
                            Kyra
                        </div>
                        <div className="text-center p-5 md:pr-72 md:pl-72 md:text-2xl">
                        A beautiful and mysterious girl who is a demon of fire. She has the ability to control fire and can create and control flames. Kaira has a strong and domineering character, and always knows what she wants. She often acts by her own rules and does not obey anyone but herself. Kaira does not like to lose and is always ready to challenge her opponents. Despite her domineering nature, she also has a caring side and can protect those who need help. Outwardly, she looks like an ordinary girl, but when she uses her abilities, her eyes begin to glow with a bright blue fire.
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

export default Kyra