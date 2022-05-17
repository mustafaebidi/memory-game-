


import "./card.css"



const Card =({img,index,openCards,status,id})=>{

    

    return(

        <div className={`card ${status}`} onClick={()=>openCards(index)}>
            <img src={img} alt="" />
        </div>
        
    )
}

export default Card