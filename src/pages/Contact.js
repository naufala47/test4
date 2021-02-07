import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div>
                {/* <!-- SECTION: CONTACT--> */}
                <div className="section-vcardbody section-page" id="page-contact">
                    <div className="section-contact">

                        {/* <!-- Section title --> */}
                        <h2 className="section-title">Contact</h2>
                        {/* <!-- /Section title --> */}

                        <div className="map">
                            <div className="map-overlay"></div>
                            <iframe src="https://maps.google.com/maps?q=Planet%20Namex&t=&z=13&ie=UTF8&iwloc=&output=embed" height="250" style={{ border: 0 }} allowFullScreen></iframe>
                        </div>

                        {/* <!-- Contact infos -->                  */}
                        <div className="contact-infos">
                            <h4 className="contact-subtitle-1"><i className="fa fa-map"></i>&nbsp;   Address</h4>
                            <p>58N 018, 439 , East District , Satan City </p>
                            <h4 className="contact-subtitle-1"><i className="fa fa-phone-square"></i>&nbsp; Phone</h4>
                            <p>+200 3344212838</p>
                            <h4 className="contact-subtitle-1"><i className="fa fa-envelope"></i>&nbsp; Mail</h4>
                            <p>yamcha@gmail.com</p>
                        </div>
                        {/* <!-- /Contact infos -->  */}

                        {/* <!-- Contact form --> */}
                        <h4 className="contact-subtitle-1"><i className="fa fa-paper-plane-o"></i>&nbsp; Send Me a Message</h4>
                        <form id="contactForm" method="post" className="form">
                            {/* <!-- Form Field --> */}
                            <div className="form-group">
                                <input className="form-control required" id="name" name="name" placeholder="Name" type="text" required />
                            </div>
                            {/* <!-- /Form Field --> */}
                            {/* <!-- Form Field --> */}
                            <div className="form-group">
                                <input className="form-control required" id="email" name="email" placeholder="Email" type="email" required />
                            </div>
                            {/* <!-- /Form Field --> */}
                            {/* <!-- Form Field --> */}
                            <div className="form-group">
                                <input className="form-control required" id="subject" type="text" name="subject" placeholder="Subject" required />
                            </div>
                            {/* <!-- /Form Field --> */}
                            {/* <!-- Form Field --> */}
                            <div className="form-group">
                                <textarea className="form-control required" id="message" name="message" placeholder="Message" rows="5" required></textarea>
                            </div>
                            {/* <!-- /Form Field --> */}
                            {/* <!-- Form Field --> */}
                            <div className="form-group">
                                <input type="submit" className="btn btn-default form-send" value="Send!" />
                            </div>
                            {/* <!-- /Form Field --> */}
                        </form>
                        {/* <!-- /Contact Form --> */}

                    </div>
                </div>
                {/* <!-- /SECTION: CONTACT  -->	 */}
            </div>
        );
    }
}

export default Contact;