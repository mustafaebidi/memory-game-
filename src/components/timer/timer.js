import { useState ,useEffect,useRef} from "react";

import "./timer.css"

const Timer=({start,setStartGame})=>{
    const [countDown,setCountDown]=useState(100)

    const globalCountDown = useRef()



    function startTimer() {
        globalCountDown.current = setInterval(() => {
            setCountDown((state) => state - 1)

        }, 1000);

    }

    useEffect(() => {
        
        if (start) {
            setCountDown(100)
            startTimer()
        }
        else{
            clearInterval(globalCountDown.current)

        }
    },[start])


    useEffect(() => {
        if (countDown < 1) {
            clearInterval(globalCountDown.current)
            setStartGame(false)
            console.log(2020,"muarD")
        }

    },[countDown, setStartGame])

    return(
        <div className="timer">{countDown}</div>
    )
}

export default Timer