import React from 'react'
import Columns from './Columns'

function Table() {
    return (
        <table>
            <tbody>
                <tr>
                    <Columns />
                    {/* <td>Name</td>
                    <td>id</td> */}
                </tr>
            </tbody>
        </table>
    )
}

export default Table
