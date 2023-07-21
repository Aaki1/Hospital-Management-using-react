import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Navbar'


function Contact(){
    return(
        <body>
            <div class="container" style={{ backgroundColor: 'aliceblue', }}>
                <div class="row">
                    <Navbar/>
                <div class="d-flex justify-content-start" >
                <h3 className="fw-bold mb-2 " style={{ color: 'black' }}>Contact:</h3>
                </div>
                </div>
                <div>
             <img src='https://www.sakrapremiumclinic.com/assets/images/contact-us-mobile-banner.jpg' alt="gg" width={1100} height={400}></img>
             
                </div><br></br>
                <div class="d-flex justify-content-center">
                   <p><h3>Contact:</h3> 04322-333232,04322-333234</p>
                </div>

                <div class="d-flex justify-content-center">
                   <p><h3>Mail:</h3>UKMedicare@gmail.com</p>
                </div>

                <div class="d-flex justify-content-center">
                   <p> <h3>Address: <br></br> </h3>
                        UKMedicare pvt Ltd,<br></br>
                                 TS.NO.5542, South 4th Street,<br></br>
                                 Pudukottai,<br></br>
                                 Tamil Nadu - 622 001.
                                 </p>
                                
                   
                </div>
                <div class="d-flex justify-content-center">
                   <p><h3>Whatsapp:</h3> 9943567703</p>
                </div>
               <div  class="d-flex justify-content-center">
                <div style={{ backgroundColor: 'gray', }} >
                <h2> Contact:</h2>

        <form id="contact-form" method="POST">
            <div>
          <label htmlFor="name">Full Name:</label>
          
          <input name="name" placeholder="Enter full name..." type="text" />
          </div>
          &nbsp;<div>
          <label htmlFor="email">Email:</label>
          <input name="email" placeholder="Enter email..." type="email" />
          </div>
         &nbsp; <div>
          <label name="message">Message:</label>
          </div>
          <div>
          <textarea
            size="3"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          </div>
          <div>
          <button className="btn btn-dark"> send</button>
          </div>
        </form>
                </div>
                </div>
                &nbsp; <div>
                <p>www.UK Medicare.com<br></br>All Rights Reserved.</p>
               
             </div>

            </div>

        </body>
       
    )
}
export default Contact