
import { useGlobalContext } from "../../context"
import "./startWidget.css"


const StartWidget=({detailsPlayWith,setDetailsPlayWith,setStartGame,start})=>{
    const {chosen,setChosen,startGame,items,setItems}=useGlobalContext()
    


    const checkBeforeStart=()=>{

        let arr=[...items.items]
        if(items.flippedcards){
            for(let i=0;i<items.items.length;i++){
                arr[i].status=""
            }

        }

        console.log(arr)

        setItems((state)=>({
            ...state,items:[...arr]
        }))

    }

    const typeImg= ["Animal","Anime",'Fish'].map((item,asa)=>{
        let verify= item.toLowerCase() === chosen ? "active" : " "
        return(
                <div key={asa} className={`${verify}`} onClick={()=>setChosen(item.toLowerCase())}>{item}</div>            
        )
    })


    if(start){
        return;
    }


    return(
      
        <div className="start-widget">

            <div className="control">
                <div className="play-with">
                    <div className={detailsPlayWith.playWith ?"" :"active"} onClick={()=>setDetailsPlayWith((state)=>({
                        ...state,playWith:false
                    }))}>Play Solo</div>
                    <div className={detailsPlayWith.playWith ?"active" :""} onClick={()=>setDetailsPlayWith((state)=>({
                        ...state,playWith:true
                    }))}>Play With Your Friend</div>
                </div>
                <div className="type-img">
                    {typeImg}
                </div>
                <div className="playing" onClick={()=>{
                    setStartGame(true)
                    if(items.flippedcards > 0){
                        checkBeforeStart()
                        setTimeout(() => {
                            startGame(chosen)
                        }, 1500);

                    }
                    else{
                        startGame(chosen)
                    }


                }}>Start</div>
            </div>
        
        </div>
    )
}

export default StartWidget