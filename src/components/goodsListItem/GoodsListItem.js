import classNames from "classnames";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buy, sell } from "../../slices/moneySlice";
import { addItem, removeItem } from "../../slices/selectedGoodsSlice";

const GoodsListItem = ({ item, hidden }) => {
  const dispatch = useDispatch();
  const { balance } = useSelector((state) => state.money);
  const [amount, setAmount] = useState(0);

  if (hidden) {
    return null;
  }

  const { id, name, price, img } = item;

  const sellItem = () => {
    if (amount <= 0) {
      return;
    }

    if (amount === 1) {
      dispatch(removeItem(id));
    }

    dispatch(sell(price));
    setAmount((amount) => amount - 1);
  };

  const buyItem = () => {
    if (balance < price) {
      return;
    }

    if (amount === 0) {
      dispatch(addItem(item));
    }

    dispatch(buy(price));
    setAmount((amount) => amount + 1);
  };

  return (
    <li className="single_item">
      <img src={`images/${img}`} alt={name} className="single_item_img" />
      <div
        className={classNames("single_item_title", name.length >= 29 && "long")}
      >
        {name}
      </div>
      <div className="single_item_price font_20px_400">{price}$</div>
      <div className="amount">
        <button
          className={classNames(
            "flex_center",
            price <= balance ? "green" : "red",
          )}
          onClick={buyItem}
        >
          +
        </button>
        <div
          className={classNames(
            "number",
            "font_20px_400",
            "flex_center",
            amount >= 10000 && "long_num",
          )}
        >
          {amount}
        </div>
        <button className="flex_center red" onClick={sellItem}>
          -
        </button>
      </div>
    </li>
  );
};

export default GoodsListItem;
