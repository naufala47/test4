import React, { Component } from 'react';

class Section extends Component {
    render() {
        return (
            <div>
                {/* <!-- SECTION: vCard Body  --> */}
                <div className="section-vcardbody section-home" id="section-home">
                    {/* <!-- Profile pic--> */}
                    <div className="vcard-profile-pic">
                        <img src="assets/img/profil.jpg" id="profile2" alt="" />
                        <img src="assets/img/profil.jpg" id="profile1" className="profileActive" alt="" />
                    </div>
                    {/* <!-- /Profile pic --> */}
                    {/* <!-- Description --> */}
                    <div className="vcard-profile-description">
                        {/* <!-- Profile title --> */}
                        <h1 className="profile-title">Hi, i'm <span className="color1">Goku</span></h1>
                        <h2 className="profile-subtitle">Dat Drip</h2>
                        {/* <!-- /Profile Title --> */}
                        {/* <!-- Description Text --> */}
                        <hr className="hr1" />
                        <div className="vcard-profile-description-text">
                            <p>Founder of Drip Goku. Professional Drip Goku. Sometimes works as a Drip Goku.</p>
                        </div>
                        {/* <!--/ Description Text --> */}
                        {/* <!-- Description feature --> */}
                        <div className="vcard-profile-description-feature">
                            {/* <!-- item --> */}
                            <div className="vcard-profile-description-ft-item">
                                <p>email:  naufala47@gmail.com / phone +62 85156517259</p>
                            </div>
                            {/* <!-- item --> */}
                        </div>
                        {/* <!-- /Description feature -->		 */}
                    </div>
                    {/* <!-- /Description --> */}
                    {/* <!-- Footer --> */}
                    <div className="vcard-footer">
                        {/* <!-- Social Icons --> */}
                        <div className="footer-social-icons">
                            <a href="#"><i className="fa fa-instagram"></i></a>
                            <a href="#"><i className="fa fa-facebook"></i></a>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                            <a href="#"><i className="fa fa-linkedin"></i></a>
                            <a href="#"><i className="fa fa-youtube"></i></a>
                        </div>
                        {/* <!-- /Social Icons --> */}
                    </div>
                </div>
                {/* <!-- /SECTION: vCard Body  --> */}

            </div>
        );
    }
}

export default Section;