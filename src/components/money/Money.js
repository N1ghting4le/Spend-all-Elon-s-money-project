import { useSelector } from "react-redux";

const formatMoney = (amount) => `${amount.toFixed(2)}$`;

const Money = () => {
  const { balance, total } = useSelector((state) => state.money);

  return (
    <div className="money">
      <div className="balance font_24px_600 white_bg flex_center">
        balance: {formatMoney(balance)}
      </div>
      <div className="balance font_24px_600 white_bg flex_center">
        spent: {formatMoney(total)}
      </div>
    </div>
  );
};

export default Money;
