import React from 'react';
import {useParams } from 'react-router-dom';

function Post() {
    const {id}  = useParams();
    return <>
        <div>
        Het postnummer is {id}
        </div>




        </>
}


export default Post;