import React from 'react'
import logo from '../../ashesi_logo.jpeg';
import TopInfo from './TopInfo';
import StudentInfo from './StudentInfo';

export default function TopSection() {
    return (
        <div className="App">
            <img src={logo} className="App-logo" alt="logo" /> 
            <TopInfo/>
            <StudentInfo/>
            <hr/>
        </div>
    )
}
