import React from 'react'
import angel1 from './images/1_angel.png'
import angel2 from './images/2_angel.png'

export default function MyModal({visible, onClose}) {

    if(!visible) return null;

    return (
        <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center p-3 flex-col z-30 font-mono font-family: ui-monospace text-xl'>
            <button onClick={onClose} className='text-purple-400 text-[20px] text-center font-bold bg-black rounded-t pt-2'>✕</button>
            <div className='bg-black p-2 rounded-b text-white text-center flex flex-col h-[80%]'>
                <div className='overflow-auto items-center '>
                    <img src={angel1}/>
                    <img src={angel2}/>
                    <img src={angel2}/>
                </div>
            </div>
        </div>
    )
}