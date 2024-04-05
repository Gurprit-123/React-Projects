import { useContext, useEffect, useState } from "react";
import Card from "./Card";
import { PostListData } from "../store/Post-List-Store";
import WelcomeMsg from "./WelcomeMsg";
import LoadingSpinner from "./LoadingSpinner";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  // const { postList, addInitialPosts /*fetching*/ } = useContext(PostListData);
  const postList = useLoaderData();

  return (
    <>
      {/* {fetching === true && <LoadingSpinner></LoadingSpinner>} */}
      {postList.length === 0 && <WelcomeMsg />}
      {postList.map((postitems) => (
        <Card key={postitems.id} postitems={postitems} />
      ))}
    </>
  );
};

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((obj) => {
      return obj.posts;
    });
};
export default PostList;
