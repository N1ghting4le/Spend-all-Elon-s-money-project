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
        <div className="title font_24px_600 flex_center">filters:</div>
        <div className="title font_24px_600 flex_center">goods:</div>
        <Filters/>
        <div className="flex_column white_bg">
          <GoodsList/>
        </div>
      </div>
    </>
  );
};

export default App;
