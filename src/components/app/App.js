import AppHeader from "../appHeader/AppHeader";
import Balance from "../balance/Balance";
import Filters from "../filters/Filters";
import GoodsList from "../goodsList/GoodsList";
import Total from "../total/Total";

const App = () => {
  return (
    <>
      <AppHeader/>
      <Balance/>
      <main>
        <div className="wrapper">
          <Filters/>
          <GoodsList/>
        </div>
        <Total/>
      </main>
    </>
  );
};

export default App;
