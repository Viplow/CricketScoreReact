import React from 'react'

const ExtrasComponent = (props) => {
    const data = props.data;
    return (
        <table className='center'>
            <tr>
                <th>Extras</th>
                <th>B</th>
                <th>W</th>
                <th>NB</th>
                <th>LB</th>
            </tr>
            <tr>
                <td>{data.total}</td>
                <td>{data.byes}</td>
                <td>{data.wide}</td>
                <td>{data.noballs}</td>
                <td>{data.legbyes}</td>
            </tr>

        </table>
    )
}

export default ExtrasComponent