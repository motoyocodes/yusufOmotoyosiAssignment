import React from "react";

export default function ImageGallery({ images, onImageClick, unionIcon, heartIcon }) {
  return (
    <section id="outdoor-img">
      <div className="img-container">
        {images.map((img, i) => (
          <div key={i} onClick={() => onImageClick(img)}>
            <img src={img.src} alt={img.alt} className="image" />
            <p className="img-text">
              {img.caption}
              <span>
                <img
                  src={unionIcon}
                  alt="like"
                  className="like"
                  onClick={(e) => {
                    e.stopPropagation();
                    e.target.src = e.target.src.includes("Union") ? heartIcon : unionIcon;
                  }}
                />
              </span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
