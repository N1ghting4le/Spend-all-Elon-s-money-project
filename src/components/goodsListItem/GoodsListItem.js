import { useState, useCallback } from "react";
import { balanceDecrease, balanceIncrease } from "../../slices/balanceSlice";
import { totalDecrease, totalIncrease } from "../../slices/totalSlice";
import { addItem, removeItem } from "../../slices/selectedGoodsSlice";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

const GoodsListItem = ({item, hidden}) => {
    const {id, name, price, img} = item;
    const dispatch = useDispatch();
    const {balance} = useSelector(state => state.balance);
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
        })
    }, [price, balance]);

    const listItemClass = useCallback(() => {
        return hidden ?
        classNames({
            'single_item': false,
            'hidden': true
        }) :
        classNames({
            'single_item': true,
            'hidden': false
        })
    }, [hidden]);

    const checkNameLength = useCallback(() => {
        return name.length >= 29 ?
        classNames({
            'single_item_title': true,
            'long': true
        }) :
        classNames({
            'single_item_title': true,
            'long': false
        })
    }, [name]);

    const checkAmountLength = useCallback(() => {
        return amount >= 10000 ?
        classNames({
            'number': true,
            'long_num': true,
        }) :
        classNames({
            'number': true,
            'long_num': false
        })
    }, [amount]);

    const onBalanceIncrease = (num) => {
        if (amount > 0) {
            dispatch(balanceIncrease(num));
            dispatch(totalDecrease(num));
            if (amount === 1) {
                dispatch(removeItem(id));
            }
            setAmount(amount => amount - 1);
        }
    }

    const onBalanceDecrease = (num) => {
        if (balance >= num) {
            dispatch(balanceDecrease(num));
            dispatch(totalIncrease(num));
            if (amount === 0) {
                dispatch(addItem(item));
            }
            setAmount(amount => amount + 1);
        }
    }

    return (
        <li className={listItemClass()}>
            <img src={`images/${img}`} alt={name} className="single_item_img"></img>
            <div className={checkNameLength()}>{name}</div>
            <div className="single_item_price">{price}$</div>
            <div className="amount">
                <button className={changeBtnClass()} onClick={() => onBalanceDecrease(price)}>+</button>
                <div className={checkAmountLength()}>{amount}</div>
                <button className="red" onClick={() => onBalanceIncrease(price)}>-</button>
            </div>
        </li>
    );
};

export default GoodsListItem;