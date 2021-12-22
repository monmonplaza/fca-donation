import React from 'react'
import { CgFontSpacing } from 'react-icons/cg';
import { FaAngleUp } from 'react-icons/fa'

const BacktoTop = () => {
    const [isShow, setShow] = React.useState(false);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            setShow(true);
        } else {
            setShow(false);
        }
    })
    return (
        <>
            <div className={isShow ? "backtotop show" : "backtotop "}>
                <a href="#header"><FaAngleUp /></a>
            </div>
        </>
    )
}

export default BacktoTop
