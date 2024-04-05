import { useContext } from "react";
import styles from "./Card.module.css";
import { AiFillLike } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { PostListData } from "../store/Post-List-Store";

const Card = ({ postitems }) => {
  const { delPost } = useContext(PostListData);
  return (
    <div className={`${styles["post-card"]} card`} style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {postitems.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => delPost(postitems.id)}
          >
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{postitems.body}</p>
        {postitems.tags.map((tags) => (
          <span
            className={`badge text-bg-primary ${styles["hastag"]}`}
            key={tags}
          >
            {tags}
          </span>
        ))}
        <div
          className={`alert alert-success ${styles["reactions"]}`}
          role="alert"
        >
          This post has been reacted by <AiFillLike /> {postitems.reactions}{" "}
          people
        </div>
      </div>
    </div>
  );
};
export default Card;
