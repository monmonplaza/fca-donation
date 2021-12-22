import React from 'react'

const SpinnerButton = () => {
    return (
        <>
            <div className="spinner spinner--button">
                <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>
        </>
    )
}

export default SpinnerButton
