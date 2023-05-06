import React from 'react';
import Button from '../../../../core/components/atoms/Button';
import AdminTemplate from '../../../templates/admin/admintemplate/AdminTemplate';

function AdminProfile() {
  return (
    <div>
      <AdminTemplate
        text="Welcome to your Profile page, you can view and make changes to your information details"
        username="Clint"
        page="AdminProfile"
      >
        <div className="adminPage">
          <div className="admininformation">
            <div className="column">
              <div className="profile_pic_container">
                <div className="circle">J.D</div>
              </div>
              <div className="aboutyou">
                <legend>Bio</legend>
                <div className="textareadiv">
                  <textarea
                    name="bio"
                    id="bio"
                    cols="30"
                    rows="10"
                    placeholder="Write your about here"
                  />
                </div>
              </div>
            </div>
            <div className="column">
              <div className="field">
                <legend>Name</legend>
                <div className="input_block">
                  <i className="fa-solid fa-user" />
                  <input type="text" defaultValue="Clint" />
                </div>
              </div>
              <div className="field">
                <legend>Phone Number</legend>
                <div className="input_block">
                  <i className="fa-solid fa-phone" />
                  <input type="text" defaultValue="+237680612360" />
                </div>
              </div>
              <div className="field">
                <legend>Email</legend>
                <div className="input_block">
                  <i className="fa-solid fa-envelope" />
                  <input type="text" defaultValue="clint360.rebase@gmail.com" />
                </div>
              </div>
              <div className="field">
                <legend>Subject</legend>
                <div className="input_block">
                  <i className="fa-sharp fa-solid fa-book" />
                  <input type="text" defaultValue="Physics" />
                </div>
              </div>
              <div className="field">
                <legend>Change Password?</legend>
                <div className="input_block">
                  <i className="fa-solid fa-lock" />
                  <input type="password" defaultValue="+237680612360" />
                </div>
              </div>
            </div>
            <div className="column">
              <div className="column3">
                <legend>Actions</legend>
                <div className="action">
                  <Button
                    title="Reset"
                    background="#E8522A"
                    borderColor="#E8522A"
                  />
                </div>
                <div className="action">
                  <Button title="Update" />
                </div>
                <div className="action">
                  <Button title="Log Out" background="white" color="#1D4645" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </AdminTemplate>
    </div>
  );
}

export default AdminProfile;
