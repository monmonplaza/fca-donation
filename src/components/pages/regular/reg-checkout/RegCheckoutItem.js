import React from 'react'
import { BsTrashFill } from 'react-icons/bs'
import RegModalDeleteChild from './modal/RegModalDeleteChild'
const RegCheckoutItem = () => {
    const [modalDeleteChild, setModalDeleteChild] = React.useState(false)
    const handleOpenModal = (e) => {
        e.preventDefault();
        setModalDeleteChild(!modalDeleteChild)
    }
    return (
        <>
            <div className="checkout__listitem">
                <div className="checkout__listitem__img">
                    <img src="https://demo.frontlinebusiness.com.ph/dev/ftc2021/ftc/images/angelica.jpg" alt="" />
                </div>
                <div className="checkout__listitem__info">
                    <div className="checkout__listitem__header">
                        <h3>Loverboy</h3>
                        <button onClick={handleOpenModal}><BsTrashFill /></button>
                    </div>

                    <div className="form__group">
                        <label htmlFor="">Donation Amount</label>
                        <ul>
                            <li><input type="radio" name="amount" /><span>$20</span></li>
                            <li><input type="radio" name="amount" /><span>$40</span></li>
                            <li><input type="radio" name="amount" /><span>$100</span></li>
                            <li><input type="radio" name="amount" /><span>$200 to fully sponsor the child</span></li>
                        </ul>
                        <p className="form__msg msg--error"> Require</p>
                    </div>

                </div>
            </div>
            {modalDeleteChild && <RegModalDeleteChild modal={{ modalDeleteChild, setModalDeleteChild }} />}
        </>
    )
}

export default RegCheckoutItem
