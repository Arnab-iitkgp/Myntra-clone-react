import { useDispatch, useSelector } from "react-redux";
import { bagAction } from "../store/bagSlice";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const bag = useSelector((store) => store.bag);
  const elementFound = bag.indexOf(item.id) >= 0;
  const handleAddToBag = () => {
    dispatch(bagAction.addToBag(item.id));
  };

  //
  const handleRemoveFromBag = () => {
    dispatch(bagAction.removeFromBag(item.id));
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
          className=" btn-add-bag btn-remove"
          onClick={handleRemoveFromBag}
        >
          Remove {console.log("removed")}
        </button>
      ) : (
        <button className="btn-add-bag btn-success" onClick={handleAddToBag}>
          Add to Bag
        </button>
      )}
    </div>
  );
};
export default HomeItem;
