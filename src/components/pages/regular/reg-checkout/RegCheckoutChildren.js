import React from 'react'
import FrontRegHeader from '../../../header/frontend/FrontRegHeader'
import RegBanner from '../RegBanner'
import RegFooter from '../RegFooter'
import RegCallToAction from '../RegCallToAction'
import RegCheckoutItem from './RegCheckoutItem'
import { Link } from 'react-router-dom'
import RegModalClearList from './modal/RegModalClearList'

const RegCheckoutChildren = () => {
    const [clearList, setclearList] = React.useState(false);
    const handleClearList = () => {
        setclearList(!clearList)
    }
    return (
        <>
            <FrontRegHeader />
            <RegBanner title={'Sponsorship Summary'} />

            <div className="checkout">
                <div className="container">
                    <div className="checkout__wrapper">
                        <ul className="checkout__header">
                            <li><button onClick={handleClearList}>Clear List</button></li>
                            <li><Link to="/children-list">View All Kids</Link></li>
                        </ul>
                        <form action="">
                            <div className="checkout__body">
                                <RegCheckoutItem />
                                <RegCheckoutItem />
                                <RegCheckoutItem />
                                <RegCheckoutItem />
                                <RegCheckoutItem />
                                <RegCheckoutItem />

                            </div>

                            <ul className="checkout__footer">
                                <li>Total</li>
                                <li className="total"> $20.00</li>
                            </ul>
                        </form>
                    </div>


                </div>
            </div>
            {clearList && <RegModalClearList modal={{ clearList, setclearList }} />}
            <RegCallToAction />
            <RegFooter />
        </>
    )
}

export default RegCheckoutChildren

