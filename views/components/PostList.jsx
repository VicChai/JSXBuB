import React from "react";

export default function PostList({ posts }) {
  return (
    <ul className="row list-unstyled">
      {posts.map((post) => (
        <li className="col-6 justify-content-between mt-5">
          <a href={`/post/${post._id}`}>
            <img className="img-fluid" src={post.image} />
          </a>
        </li>
      ))}
    </ul>
  );
}
