import { useSelector } from "react-redux";

const Balance = () => {
    const {balance} = useSelector(state => state.balance);

    return <div className="balance">balance: {balance}$</div>
};

export default Balance;