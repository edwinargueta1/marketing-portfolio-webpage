import React, { useState, useEffect } from "react";

export default function PortfolioCard(props){

    const [fileType , setFileType] = useState(null);
    const [date, setDate] = useState(new Date(props.date).toUTCString().slice(0,16))

    useEffect(() => {
        function setFile(file){
            if(!typeof file === "string" || undefined == file){return};
            let extenSplit = file.split(".");
            console.log(extenSplit);
            if(extenSplit.length <= 1){
                console.error("File name does not have an extension.");
                return
            };
            
            let type = extenSplit[extenSplit.length-1];
            console.log(type);
            setFileType(type);
        }
        setFile(props.media);
    }, [])

    return(
        <div className="portfolioCardWrapper">
            <h4>{props.title}</h4>
            <p>{date != "Invalid Date" ? date : " "}</p>
            {fileType ? <img src={props.media}/> : <p>No Image</p>}
            <p>{props.description}</p>
        </div>
    )
}