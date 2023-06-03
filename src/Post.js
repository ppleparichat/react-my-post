import React from "react";
import PropTypes from "prop-types";

const Post = ({ id, title, deletePost }) => {
  return (
    <div className="Post">
      <button className="Post__delete" onClick={()=> deletePost(id)} >X</button>
      <div className="Post__title">{title}</div>
      <img
        className="Post__image"
        alt="pic"
        src={`https://source.unsplash.com/featured?sig=${id}`}
      />
    </div>
  );
};

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  deletePost: PropTypes.func.isRequired
};

export default Post;
