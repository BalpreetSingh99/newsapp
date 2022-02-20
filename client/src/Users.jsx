import { useEffect, useState } from "react";
import axios from "axios";
import './App.css'


export default function Users() {
  
    return (
        <div>
            <h1>Add/Update User</h1>
            <ul>
                <li>
                    <p>Username</p>
                    <input></input>
                </li>
                <li>
                    <p>Email</p>
                    <input></input>
                </li>
                <li>
                    <p>Password</p>
                    <input></input>
                </li>
                <li>
                    <p>Phone Number</p>
                    <input></input>
                </li>
                <li>
                    <p>Date of Birth</p>
                    <input></input>
                </li>
                <li>
                    <p>Time of Birth</p>
                    <input></input>
                </li>
                <li>
                    <p>Gender</p>
                    <input></input>
                </li>
                <li>
                    <p>Marital Status</p>
                    <input></input>
                </li>
                <li>
                    <p>Language</p>
                    <input></input>
                </li>
                <li>
                    <p>Profile picture</p>
                    <input></input>
                </li>
            </ul>
            <button>Add</button>
        </div>

    );

}

