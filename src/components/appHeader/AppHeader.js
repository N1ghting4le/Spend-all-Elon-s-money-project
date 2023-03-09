import { useSelector } from "react-redux";

const AppHeader = () => {
    const {balance} = useSelector(state => state.balance);

    return (
        <header className="header">
            <img src={balance > 0 ? "images/Elon.jpg" : "images/elon_smokes.jpg"} alt="Elon" className="Elon"></img>
            <h1>{balance > 0 ? "Can you spend all Elon's money?" : "Congratulations! You did it!"}</h1>
        </header>
    );
};

export default AppHeader;