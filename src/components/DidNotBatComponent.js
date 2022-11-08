import React from 'react'

const DidNotBatComponent = (props) => {
    const data = props.data
    const playerHtml = data.map((val,key)=>{
        return(
            <div className="yettobat">
                <img src={val.player_img} alt={"none"} className="imageyettobat"/>
                <div>{val.name}</div>
            </div>
        )
    })
    return (
        <div>
            {playerHtml}
        </div>
    )
}

export default DidNotBatComponent