import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'
// import SimpleImageSlider from "react-simple-image-slider";

function Home(){
return(<body>
    <div className="container"  style={{ backgroundColor: 'aliceblue', }}>
        <div className="row">
            <Navbar/>
           
            <div  class="d-flex justify-content-end">
            <Link to="/appoint" className='btn btn-success'>Book Now</Link>   
             </div>
             
              {/* <ThemedButton name="bruce" type="primary" style={styles.button}>Primary</ThemedButton> */}
            <div>
        <p><h1 className="fw-bold mb-2 text-uppercase" style={{ color: 'green' }}><img src='https://www.vivahealth.com/medicare/Assets/png/hero-features-pcp.png' alt="ff" width={110} height={100}></img><br></br>UK MEDICARE<h3 className="fw-bold mb-2 text-capitalize" style={{ color: 'black' }}>Multispeciality Hospital</h3> </h1></p>
       </div>
      
       <h3>Note:</h3>
        <p  style={{ color: 'red' }}>If you are current user your medic fees is 300 either 500</p>
        <p>Thank you</p>                     
       
       
           <div class="d-flex justify-content-center" >
           <Link to="/login" className='btn btn-primary'>Current user</Link>   
        
     

           </div>
           
           <div class="d-flex justify-content-center" >
           <p>or</p>
                
            </div>
            
            <div class="d-flex justify-content-center" >
            <Link to='/Reg'>Register now</Link>
            {/* <Link to="/reg"></Link>   */}
       
               
             </div>
           
             <div>
                <img src='https://assets.entrepreneur.com/content/3x2/2000/20180122044819-shutterstock-262816118.jpeg' alt="gg" width={1100} height={350}></img>
               

             </div>
             &nbsp; <div>
                <p>www.UK Medicare.com<br></br>All Rights Reserved.</p>
               
             </div>
           <div>
                
             </div>

                       
                   

          
        </div>
    </div>
</body>)}
export default Home