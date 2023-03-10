import { useSelector } from "react-redux";

const Total = () => {
    const {total} = useSelector(state => state.total);

    return <div className="balance">total: {total}$</div>;
};

export default Total;