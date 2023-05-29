import React from "react";
import Post from "./Post";

export default function AllPosts({posts}) {

    return <div className="all_posts">
            {posts.map(el => <Post post={el} key={el.id}/>)}
           </div>
}