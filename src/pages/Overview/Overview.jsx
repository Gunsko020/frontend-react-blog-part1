import React from 'react';
import posts from '../../constants/data.json';
import {Link} from "react-router-dom";
import datehelper from "../../helpers/datehelper.jsx";

const Overview = () => {
    console.log(posts)
    return (

        <div>
            <h2>Overview</h2>
            {posts.map((info)=>{
                return (<div>
                    <h3>{info.title}</h3>
                    <h5>{info.subtitle}</h5>
                    <p>Geschreven door {info.author} op {datehelper(info.created)}</p>
                    <p>{info.content}</p>
                    <p>{info.comments} reacties -  {info.shares} gedeeld</p>
                    <p><Link to="/overview">/Terug naar overzichtspagina</Link></p>
                </div>)
            })}


        </div>
    );
};

export default Overview;