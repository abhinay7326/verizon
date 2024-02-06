import React, { useState, useEffect } from 'react';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  //const [loading, setLoading] = useState(true);
  //const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('no response');
        }

        const data = await response.json();
        setPosts(data);
      } catch (er) {
        console.log(er);
      }
    };

    fetchData();
  }, []); 



  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
            <>
            <li key={post.id}>{post.title}</li>
            <img src={post.image}/>
            </>
        
        ))}
      </ul>
    </div>
  );
};

export default PostList;
