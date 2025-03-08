import React ,{useState}from "react";
import axios from "axios";
function Registration() {
    const [name,SetName]=useState("")
    const [email,SetEmail]=useState("")
    const [password,SetPassword]=useState("")
    const [phoneNo,SetPhoneNo]=useState("")
    const handleSave = (e)=>{
        e.preventDefault();
        console.log(name,email,password,phoneNo)
const url = 'https://localhost:7271/api/Registration/Registration'
        const data ={
            Name: name,
            Email:email,
            Password:password,
            PhoneNo:phoneNo
         }
         axios.post(url,data)
         .then((result)=>{
            const dt = result.data;
         })
         .catch((error)=>{
            console.log(error);
         })
     }
     
  return (
    <section className="h-100 bg-dark">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">
        <div className="card card-registration my-4">
          <div className="row g-0">
            <div className="col-xl-6 d-none d-xl-block">
            <img
  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
  alt="Person smiling"  // More descriptive alt text
  className="img-fluid"
  style={{ borderTopLeftRadius: '.25rem', borderBottomLeftRadius: '.25rem' }}
/>
            </div>
            <div className="col-xl-6">
              <div className="card-body p-md-5 text-black">
                <h3 className="mb-5 text-uppercase">Student registration form</h3>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div data-mdb-input-init className="form-outline">
                      <input type="text" id="form3Example1m" className="form-control form-control-lg"
                      onChange={(e) => SetName(e.target.value)}
                      />
                      <label className="form-label" for="form3Example1m">Enter name</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div data-mdb-input-init className="form-outline">
                      <input type="text" id="form3Example1n" className="form-control form-control-lg" 
                      onChange={(e) => SetEmail(e.target.value)}
                      />
                      <label className="form-label" for="form3Example1n">Email ID</label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div data-mdb-input-init className="form-outline">
                      <input type="text" id="form3Example1m1" className="form-control form-control-lg"
                      onChange={(e) => SetPassword(e.target.value)}
                      />
                      <label className="form-label" for="form3Example1m1">Password</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div data-mdb-input-init className="form-outline">
                      <input type="text" id="form3Example1n1" className="form-control form-control-lg" 
                      onChange={(e) => SetPhoneNo(e.target.value)}
                      />
                      <label className="form-label" for="form3Example1n1">PhoneNo</label>
                    </div>
                  </div>
                </div>

               
                <div className="d-flex justify-content-end pt-3">
                  <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-light btn-lg">Reset all</button>
                  <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-warning btn-lg ms-2"
                  onClick={(e)=>handleSave()}
                  >Submit form</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}

export default Registration;
