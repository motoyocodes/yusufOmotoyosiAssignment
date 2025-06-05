import React from "react";

export default function NewPostModal({ newPost, setNewPost, onClose, onSubmit }) {
  return (
    <div id="newPostModal" className="new-post">
      <div className="modal-space">
        <div className="modal-content">
          <h2>New Post</h2>
          <form onSubmit={onSubmit}>
            <label>
              Title
              <input
                type="text"
                value={newPost.title}
                onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                minLength={2}
                maxLength={100}
                required
              />
            </label>
            <label>
              Upload Image
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setNewPost({ ...newPost, file: e.target.files[0] })}
                required
              />
            </label>
            <div className="modal-buttons">
              <button type="submit">Post</button>
              <button type="button" onClick={onClose}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
