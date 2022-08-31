import React from 'react'

const GamingLibrary = () => {
    return (
        <>
            {/* ***** Gaming Library Start ***** */}
            <div className="gaming-library">
                <div className="col-lg-12">
                    <div className="heading-section">
                        <h4><em>Your Gaming</em> Library</h4>
                    </div>
                    <div className="item">
                        <ul>
                            <li><img src="assets/images/turf5.jpg" alt className="templatemo-item" /></li>
                            <li><h4>DLF Goaf & Club</h4><span>Pune</span></li>
                            <li><h4>Date Added</h4><span>24/08/2036</span></li>
                            <li><h4>Hours Played</h4><span>634 H 22 Mins</span></li>
                            <li><h4>Currently</h4><span>Downloaded</span></li>
                            <li><div className="main-border-button border-no-active"><a href="#">Donwloaded</a></div></li>
                        </ul>
                    </div>
                    <div className="item">
                        <ul>
                            <li><img src="assets/images/turf1.jpg" alt className="templatemo-item" /></li>
                            <li><h4>Town Turf</h4><span>Indore</span></li>
                            <li><h4>Date Added</h4><span>22/06/2036</span></li>
                            <li><h4>Hours Played</h4><span>740 H 52 Mins</span></li>
                            <li><h4>Currently</h4><span>Downloaded</span></li>
                            <li><div className="main-border-button"><a href="#">Donwload</a></div></li>
                        </ul>
                    </div>
                    <div className="item last-item">
                        <ul>
                            <li><img src="assets/images/turf2.jpg" alt className="templatemo-item" /></li>
                            <li><h4>Turf Club</h4><span>Mumbai</span></li>
                            <li><h4>Date Added</h4><span>21/04/2036</span></li>
                            <li><h4>Hours Played</h4><span>892 H 14 Mins</span></li>
                            <li><h4>Currently</h4><span>Downloaded</span></li>
                            <li><div className="main-border-button border-no-active"><a href="#">Donwloaded</a></div></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="main-button">
                        <a href="profile.html">View Your Library</a>
                    </div>
                </div>
            </div>
            {/* ***** Gaming Library End ***** */}

        </>
    )
}

export default GamingLibrary