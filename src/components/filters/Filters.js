import { activeFilterChange } from "../../slices/filtersSlice";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

const Filters = () => {
    const dispatch = useDispatch();
    const {filters, activeFilter} = useSelector(state => state.filters);

    const onActiveFilterChange = (e) => {
        dispatch(activeFilterChange(e.target.textContent));
    }

    const onFilterChangeByEnter = (e) => {
        if (e.code === 'Enter') {
            onActiveFilterChange(e);
        }
    }

    const isSelected = (str) => classNames({
        'active': str === activeFilter
    });

    const renderFiltersList = () => filters.map(item => (
        <li tabIndex={0} 
            className={`single_filter flex_center font_20px_400 ${isSelected(item)}`}
            onClick={onActiveFilterChange}
            onKeyDown={onFilterChangeByEnter}>{item}</li>
    ));

    const elements = renderFiltersList();

    return (
        <ul className="white_bg">
            {elements}
        </ul>
    );
};

export default Filters;
