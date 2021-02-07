import React from 'react';
import Pageloader from './Pageloader';
import Mainmenu from './Mainmenu';
import Section from './Section';
import Resume from './Resume';
import Skills from './Skills';
import Portofolio from './Portofolio';
import Contact from './Contact';
import Blog from './Blog';

class Home extends React.Component {
    render() {
        return (
            <div>
                {/* <!-- Main Content
================================================== --> */}
                <section id="body" className="">
                    <div className="container">
                        <Pageloader />
                        <Mainmenu />
                        <Section />
                        <Resume />
                        <Skills />
                        <Portofolio />
                        <Blog />
                        <Contact />
                    </div>
                </section>
                {/* <!-- /Main Content
================================================== --> */}

                {/* <!-- Contact Form - Ajax Messages
========================================================= --> */}
                {/* <!-- Form Sucess --> */}
                <div className="form-result modal-wrap" id="contactSuccess">
                    <div className="modal-bg"></div>
                    <div className="modal-content">
                        <h4 className="modal-title"><i className="fa fa-check-circle"></i> Success!</h4>
                        <p>Your message has been sent to us.</p>
                    </div>
                </div>
                {/* <!-- /Form Sucess --> */}

                {/* <!-- form-error --> */}
                <div className="form-result modal-wrap" id="contactError">
                    <div className="modal-bg"></div>
                    <div className="modal-content">
                        <h4 className="modal-title"><i className="fa fa-times"></i> Error</h4>
                        <p>There was an error sending your message.</p>
                    </div>
                </div>
                {/* <!-- /form-error --> */}
                {/* <!-- Contact Form - Ajax Messages
========================================================= --> */}
            </div >
        );
    }
}

export default Home;