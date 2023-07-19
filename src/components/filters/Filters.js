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

    const isSelected = (str) => {
        return str === activeFilter ?
        classNames({
            'active': true
        }) :
        classNames({
            'active': false
        });
    }

    const renderFiltersList = () => filters.map(item => <li tabIndex={0} 
                                                            className={`single_filter ${isSelected(item)}`}
                                                            onClick={onActiveFilterChange}
                                                            onKeyDown={onFilterChangeByEnter}>{item}</li>);

    const elements = renderFiltersList();

    return (
        <div className="filters">
            <div className="title">filters:</div>
            <ul>
                {elements}
            </ul>
        </div>
    );
};

export default Filters;
