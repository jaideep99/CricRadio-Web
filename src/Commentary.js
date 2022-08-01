import React from "react";
import PodcastsIcon from "@mui/icons-material/Podcasts";

const Commentary = (props) =>{
    const {selection} = props;
    const comm = JSON.stringify(selection.comm)
    return(
        <div className="comm-content">
            <header className="header-left">
                <div style={{
                    alignItems: 'center',
                    color: 'white',
                }}>
                    <div>
                        <span style={{fontFamily:"Poppins",fontWeight:"700",color:"#E9EDEF",fontSize:"14px"}}>{selection.teams}</span>
                    </div>
                    <div>
                        <span style={{fontFamily:"Poppins",fontWeight:"400",color:"#D1D7DB",fontSize:"9px"}}>{selection.details}</span>
                    </div>
                </div>
            </header>

            <body style={{padding:"8px",height:"100%",backgroundColor:"#0b141a"}}>
            <div className="scores">
                <text>{comm}</text>
            </div>
            </body>
        </div>
    )

}

export default Commentary;