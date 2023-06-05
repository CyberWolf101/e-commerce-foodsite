import { LocationOn, Mail, PermPhoneMsg } from '@mui/icons-material';
import React from 'react';

function Contact() {
    return (
        <div>
            <br />
            <div className="contact-imfo-box">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-0 my-md-2">
                            <div>
                                <i><PermPhoneMsg fontSize='large' /></i>
                            </div>
                            <div className="overflow-hidden">
                                <h4>Phone</h4>
                                <p className="lead">
                                    +234 814 874 9736
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 my-2">
                            <div>
                                <i><Mail fontSize='large' /></i>
                            </div>
                            <div className="overflow-hidden">
                                <h4>Email</h4>
                                <p className="lead">
                                    tobiolaleye39@gmail.com
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div>
                                <i ><LocationOn fontSize='large' /></i>
                            </div>
                            <div className="overflow-hidden">
                                <h4>Location</h4>
                                <p className="lead">
                                    800, Accord Estate, NG
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;