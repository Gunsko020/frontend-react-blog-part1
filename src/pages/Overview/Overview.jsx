import React from 'react';
import posts from '../../constants/data.json';

const Overview = () => {
    console.log(posts)
    return (
        <div>
            <h2>Overview</h2>
            {posts.map((info)=>{
                return (<div>
                    <p>{info.id}</p>
                    <p>{info.title}</p>
                </div>)
            })}


        </div>
    );
};

export default Overview;