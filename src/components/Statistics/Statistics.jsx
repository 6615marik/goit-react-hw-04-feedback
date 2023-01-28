import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ values }) => {
  return (
    <div>
      <h3>Statistics</h3>
      <ul className={css.statList}>
        {values.map(([name, value]) => (
          <li key={name}>
            {name}: {value}
          </li>
        ))}
      </ul>
    </div>
  );
};
Statistics.propTypes = {
  values: PropTypes.arrayOf(PropTypes.array).isRequired,
};
