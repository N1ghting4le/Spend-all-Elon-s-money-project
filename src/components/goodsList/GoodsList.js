import { useSelector } from "react-redux";
import { useGetGoodsQuery } from "../../api/apiSlice";
import { selectAll } from "../../slices/selectedGoodsSlice";

import GoodsListItem from "../goodsListItem/GoodsListItem";
import Spinner from "../spinner/Spinner";

const GoodsList = () => {
  const { data: goods, isLoading, isError } = useGetGoodsQuery();
  const activeFilter = useSelector((state) => state.filters);
  const selectedGoods = useSelector(selectAll);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h5 className="message flex_center">Loading error</h5>;
  }

  return (
    <>
      <ul className="items">
        {goods.map((item) => {
          const isHidden =
            activeFilter !== "all" &&
            (activeFilter === "selected"
              ? !selectedGoods.includes(item)
              : item.category !== activeFilter);

          return <GoodsListItem key={item.id} item={item} hidden={isHidden} />;
        })}
      </ul>
      {activeFilter === "selected" && selectedGoods.length === 0 && (
        <div className="message">You haven't selected any goods yet</div>
      )}
    </>
  );
};

export default GoodsList;
