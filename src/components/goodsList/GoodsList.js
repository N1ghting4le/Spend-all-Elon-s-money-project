import { useGetGoodsQuery } from "../../api/apiSlice";
import { useSelector } from 'react-redux';
import store from "../../store";
import { selectAll } from "../../slices/selectedGoodsSlice";

import GoodsListItem from "../goodsListItem/GoodsListItem";
import Spinner from "../spinner/Spinner";

const GoodsList = () => {
    const {
        data: response = {},
        isLoading,
        isError
    } = useGetGoodsQuery();

    const {activeFilter} = useSelector(state => state.filters);
    const selectedGoods = selectAll(store.getState());

    if (isLoading) return <Spinner/>;
    if (isError) return <h5 className="message flex_center">Loading error</h5>;
    
    const {goods} = response.record;

    const renderGoodsList = () => goods.map(item => <GoodsListItem key={item.id} 
                                                                   item={item} 
                                                                   hidden={activeFilter === 'all' ? false :
                                                                           activeFilter === 'selected' ?
                                                                           !selectedGoods.includes(item) :
                                                                           item.category !== activeFilter}/>);

    const elements = renderGoodsList();

    return (
        <>
            <ul className="items">
                {elements}
            </ul>
            {activeFilter === 'selected' && selectedGoods.length === 0 ? 
            <div className="message">You haven't selected any goods yet</div> : null}
        </>
    );
};

export default GoodsList;