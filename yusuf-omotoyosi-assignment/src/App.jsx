import React, { useState } from "react";
import "./index.css";

import avatarImg from "./assets/Avatar.png";
import logo from "./assets/Logo.svg";
import editIcon from "./assets/Group 2.svg";
import plusIcon from "./assets/Group 26.svg";
import unionIcon from "./assets/Union.png";
import heartIcon from "./assets/heart.png";

import img1 from "./assets/pexels-kassandre-pedro-8639743 1.png";
import img2 from "./assets/pexels-kassandre-pedro-8639743 1 (1).png";
import img3 from "./assets/pexels-kassandre-pedro-8639743 1 (2).png";
import img4 from "./assets/pexels-kassandre-pedro-8639743 1 (3).png";
import img5 from "./assets/pexels-kassandre-pedro-8639743 1 (4).png";
import img6 from "./assets/pexels-kassandre-pedro-8639743 1 (5).png";

import Header from "./components/Header";
import ProfileSection from "./components/ProfileSection";
import ImageGallery from "./components/ImageGallery";
import Footer from "./components/Footer";
import EditModal from "./components/EditModal";
import ImageModal from "./components/ImageModal";
import NewPostModal from "./components/NewPostModal";

const restaurant = [
  { src: img1, alt: "Val Thoren", caption: "Val Thoren" },
  { src: img2, alt: "Restaurant terrace", caption: "Restaurant terrace" },
  { src: img3, alt: "An outdoor cafe", caption: "An outdoor cafe" },
  { src: img4, alt: "A very long bridge", caption: "A very long bridge, over the forest" },
  { src: img5, alt: "Tunnel with morning light", caption: "Tunnel with morning light" },
  { src: img6, alt: "Mountain house", caption: "Mountain house" },
];

export default function App() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [profile, setProfile] = useState({
    name: "Bessie Coleman",
    title: "Civil Aviator",
    avatar: avatarImg,
  });
  const [preview, setPreview] = useState({ src: "", caption: "" });
  const [images, setImages] = useState(restaurant);
  const [newPost, setNewPost] = useState({ title: "", file: null });

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const title = e.target.title.value.trim();
    const file = e.target.avatar.files[0];

    if (name.length >= 2 && title.length >= 2) {
      const newProfile = { name, title, avatar: profile.avatar };

      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          newProfile.avatar = reader.result;
          setProfile(newProfile);
        };
        reader.readAsDataURL(file);
      } else {
        setProfile(newProfile);
      }
      setIsEditModalOpen(false);
    }
  };

  const handleNewPostSubmit = (e) => {
    e.preventDefault();
    const title = newPost.title.trim();
    const file = newPost.file;

    if (title.length >= 2 && file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages([{ src: reader.result, alt: title, caption: title }, ...images]);
        setIsPostModalOpen(false);
        setNewPost({ title: "", file: null });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = (img) => {
    setPreview(img);
    setIsImageModalOpen(true);
  };

  return (
    <>
      <div className={isEditModalOpen || isPostModalOpen || isImageModalOpen ? "blurred" : "non-modals"}>
        <Header logo={logo} />
        <main className="container">
          <ProfileSection
            profile={profile}
            onEditClick={() => setIsEditModalOpen(true)}
            onNewPostClick={() => setIsPostModalOpen(true)}
            editIcon={editIcon}
            plusIcon={plusIcon}
          />
          <ImageGallery
            images={images}
            onImageClick={handleImageClick}
            unionIcon={unionIcon}
            heartIcon={heartIcon}
          />
        </main>
        <Footer />
      </div>

      {isEditModalOpen && (
        <EditModal
          profile={profile}
          onClose={() => setIsEditModalOpen(false)}
          onSubmit={handleEditSubmit}
        />
      )}

      {isPostModalOpen && (
        <NewPostModal
          newPost={newPost}
          setNewPost={setNewPost}
          onClose={() => setIsPostModalOpen(false)}
          onSubmit={handleNewPostSubmit}
        />
      )}

      {isImageModalOpen && (
        <ImageModal
          preview={preview}
          onClose={() => setIsImageModalOpen(false)}
        />
      )}
    </>
  );
}
