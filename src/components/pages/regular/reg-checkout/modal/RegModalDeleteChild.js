import React from 'react'

const RegModalDeleteChild = ({ modal }) => {
    const { modalDeleteChild, setModalDeleteChild } = modal;

    const handleModalDeleteChild = () => {
        setModalDeleteChild(!modalDeleteChild)
    }


    return (
        <>
            <div className={modalDeleteChild ? "modal show" : "modal"}>
                <div className="modal__main">
                    <div className="modal__header">
                        <h3>Confirmation</h3>
                    </div>
                    <div className="modal__body message__prompt">

                        <p>Are you sure you want to remove this child?
                        </p>
                    </div>
                    <div className="modal__footer">
                        <ul>
                            <li><button className="btn btn--red" >Delete</button></li>
                            <li><button className="btn btn--cancel" onClick={handleModalDeleteChild}>Cancel</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegModalDeleteChild
