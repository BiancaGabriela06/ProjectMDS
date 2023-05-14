import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const NewAnswer = ({qId}) => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        id_question: qId,
        content: "",
    });

    const handleChange = (e) => {
        setInputs((prev) => ({...prev, [e.target.name]: e.target.value}));
    }

    const handleSubmit = () => {
        try{
            axios.post("http://localhost:3001/forum/newanswer", inputs);
        }catch(err){
            console.log(err)
      }
    };

    return (
        <div>
            <form>
                <div className="card post-editor">
                    <div className="card-body">
                        <label>Answer</label>
                        <input required type="text" id="content" name="content" className="form-control post-editor-input" onChange = {handleChange}/>
                        {/* <textarea className="form-control post-editor-input" /> */}
                        <button onClick={handleSubmit} className="btn btn-success post-editor-button">SEND</button>
                    </div>
                </div>
            </form>
            <br />
            <br />
            <br />
        </div>
    );
};

export default NewAnswer;