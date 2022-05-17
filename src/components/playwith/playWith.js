import "./playWith.css"
const PlayWith=({detailsPlayWith})=>{
    return(
        <div className="con-scroe">
            <div className={detailsPlayWith.turn ? "" :"active"}>
                <div>You</div>
                <div className="point">{detailsPlayWith.score.you}</div>

            </div>
            <div className={detailsPlayWith.turn ? "active" :""}>
                <div>Your Friend</div>
                <div className="point">{detailsPlayWith.score.yourfriend}</div>
            </div>

        </div>
    )
}
export default PlayWith