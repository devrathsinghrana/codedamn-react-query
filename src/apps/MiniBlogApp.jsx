import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import queryClient from "../react-query-client";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Post = ({ postId, goBack }) => {
  const { data: post, isLoading } = useQuery({
    queryKey: ["post", postId],
    queryFn: () =>
      fetcher(`https://jsonplaceholder.typicode.com/posts/${postId}`),
    cacheTime: 0,
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
            <b>
              {(() => {
                const cachedPost = queryClient.getQueryData(["post", post.id]);
                return cachedPost ? "(visited) " : "";
              })()}
            </b>
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
