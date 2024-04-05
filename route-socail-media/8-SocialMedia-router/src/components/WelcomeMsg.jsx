import styles from "./WelcomeMsg.module.css";

const WelcomeMsg = () => {
  return (
    <center className={`${styles["welcome-msg"]}`}>
      <h1>Sorry! There are no posts.</h1>
    </center>
  );
};
export default WelcomeMsg;
