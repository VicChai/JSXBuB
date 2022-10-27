import React from "react";
import Main from "./components/Main.jsx";

export default function Post({ post, user, comments }) {
  return (
    <Main>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-6">
            <h2>{post.title}</h2>
            <img className="img-fluid" src={post.image} />
            <div className="row justify-content-between">
              <form
                className="col-1"
                action={`/post/likePost/${post.id}?_method=PUT`}
                method="POST"
              >
                <button
                  className="btn btn-primary fa fa-heart"
                  type="submit"
                ></button>
              </form>
              <h3 className="col-3">Likes: {post.likes}</h3>
              {/* <%if(post.user == user.id){ %>
                <form
                action="/post/deletePost/<%= post.id %>?_method=DELETE"
                method="POST"
                className="col-3"
                >
                <button className="btn btn-primary fa fa-trash" type="submit"></button>
                </form>
                <%}%> */}
              {post.user == user.id && (
                <form
                  action={`/post/deletePost/${post.id}?_method=DELETE`}
                  method="POST"
                  className="col-3"
                >
                  <button
                    className="btn btn-primary fa fa-trash"
                    type="submit"
                  ></button>
                </form>
              )}
            </div>
          </div>
          <div className="col-3 mt-5">
            <p>{post.caption}</p>
          </div>

          <div className="mt-5">
            <h2>Add a Comment</h2>
            <form action={`/comment/createComment/${post._id}`} method="POST">
              <div className="mb-3">
                <label htmlFor="Comment" className="form-label">
                  Comment
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="comment"
                  name="comment"
                />
              </div>
              <button type="submit" className="btn btn-primary" value="Upload">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="col-6">
          <ul>
            {/* <% for(var i=0; i<comments.length; i++) {%>
            <li className="col-6 justify-content-between mt-5">
            <%= comments[i].createdBy%> :
            <%= comments[i].comment%>
            <div>  
                <%if(comments[i].createdByID == user.id){ %>
                <form
                    action="/comment/deleteComment/<%= post.id %>/<%= comments[i]._id %>?_method=DELETE"
                    method="POST"
                    
                >
                    <button className="btn btn-outline-danger" type="submit">Delete</button>
                </form>
                <%}%>
            </li>
        <% } %> */}
            {comments.map((comment) => (
              <li
                key={comment._id}
                className="col-6 justify-content-between mt-5"
              >
                {comment.createdBy} : {comment.comment}
                {comment.createdByID == user.id && (
                  <form
                    action={`/comment/deleteComment/${post.id}/${comment._id}?_method=Delete`}
                    method="POST"
                  >
                    <button className="btn btn-outline-danger" type="submit">
                      Delete
                    </button>
                  </form>
                )}
              </li>
            ))}
          </ul>

          <div className="col-6 mt-5">
            <a className="btn btn-primary" href="/profile">
              Return to Profile
            </a>
            <a className="btn btn-primary" href="/feed">
              Return to Feed
            </a>
          </div>
        </div>
      </div>
    </Main>
  );
}
