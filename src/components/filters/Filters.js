import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { filters } from "../../constants/filters";
import { activeFilterChange } from "../../slices/filtersSlice";

const Filters = () => {
  const dispatch = useDispatch();
  const activeFilter = useSelector((state) => state.filters);

  const onActiveFilterChange = (filter) => (e) => {
    dispatch(activeFilterChange(filter));
  };

  const onFilterChangeByEnter = (filter) => (e) => {
    if (e.code === "Enter") {
      onActiveFilterChange(filter)(e);
    }
  };

  return (
    <ul className="white_bg">
      {filters.map((item) => (
        <li
          key={item}
          tabIndex={0}
          className={classNames(
            "single_filter",
            "flex_center",
            "font_20px_400",
            item === activeFilter && "active",
          )}
          onClick={onActiveFilterChange(item)}
          onKeyDown={onFilterChangeByEnter(item)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Filters;
