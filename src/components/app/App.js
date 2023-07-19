import AppHeader from "../appHeader/AppHeader";
import Money from "../money/Money";
import Filters from "../filters/Filters";
import GoodsList from "../goodsList/GoodsList";

const App = () => {
  return (
    <>
      <AppHeader/>
      <Money/>
      <div className="wrapper">
        <Filters/>
        <GoodsList/>
      </div>
    </>
  );
};

export default App;
