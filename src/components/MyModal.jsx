import React from 'react'

export default function MyModal({visible, onClose, nick, text}) {

    if(!visible) return null;

    return (
        <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center p-3 flex-col z-30'>
            <button onClick={onClose} className='text-white text-[40px] text-center'>x</button>
            <div className='bg-black p-2 rounded text-white text-center'>
                <p className='font-bold'>{nick}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}