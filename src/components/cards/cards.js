
import { useEffect, useRef, useState } from "react"
import { useGlobalContext } from "../../context.js"
import  Card from "../card/card.js"
import "./cards.css"
const Cards=({start,setStartGame,setDetailsPlayWith,detailsPlayWith})=>{

    const prevCard=useRef(-1)

    const [cardsStatus,setcardsStatus]=useState("")

    const {items,setItems} =useGlobalContext()


    const checkTwoOpened=(indexItem)=>{

        const arr =[...items.items]

        if(items.items[indexItem].id === items.items[prevCard.current].id){

            arr[indexItem]={...arr[indexItem],status:"open correct"}
            arr[prevCard.current]={...arr[prevCard.current],status:"open correct"}

            prevCard.current=-1



            let countFiledCard=items.flippedcards+1
            setItems((state)=>({...state,flippedcards:countFiledCard,items:[...arr]}))

            if(detailsPlayWith.playWith){
                let turn=detailsPlayWith.turn ?"yourfriend" :"you"
                setDetailsPlayWith((state)=>({
                    ...state,score:{...state.score,[turn]:state.score[turn]+1},turn:!state.turn
                }))
            }


            if(countFiledCard === 8){
                setStartGame(false)
            }



        }
        else{
            setcardsStatus("active")

            arr[indexItem]={...arr[indexItem],status:"open wrong"}
            arr[prevCard.current]={...arr[prevCard.current],status:"open wrong"}

            setItems((state)=>({...state,items:[...arr]}))

            if(detailsPlayWith.playWith){
                setDetailsPlayWith((state)=>({
                    ...state,turn:!state.turn
                }))
            }

            setTimeout(() => {
                arr[indexItem]={...arr[indexItem],status:""}
                arr[prevCard.current]={...arr[prevCard.current],status:""}
                setItems((state)=>({...state,items:[...arr]}))
                setcardsStatus("")

                prevCard.current=-1

            }, 2000);


        }






    }

    const openCards=(indexItem,)=>{

        if(!(items.items[indexItem].status.includes("correct") || items.items[indexItem].status.includes("open"))){


            if(prevCard.current !== -1){
                checkTwoOpened(indexItem)

            }
            else{

                const arr =[...items.items]
                arr[indexItem]={...arr[indexItem],status:"open"}
                prevCard.current=indexItem
                setItems((state)=>({...state,items:[...arr]}))

            }


            
        }

    }


    useEffect(()=>{
        if(start){
            setcardsStatus("active")
            setTimeout(() => {
                prevCard.current=-1
                setcardsStatus("")
            }, 3000);
        }


    },[start])



    const allcard=items.items.map(({id_q,img,status,id},index) => {
        return(
            <Card key = {id_q+9} img={img} index={index} id={id} openCards={openCards} status={status}/>
        )
    })

    return(
        <div className={`cards ${cardsStatus}`} started={`${start ? items.flippedcards > 0 ? "false" : "true" :"false"}`}>
            {allcard}
        </div>
    )
}

export default Cards