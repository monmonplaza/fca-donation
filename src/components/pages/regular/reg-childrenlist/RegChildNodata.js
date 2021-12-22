import React from 'react'
import { FcDeleteDatabase } from 'react-icons/fc'

const RegChildNodata = () => {
    return (
        <>
            <div className="children_nodata">
                <div className="children_nodata__wrapper">
                    <FcDeleteDatabase />
                    <h3>No Available Data</h3>
                </div>
            </div>
        </>
    )
}

export default RegChildNodata
