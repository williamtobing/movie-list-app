import { useDispatch } from "react-redux";
import { inputYear } from "../actions";

const Filter = ({ year }) => {
  const dispatch = useDispatch();

  return (
    <div className="filter">
      {year.map((perYear) => {
        return (
          <p key={perYear} onClick={() => dispatch(inputYear(perYear))}>
            {perYear}
          </p>
        );
      })}
    </div>
  );
};

export default Filter;
