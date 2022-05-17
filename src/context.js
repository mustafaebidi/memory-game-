
import React, { useState, useContext, useEffect, useRef, useCallback } from 'react'

const AppContext = React.createContext()

const AppProvider=({children})=>{


    const defult =useRef("animal")

    const[chosen,setChosen]=useState(defult.current)

    const[items, setItems] = useState({items:[],flippedcards:0})

    
    const startGame=useCallback( (chosen)=> {
        const images = require.context('/public/image', true).keys()

        let arr=[]


        for (let i = 0; i < images.length; i++) {
            if (images[i].includes(chosen)) {
                arr.push({ id_q: ((i + 1) * 2) + 0, id: (i + 1), img: images[i].replace(".", "/image"), status: "" })
                arr.push({ id_q: (((i + 1) * 2) + 400) + 1, id: (i + 1), img: images[i].replace(".", "/image"), status: "" })
            }

        }
        
        arr.sort(function (a, b) { return 0.5 - Math.random() });
        setItems((state)=>({...state,flippedcards:0,items:[...arr]}))
    },[])

    useEffect(()=>{

        startGame(defult.current)

    },[startGame])


    return(<AppContext.Provider value={{items,setItems,chosen,setChosen,startGame}}>{children}</AppContext.Provider>)


}


export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }

