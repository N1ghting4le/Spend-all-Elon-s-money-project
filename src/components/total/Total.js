import { useSelector } from "react-redux";

const Total = () => {
    const {total} = useSelector(state => state.total);

    return <div className="total">total: {total}$</div>;
};

export default Total;