import { useSelector } from "react-redux";

const Money = () => {
    const {balance, total} = useSelector(state => state.money);

    return (
        <div className="money">
            <div className="balance">balance: {balance.toFixed(1)}$</div>
            <div className="line"/>
            <div className="balance">total: {total >= 0 ? total.toFixed(1) : total.toFixed(1).slice(1)}$</div>
        </div>
    );
}

export default Money;