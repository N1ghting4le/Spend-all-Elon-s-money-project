import { useSelector } from "react-redux";

const AppHeader = () => {
  const { balance } = useSelector((state) => state.money);
  const isPositiveBalance = balance > 0;

  return (
    <header className="flex_column">
      <img
        src={isPositiveBalance ? "images/Elon.jpg" : "images/elon_smokes.jpg"}
        alt="Elon"
        className="center"
      />
      <h1 className="center">
        {isPositiveBalance
          ? "Can you spend all Elon's money?"
          : "Congratulations! You did it!"}
      </h1>
    </header>
  );
};

export default AppHeader;
