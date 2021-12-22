import React from 'react'
const ModalLogout = ({ logout }) => {
    return (
        <>
            <div className="modal">
                <div className="modal__main">
                    <div className="modal__header">
                        <h3>Logout</h3>
                    </div>
                    <div className="modal__body message__prompt modal--logout">

                        <p>Are you sure you want to logout?
                        </p>
                    </div>
                    <div className="modal__footer">
                        <ul>
                            <li><button className="btn btn--red" >Logout</button></li>
                            <li><button className="btn btn--cancel" onClick={logout}>Cancel</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalLogout
