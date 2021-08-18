import React , {useState ,useEffect } from 'react'
import PostLists from "../components/PostLists"
import postStore from "..stores/postStore"
import {getPosts} from "../action/PostActions"

const PostPage = () => {
    const [posts ,setPosts] = useState (postStore.getPosts());

    useEffect(()=>{
        postStore.addChangeListener(onChange);
        if(postStore.getPosts().length === 0) getPosts();
        return () => postStore.removeChangeListener(onChange);
    }, []);
  const onChange = () =>{
      setPosts(postStore());
  }
    return(
        <div>
        <PostLists posts={posts}/>
        </div>
    );
} 
export default PostPage