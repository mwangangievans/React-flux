import React from "react"

const PostLists = (props)  =>{
    const {posts} = props ;
    return(
       <div style={{margin:20}}>
           {posts.map((post) =>(
               <div className="card mt-4" key={post.id}>
             <h2 className="card-header">{post.title}</h2>       
                <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted">
                        @{post.author}
                    </h6>
                    <blockquote className="blockquote mb-0">
                        <p>{post.body}</p>
                    </blockquote>
                </div>
               </div>
           ))
           }

       </div> 
    );
}
export default PostLists