import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Post = ({ postId, goBack }) => {
  const { data: post, isLoading } = useQuery({
    queryKey: ["post", postId],
    queryFn: () =>
      fetcher(`https://jsonplaceholder.typicode.com/posts/${postId}`),
  });
  if (isLoading) return <h1>Loading...</h1>;
  return (
    <>
      <button onClick={goBack}>Go back</button>
      <p>Title - {post.title}</p>
      <p>Desc - {post.body}</p>
    </>
  );
};
const MiniBlogApp = () => {
  const { data: posts, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: () => fetcher("https://jsonplaceholder.typicode.com/posts"),
  });
  const [postId, setPostId] = useState(null);

  const goBack = () => setPostId(null);
  if (postId) {
    return <Post postId={postId} goBack={goBack} />;
  }

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      MiniBlogApp
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <a href="#" onClick={() => setPostId(post.id)}>
              {post.id} - {post.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MiniBlogApp;
