import Header from "./Header"
import lamba from './images/lamba.mp4'

const Lamba = () => {
    return (
        <>
            <Header/>
                <div className="text-white flex flex-col justify-center p-6 items-center">
                    <video width="750" height="500" controls >
                        <source src={lamba} type="video/mp4"/>
                    </video>
                    <div className="text-center p-6 w-[50%]">
                    Ламборджини столкнулась с легковушкой в Котельниках, сильно пострадав
                    </div>
                </div>
        </>
    )
}

export default Lamba