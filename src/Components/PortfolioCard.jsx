import React, { useState, useEffect } from "react";

export default function PortfolioCard(props){

    const [fileType , setFileType] = useState(null);
    const [date, setDate] = useState(new Date(props.date).toUTCString().slice(0,16));

    useEffect(() => {
        function setFile(file){
            if(!typeof file === "string" || undefined == file){return};
            let extenSplit = file.split(".");
            if(extenSplit.length <= 1){
                console.error("File name does not have an extension.");
                return
            };
            let acceptedFileType = new Set(["png", "jpg"," jpeg", "pdf"]);
            let type = extenSplit[extenSplit.length-1];
            if(!acceptedFileType.has(type)){
                console.error(`Not valid file type. (${type})`)
                return;
            }
            setFileType(type);
        }
        setFile(props.media);
    }, [])


    //Console log
    useEffect(() =>{
        console.log(props.title, props.media, fileType, date)
    }, [fileType, date] )

    return(
        <div className="portfolioCardWrapper">
            <h4>{props.title}</h4>
            <p>{date != "Invalid Date" ? date : ""}</p>
            {fileType ? 
                <div className="portfolioCardMedia">
                    {fileType === "png" || fileType === "jpg" ? <img src={props.media}/> : ""}
                    {fileType === "pdf" ? <iframe src={props.media} /> : ""}
                </div>
            
            : <p>No Image</p>}
            <p>{props.description}</p>
        </div>
    )
}