import React from 'react'

const BattingComponent = (props) => {
    const data = props.data;
    return (
        <table className='center'>
            <tr>
                <th>Batsman</th>
                <th>R</th>
                <th>B</th>
                <th>4s</th>
                <th>6s</th>
                <th>SR</th>
            </tr>
            {data.map((val, key) => {
                return (
                    <tr key={key}>
                        <td>{val.name}</td>
                        <td>{val.runs}</td>
                        <td>{val.balls_faced}</td>
                        <td>{val.fours}</td>
                        <td>{val.sixes}</td>
                        <td>{val.strike_rate}</td>
                    </tr>
                )
            })}
        </table>
    )
}

export default BattingComponent