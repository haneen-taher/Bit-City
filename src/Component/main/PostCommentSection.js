import React, { useState, useEffect } from "react";
import axios from "axios";
import { faker } from "@faker-js/faker";
const PostCommentSection = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [newComment, setNewComment] = useState("");
  const [error, setError] = useState("");

  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/posts?_embed=comments"
      );
      const postData = response.data;
      setPosts(postData);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/posts", {
        content: newPost,
        comments: [],
      });
      const newPostData = response.data;
      setPosts([...posts, newPostData]);
      setNewPost("");
    } catch (error) {
      console.error("Error adding post:", error);
      setError("Error adding post. Please try again.");
    }
  };

  const handleCommentSubmit = async (e, postId) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:3001/comments`, {
        postId,
        content: newComment,
      });
      const newCommentData = response.data;
      setPosts((prevPosts) =>
        prevPosts.map((post) => {
          if (post.id === postId) {
            return {
              ...post,
              comments: [...post.comments, newCommentData],
            };
          }
          return post;
        })
      );
      setNewComment("");
    } catch (error) {
      console.error("Error adding comment:", error);
      setError("Error adding comment. Please try again.");
    }
  };

  const handleCommentDelete = async (postId, commentId) => {
    try {
      await axios.delete(`http://localhost:3001/comments/${commentId}`);
      setPosts((prevPosts) =>
        prevPosts.map((post) => {
          if (post.id === postId) {
            return {
              ...post,
              comments: post.comments.filter(
                (comment) => comment.id !== commentId
              ),
            };
          }
          return post;
        })
      );
    } catch (error) {
      console.error("Error deleting comment:", error);
      setError("Error deleting comment. Please try again.");
    }
  };

  const handleCommentEdit = async (postId, commentId, updatedContent) => {
    try {
      await axios.put(`http://localhost:3001/comments/${commentId}`, {
        content: updatedContent,
      });
      setPosts((prevPosts) =>
        prevPosts.map((post) => {
          if (post.id === postId) {
            return {
              ...post,
              comments: post.comments.map((comment) => {
                if (comment.id === commentId) {
                  return {
                    ...comment,
                    content: updatedContent,
                  };
                }
                return comment;
              }),
            };
          }
          return post;
        })
      );
    } catch (error) {
      console.error("Error editing comment:", error);
      setError("Error editing comment. Please try again.");
    }
  };
  const generateFakeUsername = () => {
    return faker.person.fullName();
  };

  const generateFakeAvatar = () => {
    return faker.image.avatar();
  };

  const generateFakeTimestamp = () => {
    const timestamp = faker.date.recent();
    return timestamp.toLocaleString();
  };

  return (
    <div className="post-comment-section">
      <div className="post-form">
        <h2>Create a Post</h2>
        <form onSubmit={handlePostSubmit}>
          <textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="What's on your mind?"
            required
          />
          <button type="submit">Post</button>
        </form>
      </div>
      <div className="post-list">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <p>{post.content}</p>
            <div className="comment-form">
              <form onSubmit={(e) => handleCommentSubmit(e, post.id)}>
                <input
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Add your comment..."
                  required
                />
                <button type="submit">Comment</button>
              </form>
            </div>
            <div className="comments">
              {post.comments.map((comment) => (
                <div key={comment.id} className="comment">
                  <div className="comment-user">
                    <img
                      src={generateFakeAvatar()}
                      alt="User Avatar"
                      className="avatar"
                    />
                    <p className="username">{generateFakeUsername()}</p>
                  </div>
                  <p className="Comment-content">{comment.content}</p>
                  <p className="timestamp">{generateFakeTimestamp()}</p>
                  <div className="comment-actions">
                    <button
                      className="btn-ed"
                      onClick={() => handleCommentDelete(post.id, comment.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn-ed"
                      onClick={() => {
                        const updatedContent = prompt(
                          "Enter new comment content:"
                        );
                        if (updatedContent) {
                          handleCommentEdit(
                            post.id,
                            comment.id,
                            updatedContent
                          );
                        }
                      }}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default PostCommentSection;
