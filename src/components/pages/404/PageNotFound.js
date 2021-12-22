import React from 'react'
import FrontRegHeader from '../../header/frontend/FrontRegHeader'
import RegBanner from '../regular/RegBanner'
import RegFooter from '../regular/RegFooter'

const PageNotFound = () => {
    return (
        <>
            <div className="d-flex">
                <div>
                    <FrontRegHeader />
                    <RegBanner title={"General Donation"} />
                    <div className="pagenotfound">
                        <div className="container">
                            <div className="pagenotfound__wrapper">
                                <svg id="Capa_1" enableBackground="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><g><g><g><g><g><g><g><g><g><g><g><path d="m54.613 27.272v457.456c0 15.062 12.21 27.272 27.272 27.272h348.229c15.062 0 27.272-12.21 27.272-27.272v-364.454l-120.273-120.274h-255.227c-15.062 0-27.273 12.21-27.273 27.272z" fill="#eaecf0" /><path d="m430.114 512c15.062 0 27.272-12.21 27.272-27.272v-364.454l-93.666-93.666v112.718c0 11.381 9.226 20.606 20.606 20.606h19.148v352.068z" fill="#d3d7de" /><path d="m337.113 0 120.274 120.274h-99.667c-11.38 0-20.606-9.226-20.606-20.606v-99.668z" fill="#3e9bd0" /></g></g></g></g></g></g><g><path d="m259.668 77.28h-155.567c-4.267 0-7.726-3.459-7.726-7.726 0-4.268 3.459-7.726 7.726-7.726h155.567c4.267 0 7.726 3.459 7.726 7.726s-3.459 7.726-7.726 7.726z" fill="#3e9bd0" /></g><g><path d="m259.668 128.106h-155.567c-4.267 0-7.726-3.459-7.726-7.726 0-4.268 3.459-7.726 7.726-7.726h155.567c4.267 0 7.726 3.459 7.726 7.726s-3.459 7.726-7.726 7.726z" fill="#3e9bd0" /></g></g><path d="m387.154 429.994h-262.308c-11.457 0-20.745-9.288-20.745-20.745v-184.278c0-11.457 9.288-20.745 20.745-20.745h262.309c11.457 0 20.745 9.288 20.745 20.745v184.279c-.001 11.456-9.289 20.744-20.746 20.744z" fill="#3e9bd0" /><path d="m387.154 204.226h-33.507v225.768h33.507c11.457 0 20.745-9.288 20.745-20.745v-184.278c0-11.457-9.288-20.745-20.745-20.745z" fill="#3586b4" /></g></g></g><g fill="#eaecf0"><path d="m186.728 345.847h-36.141c-3.085 0-5.436-2.204-5.436-5.729 0-1.029.294-2.204.882-3.232l35.553-70.077c1.616-3.086 4.261-4.261 6.758-4.261 2.938 0 7.786 2.351 7.786 6.023 0 .735-.294 1.47-.734 2.351l-30.264 60.381h21.596v-20.275c0-3.672 3.82-5.142 7.786-5.142 3.82 0 7.786 1.47 7.786 5.142v20.275h7.199c3.526 0 5.289 3.673 5.289 7.345 0 3.526-2.497 7.199-5.289 7.199h-7.199v18.952c0 3.379-3.966 5.142-7.786 5.142-3.966 0-7.786-1.763-7.786-5.142z" /><path d="m223.164 338.06v-42.752c0-23.8 14.251-32.762 32.908-32.762 18.511 0 33.055 8.962 33.055 32.762v42.752c0 23.8-14.544 32.762-33.055 32.762-18.657 0-32.908-8.962-32.908-32.762zm50.391-42.751c0-12.929-6.611-18.952-17.483-18.952-11.018 0-17.336 6.023-17.336 18.952v42.752c0 12.929 6.317 18.952 17.336 18.952 10.872 0 17.483-6.023 17.483-18.952z" /><path d="m338.494 345.847h-36.14c-3.086 0-5.436-2.204-5.436-5.729 0-1.029.294-2.204.882-3.232l35.553-70.077c1.616-3.086 4.26-4.261 6.758-4.261 2.938 0 7.786 2.351 7.786 6.023 0 .735-.294 1.47-.734 2.351l-30.264 60.381h21.596v-20.275c0-3.672 3.819-5.142 7.786-5.142 3.82 0 7.787 1.47 7.787 5.142v20.275h7.199c3.526 0 5.289 3.673 5.289 7.345 0 3.526-2.497 7.199-5.289 7.199h-7.199v18.952c0 3.379-3.967 5.142-7.787 5.142-3.967 0-7.786-1.763-7.786-5.142v-18.952z" /></g></g></g></svg>
                                <h3>Oooops! Page Not Found</h3>
                                <p>The page you are looking is either missing, moved or deleted. Don't worry you can go back to the homepage using the button below</p>
                                <a href="https://www.facethechildren.org" className="btn btn--blue">Homepage </a>
                            </div>
                        </div>
                    </div>
                </div>
                <RegFooter />
            </div>
        </>
    )
}

export default PageNotFound
