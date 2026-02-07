import React from 'react'
import '../assets/css/todolist.css'
import avatar from '../assets/profile.webp'
import { useState } from "react";


function ProfileCard() {
    const [darkMode, setDarkMode] = useState(false);
    const toggleMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
    };

  return (
    <div className="card profile-section">
        <div className="profile-header">
            <img src={avatar} alt="Avatar" className="avatar" />
            <div>                  
                <h2 id="name-display">Nama Saya</h2>
                <p className="role">Frontend Developer</p>
            </div>
        </div>
        <p className="bio">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem voluptates eius nisi iusto error, quo illo, reprehenderit eum maiores facilis perspiciatis porro? Consequatur ad recusandae hic deleniti blanditiis quaerat obcaecati.
        </p>
    
        <button 
            className="btn btn-secondary"
            onClick={toggleMode}
        >
        {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
        </button>
    </div>
  )
}

export default ProfileCard
