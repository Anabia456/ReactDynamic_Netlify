import React from "react";
import "../styles/bootstrap.css";
import "../styles/contact.css";
import * as AiIcons from 'react-icons/ai'

function Contact() {
    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        <div className="container">
            <div class="row g-3 mx-auto">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                <div class="row g-3 mx-auto">
                    <div class="col-md-6">
                        <div class="form-outline">
                                <input style={{backgroundColor: "black",border: "1px solid #fff",height: "40px",color: "#fff",}}type="text"placeholder="Enter Name"className="input-control mt-2 w-100"/>
                            <span id="fn"></span>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-outline">
                                <input style={{backgroundColor: "black",border: "1px solid #fff",height: "40px",color: "#fff",}}type="text"placeholder="Enter Name"className="input-control mt-2 w-100"/>
                            <span id="fn"></span>
                        </div>
                    </div>
                </div>
                <div class="row g-3 mt-3 mx-auto">
                    <div class="col-12">
                        <div class="form-outline">
                            <textarea placeholder="Enter Message" style={{backgroundColor: "black",border: "1px solid #fff",color: "#fff",}} id="message" cols="90" rows="10" class="form-control"></textarea>
                        </div>
                    </div>
                </div>
                <button className="btn-send p-3 mt-3">Send <AiIcons.AiOutlineSend/></button>
                <div className="col-md-2"></div>
            </div>
        </div>
        </div>
            <br />
            <br />
            <br />
        </div>
    );
}

export default Contact;
