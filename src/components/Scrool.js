import React from "react";

const Scrool = (props) =>{
    return (
        <div style={{overflowY:'scroll', border:'0.03px solid black',height:'1080px'}}>{props.children}</div>
    );
}
export default Scrool;