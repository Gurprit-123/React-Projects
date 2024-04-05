// import { useContext, useRef } from "react";
import { Form, redirect } from "react-router-dom";
import styles from "./CreatePost.module.css";
// import PostListProvider, { PostListData } from "../store/Post-List-Store";
// import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  // const { addPost } = useContext(PostListData);
  // const navigate = useNavigate();
  /* const userIdElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();*/

  const handleOnPost = (event) => {
    // event.preventDefault();
    /* const userId = userIdElement.current.value;
    const title = titleElement.current.value;
    const body = bodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");
    // addPost(userId, title, body, reactions, tags);*/
    /* userIdElement.current.value = "";
    titleElement.current.value = "";
    bodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";*/
  };
  return (
    <Form method="POST" className={`${styles["create-post"]}`}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your ID
        </label>
        <input
          type="text"
          name="userId"
          className="form-control"
          id="userId"
          placeholder="please provide your ID"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          name="title"
          className="form-control"
          id="title"
          placeholder="How are you feeling today?"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Content
        </label>
        <textarea
          type="text"
          name="body"
          rows="4"
          className="form-control"
          id="body"
          placeholder="Any Description"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Reactions
        </label>
        <input
          type="text"
          name="reactions"
          className="form-control"
          id="reactions"
          placeholder="How many people reacts"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Tags if any?
        </label>
        <input
          type="text"
          name="tags"
          className="form-control"
          id="tags"
          placeholder="Please Provide Tags "
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};
export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postDataNew = Object.fromEntries(formData);
  postDataNew.tags = postDataNew.tags.split(" ");
  console.log(postDataNew);
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postDataNew),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
      // navigate("/");
    });
  return redirect("/");
}
export default CreatePost;
