import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch({
      type: "INCREMENT",
    });
  };

  const handleDecrement = () => {
    dispatch({
      type: "DECREMENT",
    });
  };
  const handleAddititon = () => {
    dispatch({
      type: "ADDITION",
      payload: {
        num: inputElement.current.value,
      },
    });
    inputElement.current.value = "";
  };
  const handleSubtraction = () => {
    dispatch({
      type: "SUBTRACTION",
      payload: {
        num: inputElement.current.value,
      },
    });
    inputElement.current.value = "";
  };

  const handlePrivacy = () => {
    dispatch({
      type: "PRIVACY",
    });
  };
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncrement}
        >
          +1
        </button>

        <button
          type="button"
          className="btn btn-success"
          onClick={handleDecrement}
        >
          -1
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={handlePrivacy}
        >
          Privacy
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input
          type="text"
          ref={inputElement}
          placeholder="Enter the number"
          className="number-input"
        />

        <button
          type="button"
          className="btn btn-info"
          onClick={handleAddititon}
        >
          Add
        </button>

        <button
          type="button"
          className="btn btn-danger"
          onClick={handleSubtraction}
        >
          Sub
        </button>
      </div>
    </>
  );
};
export default Controls;
