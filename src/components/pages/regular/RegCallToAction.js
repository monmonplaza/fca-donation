import React from 'react';
import { Link } from 'react-router-dom';

const RegCallToAction = () => {
    return (
        <>
            <section className="call__to__action">
                <div className="call__to__action__wrapper">
                    <h2>Need Assistance?</h2>
                    <Link to="/" className="btn btn--blue btn--sm">Contact Us</Link>
                </div>
            </section>
        </>
    )
}

export default RegCallToAction
