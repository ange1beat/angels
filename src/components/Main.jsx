import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import logo from './images/logotip.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import tg from './images/telega.png'
import Header from './Header'
import girl from './images/6_angel.png'
import nariks from './images/nariks.jpg'
import Narkiks from './Nariks';
import lamba1 from './images/lamba1.jpg'

const Main = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <>
            <Header/>
            <div className='bg-black w-full flex flex-col font-mono	font-family: ui-monospace'>
                <div className='md:mt-[5%] mt-[20%] flex flex-row w-[100%] p-3 gap-3 flex-wrap justify-center'>
                    <Link to='news1'>
                    <div className='bg-white text-center text-black w-[300px] h-[100%] flex flex-col'>
                        <img src={nariks} className='w-[300px] h-[250px]'/>
                        <div className='bg-white font-bold'>Заполонили площадку мужчины, которые роются в палисадниках и странно себя ведут</div>
                    </div>
                    </Link>
                    <Link to='news2'>
                    <div className='bg-white text-center text-black w-[300px] h-[100%] flex flex-col'>
                        <img src={lamba1} className='w-[300px]  h-[250px]'/>
                        <div className='bg-white font-bold'>Ламборджини столкнулась с легковушкой в Котельниках, сильно пострадав [ВИДЕО]</div>
                    </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Main;