import React from "react";
import user from "../images/image.png"
const ContactCard = (props) => {
    const {id,name,email}=props.contact;
    return ( 
        <div className="item">
                <img className="ui avatar image" src={user} alt="user"/>
                <div className="content">
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </div>
                <i
                className="trash alternate icon"
                style={{color:'red'}}
                ></i>
                <br></br>
                
            </div>
    );
}
 
export default ContactCard;