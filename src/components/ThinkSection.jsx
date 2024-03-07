import React from 'react';
import '../App.css';
import Button from './Button';

const ThinkSection = () => {
  return (
    <div id='think-section'>
        <div id='think-inner'>
            <h1>Think Health. Think Massage</h1>
            <p>We are open 9am to 6pm; Monday through Sunday. If you would like to schedule an appointment<br/>with us, Please call us at 987-654-3210 today!</p>
            <div id='button-container'>
                <Button text="LEARN MORE ABOUT US"/>
                <Button text="CONTACT US TODAY"/>
            </div>
        </div>
    </div>
  )
}

export default ThinkSection