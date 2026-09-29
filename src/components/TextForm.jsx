import React, { useState } from 'react';




export default function TextForm(props) {
    
    const [text, setText] = useState('');
    const handleOnChange = (event) => {
        setText(event.target.value);
    };


    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    };

    const handleLoClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    };

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text has been cleared!", "success");
    };


    const handleSpeak = () => {
        if (window.speechSynthesis.speaking) {
            window.speechSynthesis.cancel();
        } else {
            if (text.trim() === "") return;
            let msg = new SpeechSynthesisUtterance();
            msg.text = text;
            msg.pitch = 0.6;
            msg.rate = 0.8;
            window.speechSynthesis.speak(msg);
            props.showAlert("Reading text aloud...!", "success");
        }
    };

    return (
        <>      
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1 className='mb-4'>  {props.heading}</h1> 
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label"></label>
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#36454f' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleSpeak}>Speak Text</button>
            </div>
            <div className='container ' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").filter((element) => element.length !== 0).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element) => element.length !== 0).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview."}</p>
            </div>

        </>
    )
}
