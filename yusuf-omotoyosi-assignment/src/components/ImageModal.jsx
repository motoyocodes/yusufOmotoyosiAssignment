import React from "react";

export default function ImageModal({ preview, onClose }) {
  return (
    <div id="imageModal" className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>
        <img id="previewImage" src={preview.src} alt="Preview" />
        <div id="previewTitle">{preview.caption}</div>
      </div>
    </div>
  );
}
