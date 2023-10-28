import React, { useState } from 'react'; 
 
export const HomePage = () => { 
 
  const [newPostContent, setNewPostContent] = useState(''); 
 
 
  const [posts, setPosts] = useState([]); 
 
 
  const handleInputChange = (e) => { 
    setNewPostContent(e.target.value); 
  }; 
 
 
  const handleAddPost = () => { 
    if (newPostContent.trim() !== '') { 
 
      const newPost = { 
        id: posts.length + 1, 
        content: newPostContent, 
      }; 
 
      setPosts([...posts, newPost]); 
 
      setNewPostContent(''); 
    } 
  }; 
 
  return ( 
    <div> 
      <h2>Twit</h2> 
      <div> 
        <input 
          type="text" 
          placeholder="Enter your post content" 
          value={newPostContent} 
          onChange={handleInputChange} 
        /> 
        <button onClick={handleAddPost}>Add Post</button> 
      </div> 
 
      <h2>Posts</h2> 
      <ul> 
        {posts.map((post) => ( 
          <li key={post.id}>{post.content}</li> 
        ))} 
      </ul> 
    </div> 
  ); 
}; 
 
export default HomePage;