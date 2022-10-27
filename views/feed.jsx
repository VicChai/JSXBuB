import React from 'react'
import Main from './components/Main.jsx'

export default function Feed({posts}) {
    return (
        <Main>
           <div class="container">
    <div class="row justify-content-center mt-5">
      <ul class="row list-unstyled">
        {/* <% for(var i=0; i<posts.length; i++) {%>
          <li class="col-6 justify-content-between mt-5">
            <a href="/post/<%= posts[i]._id%>">
              <img class="img-fluid" src="<%= posts[i].image%>">
            </a>
          </li>
        <% } %> */}
        {posts.map(post=>
            <li className="col-6 justify-content-between mt-5">
            <a href={`/post/${post._id}`}>
              <img class="img-fluid" src={post.image} />
            </a>
          </li>     
        )}
        </ul>
    </div>
  </div>  
        </Main>
    )
}