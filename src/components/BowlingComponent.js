import React from 'react'

const BowlingComponent = (props) => {
    const data = props.data;
    return (
        <table className='center'>
            <tr>
                <th>Bowler</th>
                <th>O</th>
                <th>M</th>
                <th>R</th>
                <th>W</th>
                <th>Econ</th>
            </tr>
            {data.map((val, key) => {
                return (
                    <tr key={key}>
                        <td>{val.name}</td>
                        <td>{val.overs}</td>
                        <td>{val.maidens}</td>
                        <td>{val.runs_conceded}</td>
                        <td>{val.wickets}</td>
                        <td>{val.econ}</td>
                    </tr>
                )
            })}
        </table>
    )
}

export default BowlingComponent