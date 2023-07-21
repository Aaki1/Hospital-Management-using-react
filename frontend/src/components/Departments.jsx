import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Navbar'



function Departments(){
    return(
        <body>
            <div class="container" style={{ backgroundColor: 'aliceblue', }}>
                <div class="row">
                    <Navbar/>
                <div class="d-flex justify-content-start" >
                <h3 className="fw-bold mb-2 " style={{ color: 'black' }}>Departments:</h3>
                </div>
                
                </div>

            </div>

        </body>
       
    )
}
export default Departments