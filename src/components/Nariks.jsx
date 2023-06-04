import Header from "./Header"
import nariks from './images/nariks.jpg'

const Narkiks = () => {
    return (
        <>
            <Header/>
            <div className="text-white flex flex-col justify-center p-6 items-center">
                <img src={nariks} className='w-[50%]'/>
                <div className="text-center p-6 md:w-[50%] w-[90%]">
                Заполонили площадку мужчины, которые роются в палисадниках и странно себя ведут

По словам горожан, незнакомцы по ночам роются в палисадниках, а затем проводят много времени в подъездах.
Местные жители предполагают, что их микрорайон превратился в рынок по продаже наркотиков, а облюбовали его  любители «кайфа».
                </div>
            </div>
        </>
    )
}

export default Narkiks