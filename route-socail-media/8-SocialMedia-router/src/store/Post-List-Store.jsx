import {
  createContext,
  useCallback,
  useReducer,
  useState,
  useEffect,
} from "react";

export const PostListData = createContext({
  postList: [],
  addPost: () => {},
  // fetching: false,
  delPost: () => {},
});

const postReducer = (currpostItem, postAction) => {
  let newPostItem = currpostItem;
  if (postAction.type === "DEL_POST") {
    newPostItem = currpostItem.filter(
      (delpost) => delpost.id !== postAction.payload.postID
    );
  } else if (postAction.type === "ADD_POST") {
    newPostItem = [
      postAction.payload,
      ...currpostItem,
      /*{
        id: postAction.payload.id,
        userId: postAction.payload.userId,
        title: postAction.payload.title,
        body: postAction.payload.body,
        reactions: postAction.payload.reactions,
        tags: postAction.payload.tags,
      },*/
    ];
  } else if (postAction.type === "ADD_POSTS_FROM_SERVER") {
    newPostItem = postAction.payload.posts;
  }

  return newPostItem;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postReducer, []);
  // const [fetching, setfetching] = useState(false);

  const addPost = (post) => {
    // console.log(`${userId} ${title} ${body} ${reactions} ${tags} `);

    console.log(post);
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };

  const addInitialPosts = (posts) => {
    // console.log(`${userId} ${title} ${body} ${reactions} ${tags} `);
    dispatchPostList({
      type: "ADD_POSTS_FROM_SERVER",
      payload: {
        posts,
      },
    });
  };

  const delPost = useCallback(
    (postID) => {
      console.log(`delete post call for :${postID}`);
      dispatchPostList({
        type: "DEL_POST",
        payload: {
          postID,
        },
      });
    },
    [dispatchPostList]
  );
  /* useEffect(() => {
    setfetching(true);

    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((obj) => {
        addInitialPosts(obj.posts);
        setfetching(false);
      });
    return () => {
      controller.abort();
    };
  }, []);*/

  return (
    <PostListData.Provider
      value={{
        postList,
        addPost,
        delPost,
        // fetching,
      }}
    >
      {children}
    </PostListData.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi Friends! I am going to mumbai",
    reactions: 2,
    userId: "user_1",
    tags: ["vacation", "mumbai", "enjoy"],
  },
  {
    id: "2",
    title: "Going to Delhi",
    body: "Hi Friends! I am going to Delhi",
    reactions: 6,
    userId: "user_2",
    tags: ["vacation", "Delhi", "job"],
  },
];
export default PostListProvider;
