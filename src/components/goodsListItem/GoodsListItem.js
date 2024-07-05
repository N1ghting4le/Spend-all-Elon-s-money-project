import { useState } from "react";
import { sell, buy } from "../../slices/moneySlice";
import { addItem, removeItem } from "../../slices/selectedGoodsSlice";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

const GoodsListItem = ({item, hidden}) => {
    const {id, name, price, img} = item;
    const dispatch = useDispatch();
    const {balance} = useSelector(state => state.money);
    const [amount, setAmount] = useState(0);

    const changeBtnClass = () => classNames({
        'green': price <= balance,
        'red': price > balance
    });

    const checkNameLength = () => classNames({
        'long': name.length >= 29
    });

    const checkAmountLength = () => classNames({
        'long_num': amount >= 10000
    });

    const sellItem = () => {
        if (amount > 0) {
            dispatch(sell(price));
            if (amount === 1) {
                dispatch(removeItem(id));
            }
            setAmount(amount => amount - 1);
        }
    }

    const buyItem = () => {
        if (balance >= price) {
            dispatch(buy(price));
            if (amount === 0) {
                dispatch(addItem(item));
            }
            setAmount(amount => amount + 1);
        }
    }

    return !hidden ? (
        <li className="single_item">
            <img src={`images/${img}`} alt={name} className="single_item_img"/>
            <div className={`single_item_title ${checkNameLength()}`}>{name}</div>
            <div className="single_item_price font_20px_400">{price}$</div>
            <div className="amount">
                <button className={`flex_center ${changeBtnClass()}`} onClick={buyItem}>+</button>
                <div className={`number font_20px_400 flex_center ${checkAmountLength()}`}>{amount}</div>
                <button className="flex_center red" onClick={sellItem}>-</button>
            </div>
        </li>
    ) : null;
};

export default GoodsListItem;