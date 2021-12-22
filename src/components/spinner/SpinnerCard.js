import React from 'react'

const SpinnerCard = () => {
    return (
        <>
            <div className="spinner__card">
                <div className="spinner spinner--card">
                    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                </div>
            </div>
        </>
    )
}

export default SpinnerCard
