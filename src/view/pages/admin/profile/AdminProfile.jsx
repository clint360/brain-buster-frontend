/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-undef */
import React, { useRef } from 'react';
/* import { useNavigate } from 'react-router-dom'; */
import Button from '../../../../core/components/atoms/Button';
import AdminTemplate from '../../../templates/admin/admintemplate/AdminTemplate';
import AuthGuard from './AuthGuard';
import { updateUser } from '../../../../api/auth';
/* import { deleteToken } from '../../../../utils'; */

function AdminProfile({ user }) {
  /* const [loading, setLoading] = useState(false); */
  /* const navigate = useNavigate(); */
  const bioRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const UserBio = bioRef.current.value;
    const values = Object.fromEntries(data.entries());
    const update = { id: user.id, ...values, bio: UserBio };
    console.log(update);
    await updateUser(update);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
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
                <label>Bio</label>
                <div className="textareadiv">
                  <textarea
                    name="bio"
                    id="bio"
                    cols="30"
                    rows="10"
                    placeholder="Write your about here"
                    defaultValue={user.bio}
                    ref={bioRef}
                  />
                </div>
              </div>
            </div>
            <form action="" onSubmit={handleSubmit}>
              <div className="column">
                <div className="field">
                  <label>Name</label>
                  <div className="input_block">
                    <i className="fa-solid fa-user" />
                    <input
                      name="fullName"
                      type="text"
                      defaultValue={user.fullName}
                    />
                  </div>
                </div>
                <div className="field">
                  <label>Email</label>
                  <div className="input_block">
                    <i className="fa-solid fa-envelope" />
                    <input
                      disabled
                      name="emailAddress"
                      type="email"
                      defaultValue={user.emailAddress}
                    />
                  </div>
                </div>
                <div className="field">
                  <label>Password</label>
                  <div className="input_block">
                    <i className="fa-solid fa-lock" />
                    <input
                      disabled
                      name="password"
                      type="password"
                      defaultValue={user.password}
                    />
                  </div>
                </div>
                <div className="action">
                  <Button type="submit" title="Update" />
                </div>
              </div>
            </form>
            <div className="column">
              <div className="column3">
                <label>Actions</label>
                <div className="action">
                  <Button
                    title="Reset"
                    background="#E8522A"
                    borderColor="#E8522A"
                    type="button"
                  />
                </div>
                <div className="action">
                  <Button
                    type="button"
                    title="Log Out"
                    background="white"
                    color="#1D4645"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </AdminTemplate>
    </div>
  );
}

export default AuthGuard(AdminProfile);
