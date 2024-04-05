import { useDispatch, useSelector } from "react-redux";
import { bagsActions } from "../store/bagsSlice";
import { MdAddCircleOutline } from "react-icons/md";
import { IoIosRemoveCircleOutline } from "react-icons/io";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.bags);
  const elementFound = bagItems.indexOf(item.id) >= 0;

  const handleAddToBag = () => {
    dispatch(bagsActions.addToBag(item.id));
  };
  const handleRemoveBag = () => {
    dispatch(bagsActions.removeFromBag(item.id));
  };

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {elementFound ? (
        <button
          type="button"
          className="btn btn-add-bag btn-danger "
          onClick={handleRemoveBag}
        >
          <IoIosRemoveCircleOutline />
          Remove
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-add-bag btn-success "
          onClick={handleAddToBag}
        >
          <MdAddCircleOutline />
          Add to Bag
        </button>
      )}
    </div>
  );
};
export default HomeItem;
