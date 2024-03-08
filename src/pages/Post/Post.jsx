import React, {useState} from 'react';
import {useParams } from 'react-router-dom';
import Input from "../../components/Input.jsx";
import css from "../Post/Post.css"
import datehelper from "../../helpers/datehelper.jsx";
import posts from "/src/constants/data.json"
import ReadTime from "../../helpers/ReadTime.jsx";
import {useNavigate} from "react-router-dom";





function Post() {

    const navigate = useNavigate();

    function handleSubmit (e){
        e.preventDefault()
        console.log(
            `Title : ${title},`,
            `Subtitle : ${subtitle},`,
            `Author : ${author},`,
            `Content : ${content},`,
            `Created : ${d.toISOString()}`,
            `Readtime : ${ReadTime(content)}`,
            `Comments : 0`,
            `Shares : 0`
            )

        navigate('/overview')
    }
    const d = new Date()

    const [title,setTitle] = useState("")
    const [subtitle, setSubtitle] = useState("")
    const [author,setAuthor] = useState("")
    const [content,setContent] = useState("")





    const {id}  = useParams();
    return <>
        <form onSubmit={handleSubmit}>
            <section className="post-section">
                <Input
                    type="text"
                    name="title"
                    label="Title"
                    value={title}
                    changeHandler={setTitle}
                    required
                />
                <Input
                    type="text"
                    name="subtitle"
                    label="Subtitle"
                    value={subtitle}
                    changeHandler={setSubtitle}
                    required
                />
                <Input
                    type="text"
                    name="author"
                    label="Author"
                    value={author}
                    changeHandler={setAuthor}
                    required
                    />
                <label htmlFor="details-comments">
                    Comments :
                </label>
                <textarea
                    id="details-textarea"
                    name="comments"
                    minLength={300}
                    maxLength={2000}
                    cols="25"
                    rows="5"
                    placeholder="Minimal 300 words and maximal 2000 words"
                    value={content}
                    onChange={(e)=>setContent(e.target.value)}
                    required
                >
                </textarea>
                <button
                    type="submit">
                    Verzenden
                </button>
            </section>
        </form>
        </>
}


export default Post;