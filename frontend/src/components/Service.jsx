import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Navbar'
import ReactDOM from 'react-dom';



function Service(){
    return(
        
        <body>
            <div class="container" style={{ backgroundColor: 'aliceblue', }}>
                <div class="row">
                    <Navbar/>
                <div class="d-flex justify-content-start" >
                <h3 className="fw-bold mb-2 " style={{ color: 'black' }}>Service:</h3>
                </div>
                <div>
             <img src='https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?cs=srgb&dl=pexels-pixabay-247786.jpg&fm=jpg' alt="gg" width={1100} height={440}></img>
             
                </div>

                <div class="d-flex justify-content-start">
                    <h4>Our Services</h4>
                    &nbsp; &nbsp;<div className="leftside">
                 <br></br> <ul>
                         &nbsp;<li>Microbiology</li>
                         &nbsp;<li>Radiology</li>
                         &nbsp; <li>Medical Gastroenterologyy</li>
                         &nbsp; <li>Electrophysiology</li>
                         &nbsp; <li>Adult Kidney Transplant</li>
                         &nbsp; <li>Diabetology</li>
                         &nbsp; <li>Gynaecology oncology</li>
                         &nbsp; <li>REproductive medicine</li>
                         &nbsp; <li>Blood bank</li>
                         &nbsp;<li>Emergency medicine</li>
                       
                      
                    </ul>
                    </div>
                 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <div className="center">
                        <ul>
                        <br></br>  &nbsp;  <li>CT Scan</li>
                          &nbsp; <li>Medical labs</li>
                          &nbsp;  <li>Pathology</li>
                          &nbsp;  <li>Plastic surgery</li>
                          &nbsp; <li>Psychology</li>
                          &nbsp;  <li>Spine surgery</li>
                          &nbsp; <li> NICU and PICU</li>
                          &nbsp; <li>Heart Transplant</li>
                          &nbsp; <li>Rheumatology</li>
                          &nbsp;  <li>Nuclear Medicine</li>
                        
                        </ul>

                    </div>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <div className="rightside">
                        <ul>
                          <br></br>  &nbsp; <li>Nutrition</li>
                         &nbsp; <li>Neurosurgery</li>
                         &nbsp; <li>Genetics</li>
                         &nbsp; <li>Thoracic Surgery</li>
                         &nbsp; <li>Cosmetology</li>
                         &nbsp; <li>Infection Diseases</li>
                         &nbsp; <li>Anaesthesia</li>
                         &nbsp; <li>Haematology</li>
                         &nbsp; <li>Oncology</li>
                         &nbsp; <li>Dental</li>
                         
                        </ul>


                    </div>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<div className="rightside">
                        <ul>
                       <br></br> &nbsp; <li>Paediatric ENT</li>
                         &nbsp; <li>Neonatology</li>
                         &nbsp; <li>Neurology</li>
                         &nbsp; <li>Pulmonology</li>
                         &nbsp; <li>Critical care</li>
                         &nbsp; <li>Orthopaedics</li>
                         &nbsp; <li>Cardiac</li>
                         &nbsp; <li>General Surgery</li>
                         &nbsp; <li>Endocrinology</li>
                         &nbsp; <li>Breast cancer</li>

                        </ul>
                    </div>
                    
                   
                   
                </div>
                &nbsp; <div>
                <p>www.UK Medicare.com<br></br>All Rights Reserved.</p>
               
             </div>
                
                </div>

            </div>

        </body>
       
    )
}
export default Service