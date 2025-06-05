import React from "react";

export default function EditModal({ profile, onClose, onSubmit }) {
  return (
    <div className="modal-overlay">
      <div className="new-post-modal">
        <div className="modal-content">
          <h2>Edit Profile</h2>
          <form onSubmit={onSubmit}>
            <label>
              Name
              <input type="text" name="name" defaultValue={profile.name} minLength={2} maxLength={30} required />
            </label>
            <label>
              Title
              <input type="text" name="title" defaultValue={profile.title} minLength={2} maxLength={30} required />
            </label>
            <label>
              Upload New Avatar
              <input type="file" name="avatar" accept="image/*" />
            </label>
            <div className="modal-buttons">
              <button type="submit" className="update">Update</button>
              <button type="button" onClick={onClose}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
