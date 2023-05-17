/* eslint-disable no-restricted-globals */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-undef */
import React from 'react';
import Button from '../../../../core/components/atoms/Button';
import AdminTemplate from '../../../templates/admin/admintemplate/AdminTemplate';
import AuthGuard from './AuthGuard';
import { updateUser } from '../../../../api/auth';

function AdminProfile({ user }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData(e.currentTarget);
    const values = Object.fromEntries(data.entries());
    const update = { id: user.id, ...values };
    console.log(update);
    await updateUser(update);
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
            <form action="" onSubmit={handleSubmit}>
              <div className="column">
                <div className="field">
                  <label className="label">Name</label>
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
                  <label className="label">Email</label>
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
                  <label className="label">Password</label>
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
                <div className="aboutyou">
                  <label className="label">Bio</label>
                  <div className="textareadiv">
                    <textarea
                      name="bio"
                      id="bio"
                      cols="30"
                      rows="10"
                      placeholder="Write your about here"
                      defaultValue={user.bio}
                    />
                  </div>
                </div>
                <div className="action">
                  <Button type="submit" title="Update" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </AdminTemplate>
    </div>
  );
}

export default AuthGuard(AdminProfile);
