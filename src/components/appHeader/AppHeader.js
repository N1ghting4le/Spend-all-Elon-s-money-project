import { useSelector } from "react-redux";

const AppHeader = () => {
    const {balance} = useSelector(state => state.money);

    return (
        <header className="flex_column">
            <img src={balance > 0 ? "images/Elon.jpg" : "images/elon_smokes.jpg"} alt="Elon" className="center"/>
            <h1 className="center">{balance > 0 ? "Can you spend all Elon's money?" : "Congratulations! You did it!"}</h1>
        </header>
    );
};

export default AppHeader;