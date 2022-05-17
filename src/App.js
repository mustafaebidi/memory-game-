
import { Fragment, useEffect, useState } from "react";
import "./App.css"
import Cards from "./components/cards/cards";
import PlayWith from "./components/playwith/playWith";
import Properties from "./components/properties/properties";
import StartWidget from "./components/startWidget/startWidget";
import Timer from "./components/timer/timer";


function App() {

  const [detailsPlayWith,setDetailsPlayWith]=useState({
    score:{you:0,yourfriend:0},
    turn:false,
    playWith:false
  }

  )

  const [start,setStartGame]=useState(false)

  //This to resturn All Value To Defult When the Game End
  useEffect(()=>{

    if(start){
      setDetailsPlayWith((state)=>({
        ...state,score:{you:0,yourfriend:0},turn:false
      }))


    }

  },[start])
  
  return (
      <Fragment>

        <StartWidget detailsPlayWith={detailsPlayWith} setDetailsPlayWith={setDetailsPlayWith} start={start} setStartGame={setStartGame}/>
        <h2 className="main-title">Memory Game</h2>
        <Properties>
          {detailsPlayWith.playWith && <PlayWith detailsPlayWith={detailsPlayWith}/>}
          <Timer start={start} setStartGame={setStartGame} />
        </Properties>
        <Cards start={start} setStartGame={setStartGame} setDetailsPlayWith={setDetailsPlayWith} detailsPlayWith={detailsPlayWith}/> 

      
      </Fragment>
  );
}

export default App;
