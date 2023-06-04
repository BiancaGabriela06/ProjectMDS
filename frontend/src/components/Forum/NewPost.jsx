import React, {useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

const NewPost = () => {
    const currentUser = JSON.parse( localStorage.getItem("currentUser"))
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        title: "",
        content: "",
        username: currentUser,
    });

    const handleChange = (e) => {
        setInputs((prev) => ({...prev, [e.target.name]: e.target.value}));
    }

    // add the new question in database
    const handleSubmit = () => {
        try{
            axios.post("http://localhost:3001/forum/newpost", inputs);
            navigate("/forum");
        }catch(err){
            console.log(err)
      }
    };

    return (
        <div>
            <div className="card post-body">
                <div className="card-body" style={{backgroundColor: '#2f3a56', color: "#ddd"}}>
                    <strong>Hello, leave your question here!</strong>
                    <h1>{currentUser}</h1>
                </div>
            </div>
            <form>
                <div className="card post-editor">
                    <div className="card-body">
                        <label>Title</label>
                        <input required type="text" id="title" name="title" className="form-control post-editor-input" onChange = {handleChange}/>
                        
                        <label>Question</label>
                        <input required type="text" id="content" name="content" className="form-control post-editor-input" onChange = {handleChange}/>
                        <button onClick={handleSubmit} className="btn btn-success post-editor-button">Post</button>
                    </div>
                </div>
            </form>
            <br />
            <br />
            <br />
        </div>
    );
};

export default NewPost;