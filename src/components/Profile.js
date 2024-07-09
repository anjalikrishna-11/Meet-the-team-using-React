// U35346496

import React from 'react';

const Profile = ({ name, role, photo }) => {
  return (
    <div className="profile">
      <img src={photo} alt={`${name}'s profile`} />
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
};

export default Profile;
