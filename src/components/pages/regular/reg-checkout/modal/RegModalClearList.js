import React from 'react'

const RegModalClearList = ({ modal }) => {
    const { clearList, setclearList } = modal
    const handleCloseModal = () => {
        setclearList(!clearList)
    }
    return (
        <>
            <div className={clearList ? "modal show" : "modal"}>
                <div className="modal__main">
                    <div className="modal__header">
                        <h3>Confirmation</h3>
                    </div>
                    <div className="modal__body message__prompt ">

                        <p>Are you sure you want to clear your children list?
                        </p>
                    </div>
                    <div className="modal__footer">
                        <ul>
                            <li><button className="btn btn--red" >Delete</button></li>
                            <li><button className="btn btn--cancel" onClick={handleCloseModal}>Cancel</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegModalClearList
