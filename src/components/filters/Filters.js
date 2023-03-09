import { activeFilterChange } from "../../slices/filtersSlice";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

const Filters = () => {
    const dispatch = useDispatch();
    const {activeFilter} = useSelector(state => state.filters);

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
            'single_filter': true,
            'active': true
        }) :
        classNames({
            'single_filter': true,
            'active': false
        })
    }

    return (
        <div className="filters">
            <div className="title">filters:</div>
            <ul>
                <li className={isSelected('all')} 
                    onClick={onActiveFilterChange}
                    onKeyDown={onFilterChangeByEnter}
                    tabIndex={1}>all</li>
                <li className={isSelected('vehicles')} 
                    onClick={onActiveFilterChange}
                    onKeyDown={onFilterChangeByEnter}
                    tabIndex={2}>vehicles</li>
                <li className={isSelected('food')} 
                    onClick={onActiveFilterChange}
                    onKeyDown={onFilterChangeByEnter}
                    tabIndex={3}>food</li>
                <li className={isSelected('gaming')} 
                    onClick={onActiveFilterChange}
                    onKeyDown={onFilterChangeByEnter}
                    tabIndex={4}>gaming</li>
                <li className={isSelected('computer components')} 
                    onClick={onActiveFilterChange}
                    onKeyDown={onFilterChangeByEnter}
                    tabIndex={5}>computer components</li>
                <li className={isSelected('selected')} 
                    onClick={onActiveFilterChange}
                    onKeyDown={onFilterChangeByEnter}
                    tabIndex={6}>selected</li>
            </ul>
        </div>
    );
};

export default Filters;
