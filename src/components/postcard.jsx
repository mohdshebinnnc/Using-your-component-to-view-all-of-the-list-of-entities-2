import React from 'react'
import LikeButton from "./likebutton"

const PostCard = ({ post }) => {
    return (
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "10px",
          padding: "15px",
          margin: "10px",
          maxWidth: "400px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={post.profileImage}
            alt={post.username}
            style={{ width: "50px", height: "50px", borderRadius: "50%", marginRight: "10px" }}
          />
          <h3>{post.username}</h3>
        </div>
        <p>{post.content}</p>
        <LikeButton isLiked={post.isLiked} />
      </div>
    );
  };
  
  export default PostCard;
