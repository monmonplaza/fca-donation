import React from 'react'
import { FcQuestions } from 'react-icons/fc'
const TableNodata = ({ colspan }) => {
    return (
        <>
            <tr>
                <td className="table__nodata" colSpan={colspan}>
                    <div className="table__nodata__wrapper" >
                        <FcQuestions />
                        <h3>No Available Data</h3>
                    </div>
                </td>
            </tr>
        </>
    )
}

export default TableNodata
