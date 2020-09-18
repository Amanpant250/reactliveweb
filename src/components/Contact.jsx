import React, { useState } from 'react'
const Contact=()=>{
    const [data,setData] = useState({
        fullname:'',
        phone:'',
        email:'',
        msg:''

    })
    const formSubmit=(e)=>{
        e.preventDefault();
        alert(
            `My name is ${data.fullname}.My Mobile Number is ${data.phone}.My Email is ${data.email}.I want to say ${data.msg}`
        )
    }
    const inputEvent=(event)=>{
        const {name,value}=event.target
        setData((prev)=>{
            return {
                ...prev,
                [name]:value,
            }
        })
    }
    return(<>
        <div className="my-5">
            <h1 className="text-center">Contact US</h1>
        </div>
        <div className="container contact_div">
            <div className="col-md-6 col-10 mx-auto">
                <form onSubmit={formSubmit}>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">FullName</label>
                        <input type="text" 
                        className="form-control" 
                        name="fullname"
                        value={data.fullname}
                        onChange={inputEvent}
                        id="exampleFormControlInput1" 
                        placeholder="Enter your name"/>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Phone No</label>
                        <input type="number" 
                        className="form-control" 
                        name="phone"
                        value={data.phone}
                        onChange={inputEvent}
                        id="exampleFormControlInput1" 
                        placeholder="Enter Mobile no"/>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Email address</label>
                        <input type="email" 
                        className="form-control" 
                        name="email"
                        value={data.email}
                        onChange={inputEvent}
                        id="exampleFormControlInput1" 
                        placeholder="name@example.com"/>
                    </div>
                    
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Message</label>
                        <textarea className="form-control" 
                        name="msg"
                        value={data.msg}
                        onChange={inputEvent}
                        id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="col-12">
                    <button className="btn btn-outline-primary" type="submit">Submit form</button>
                    </div>
                </form>
            </div>
        </div>
    </>)
}
export default Contact