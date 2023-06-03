import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import logo from './images/logotip.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import tg from './images/telega.png'
import Header from './Header'
import girl from './images/6_angel.png'

const Main = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <>
            <Header/>
            <div className='bg-black w-full flex flex-col font-mono	font-family: ui-monospace'>
                <div className='md:mt-[5%] mt-[20%] flex flex-row w-[100%] p-3 gap-3 flex-wrap justify-center'>
                    <div className='bg-white text-center text-black w-[300px] h-[400px] flex flex-col'>
                        <img src={girl} className='w-[300px]'/>
                        <div className='bg-white font-bold'>Заголовок новости</div>
                        <div className='bg-white'>Текст новости Текст новости Текст новости Текст новости</div>
                    </div>
                    <div className='bg-white text-center text-black w-[300px] h-[400px] flex flex-col'>
                        <img src={girl} className='w-[300px]'/>
                        <div className='bg-white font-bold'>Заголовок новости</div>
                        <div className='bg-white'>Текст новости Текст новости Текст новости Текст новости</div>
                    </div>
                    <div className='bg-white text-center text-black w-[300px] h-[400px] flex flex-col'>
                        <img src={girl} className='w-[300px]'/>
                        <div className='bg-white font-bold'>Заголовок новости</div>
                        <div className='bg-white'>Текст новости Текст новости Текст новости Текст новости</div>
                    </div>
                    <div className='bg-white text-center text-black w-[300px] h-[400px] flex flex-col'>
                        <img src={girl} className='w-[300px]'/>
                        <div className='bg-white font-bold'>Заголовок новости</div>
                        <div className='bg-white'>Текст новости Текст новости Текст новости Текст новости</div>
                    </div>
                    <div className='bg-white text-center text-black w-[300px] h-[400px] flex flex-col'>
                        <img src={girl} className='w-[300px]'/>
                        <div className='bg-white font-bold'>Заголовок новости</div>
                        <div className='bg-white'>Текст новости Текст новости Текст новости Текст новости</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main;