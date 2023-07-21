import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Axios from 'axios'


function Reg(){
    const [name,setName]=useState("")
    const [age,setAge]=useState(0)
    const [gender,setGender]=useState("")
    const [phn,setPhn]=useState("")
    const [addr,setAddr]=useState("")
   
   

    const addDetail = () => {
        Axios.post("http://localhost:3000/Reg",
        {
            name:name,
            age:age,
            gender:gender,
            phn:phn,
            addr:addr
            
           
        }).then(()=>{
            console.log("Inserted Successfully")
        })
    }

    return(
        <body>
            <h1 class="my-5" >Add Your Details</h1>
            <div className="container"  >
                <div className="d-flex justify-content-center" >
                    <div className="row">
                        <form onSubmit={addDetail}>
                            <div class="form-group">
                                <label for="name">Name:</label>
                                <input type="text" class="form-control" placeholder="Enter name" onChange={(e)=>{setName(e.target.value)}} />
                            </div>
                            <div class="form-group">
                                <label for="age">Age:</label>
                                <input type="text" class="form-control"  onChange={(e)=>{setAge(e.target.value)}} />
                            </div>
                            <div class="form-group-check" onChange={(e)=>{setGender(e.target.value)}}>
                                <label for="gender">Gender:</label>
                                <input type="radio" class="form-control-check" value="Male" name="gender" />Male
                                <input type="radio" class="form-control-check" value="Female" name="gender" />Female
                            </div>
                            <div class="form-group">
                                <label for="phn">Phone no:</label>
                                <input type="text" class="form-control" placeholder="Enter phone no" onChange={(e)=>{setPhn(e.target.value)}} />
                            </div>
                            <div class="form-group">
                                <label for="addr">Address:</label>
                                <textarea size="5" class="form-control" placeholder="Enter your address" onChange={(e)=>{setAddr(e.target.value)}} />
                            </div>
                           
                           
                            <div class="from-group">
                                <input type="submit" class="btn btn-success"/>
                                <input type="reset" class="btn btn-danger"/>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        </body>
    )
}
export default Reg;