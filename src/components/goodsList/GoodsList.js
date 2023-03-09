import { useGetGoodsQuery } from "../../api/apiSlice";
import { useSelector } from 'react-redux';
import store from "../../store";
import { selectAll } from "../../slices/selectedGoodsSlice";

import GoodsListItem from "../goodsListItem/GoodsListItem";

const GoodsList = () => {
    const {
        data: goods = []
    } = useGetGoodsQuery();

    const {activeFilter} = useSelector(state => state.filters);
    const selectedGoods = selectAll(store.getState());

    const renderGoodsList = () => {
        if (activeFilter === 'all') {
            return goods.map(item => {
                return <GoodsListItem key={item.id} item={item} hidden={false}/>;
            });
        } else if (activeFilter === 'selected') {
            return goods.map(item => {
                if (selectedGoods.includes(item)) {
                    return <GoodsListItem key={item.id} item={item} hidden={false}/>;
                } else {
                    return <GoodsListItem key={item.id} item={item} hidden={true}/>;
                }
            });
        } else {
            return goods.map(item => {
                if (item.category === activeFilter) {
                    return <GoodsListItem key={item.id} item={item} hidden={false}/>;
                } else {
                    return <GoodsListItem key={item.id} item={item} hidden={true}/>;
                }
            });
        }
    };

    const elements = renderGoodsList();

    return (
        <div className="goods">
            <div className="title">goods:</div>
            <ul className="items">
                {elements}
            </ul>
            {activeFilter === 'selected' ? 
            selectedGoods.length > 0 ? null : <div className="message">You haven't selected any goods yet</div> : 
            null}
        </div>
    );
};

export default GoodsList;