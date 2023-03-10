import AppHeader from "../appHeader/AppHeader";
import Balance from "../balance/Balance";
import Filters from "../filters/Filters";
import GoodsList from "../goodsList/GoodsList";
import Total from "../total/Total";

const App = () => {
  return (
    <>
      <AppHeader/>
      <div className="money">
        <Balance/>
        <div className="line"></div>
        <Total/>
      </div>
      <div className="wrapper">
        <Filters/>
        <GoodsList/>
      </div>
    </>
  );
};

export default App;
