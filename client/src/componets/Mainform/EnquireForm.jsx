import React from 'react';
import '../Mainform/enquireform.css';

const EnquireForm = () => {
  return (
    <>
      <div className='user-container'>
        <div className="form-image">
          <img src="https://etlhive.com/wp-content/uploads/2020/10/corporatetraining-1024x683.jpg" alt="" />
        </div>
        <form className="form-container">
          <p>Contact US</p>
          <section className='form-content'>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" placeholder="Your name.." />
            <label htmlFor="Password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your Password" />
            <label htmlFor="email">Email</label>
            <input type="email" id="Email" name="Email" placeholder="Enter your Email ID" />
            <label htmlFor="subject">Message Us</label>
            <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: "100px" }}></textarea>
          </section>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>

  )
}

export default EnquireForm;