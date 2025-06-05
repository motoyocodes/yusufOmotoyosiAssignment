import React from "react";

export default function ProfileSection({ profile, onEditClick, onNewPostClick, editIcon, plusIcon }) {
  return (
    <section id="profile">
      <div className="profile-details">
        <div className="profile-img">
          <img src={profile.avatar} alt="profile" />
        </div>
        <div className="details">
          <h1>{profile.name}</h1>
          <p>{profile.title}</p>
          <div className="edit" onClick={onEditClick}>
            <img src={editIcon} alt="edit-icon" />
            <p>Edit Profile</p>
          </div>
        </div>
      </div>
      <div className="post">
        <button onClick={onNewPostClick}>
          <img src={plusIcon} alt="plus" /> New Post
        </button>
      </div>
    </section>
  );
}
