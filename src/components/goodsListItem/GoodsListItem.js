import { useState, useCallback } from "react";
import { sell, buy } from "../../slices/moneySlice";
import { addItem, removeItem } from "../../slices/selectedGoodsSlice";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

const GoodsListItem = ({item, hidden}) => {
    const {id, name, price, img} = item;
    const dispatch = useDispatch();
    const {balance} = useSelector(state => state.money);
    const [amount, setAmount] = useState(0);

    const changeBtnClass = useCallback(() => {
        return price > balance ?
        classNames({
            'green': false,
            'red': true
        }) :
        classNames({
            'green': true,
            'red': false
        });
    }, [price, balance]);

    const checkNameLength = useCallback(() => {
        return name.length >= 29 ?
        classNames({
            'long': true
        }) :
        classNames({
            'long': false
        });
    }, [name]);

    const checkAmountLength = useCallback(() => {
        return amount >= 10000 ?
        classNames({
            'long_num': true
        }) :
        classNames({
            'long_num': false
        });
    }, [amount]);

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
            <div className="single_item_price">{price}$</div>
            <div className="amount">
                <button className={changeBtnClass()} onClick={buyItem}>+</button>
                <div className={`number ${checkAmountLength()}`}>{amount}</div>
                <button className="red" onClick={sellItem}>-</button>
            </div>
        </li>
    ) : null;
};

export default GoodsListItem;