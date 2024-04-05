const Container = ({ children }) => {
  return (
    <div className="card" style={{ width: "70%", marginLeft: "200px" }}>
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Container;
