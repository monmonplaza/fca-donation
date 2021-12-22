import React from 'react'
import RegMsgbody from './RegMsgbody'
import RegMsgFooter from './RegMsgFooter'
import RegMsgHeader from './RegMsgHeader'


const RegMsgEmailVerify = () => {
    return (
        <>
            <div className="flex__wrap">
                <div>
                    <RegMsgHeader />
                    <RegMsgbody
                        header={'Donation Success '}
                        body={' Thank you for your Generosity'}
                    />
                </div>
                <RegMsgFooter />
            </div>
        </>
    )
}

export default RegMsgEmailVerify
