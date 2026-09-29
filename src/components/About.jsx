import React, { useState } from 'react'

export default function About(props) {

  // const [myStyle, setMyStyle] = useState({
  //   color: 'black',
  //   backgroundColor: 'white'

  // })

  // const [btntext, setBtnText] = useState("Enable Dark Mode")

    let myStyle = {
      color: props.mode === 'dark'? 'white': '#36454f',
      backgroundColor: props.mode === 'dark'? '#36454f': 'white',
      
    }
  return (
    <div className='container' style={myStyle}>
      <div className="container my-3">
        <h1 className='my-3'>About Us</h1>
        <div className="accordion" id="accordionExample" style={myStyle}>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyze your text</strong>
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
                Cast a spell on your prose with WickedWords. In a single click, summon precise character counts, banish messy clutter, estimate reading time, 
                  and transform raw text into wickedly sharp writing.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free to Use</strong>
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
                No price tag, no hidden traps. Access every text-transforming 
                  feature endlessly—100% free with zero subscriptions required.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser Compatible</strong>
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
                Works seamlessly across all web realms. WickedWords runs smoothly on Chrome,
                   Firefox, Safari, or Edge, on both desktop and mobile.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}