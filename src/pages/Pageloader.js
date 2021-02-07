import React, { Component } from 'react';

class Pageloader extends Component {
    render() {
        return (
            <div>
                {/* <!-- Page Loader
========================================================= --> */}
                <div className="loader-container" id="page-loader">
                    <div className="loading-wrapper">
                        <div className="loader-animation" id="loader-animation">
                            <span className="loader"><span className="loader-inner"></span></span>
                        </div>
                        {/* <!-- Edit With Your Name --> */}
                        <div className="loader-name" id="loader-name">
                            <strong>Goku</strong>
                        </div>
                        {/* <!-- /Edit With Your Name --> */}
                        {/* <!-- Edit With Your Job --> */}
                        <p className="loader-job" id="loader-job">Drip Goku</p>
                        {/* <!-- /Edit With Your Job --> */}
                    </div>
                </div>
                {/* <!-- /End of Page loader
========================================================= --> */}
            </div>
        );
    }
}

export default Pageloader;