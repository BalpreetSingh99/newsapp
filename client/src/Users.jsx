import { useEffect, useState } from "react";
import axios from "axios";
import './App.css'


export default function Users() {
    let obj={
        username:"",
        email:"",
        password:"",
        phoneNumber:"",
        dob:"",
        tob:"",
        gender:"",
        maritalStatus:"",
        language:"",
        profilePicture:""
    }
    const [userData, setUserData] = useState(obj);
  
    function postData(){
        axios.post("http://localhost:8080/api/user",{userData}).then((resp) => {
        console.log(resp);
        alert(resp.data);
        window.location.replace("http://localhost:3000/");
    });
    }
    function changeField(e){
        obj={
            ...userData,
            [e.target.name]:e.target.value
        }
        // console.log(obj.[str])
        // obj.str=e.target.value;
        console.log(obj)
        setUserData(obj)
    }
    return (
        <div>
            <h1>Add/Update User</h1>
            <ul>
                <li>
                    <p>Username</p>
                    <input name="username" value={userData.username} onChange={changeField}></input>
                </li>
                <li>
                    <p>Email</p>
                    <input name="email" value={userData.email} onChange={changeField}></input>
                </li>
                <li>
                    <p>Password</p>
                    <input name="password" value={userData.password} onChange={changeField}></input>
                </li>
                <li>
                    <p>Phone Number</p>
                    <input name="phoneNumber" value={userData.phoneNumber} onChange={changeField}></input>
                </li>
                <li>
                    <p>Date of Birth</p>
                    <input name="dob" value={userData.dob} onChange={changeField}></input>
                </li>
                <li>
                    <p>Time of Birth</p>
                    <input name="tob" value={userData.tob} onChange={changeField}></input>
                </li>
                <li>
                    <p>Gender</p>
                    <input name="gender" value={userData.gender} onChange={changeField}></input>
                </li>
                <li>
                    <p>Marital Status</p>
                    <input name="maritalStatus" value={userData.maritalStatus} onChange={changeField}></input>
                </li>
                <li>
                    <p>Language</p>
                    <input name="language" value={userData.language} onChange={changeField}></input>
                </li>
                <li>
                    <p>Profile picture</p>
                    <input name="profilePicture" value={userData.profilePicture} onChange={changeField}></input>
                </li>
            </ul>
            <button onClick={postData}>Add</button>
        </div>

    );

}

