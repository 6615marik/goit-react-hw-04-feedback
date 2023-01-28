import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({
  goodIncrement,
  neutralIncrement,
  badIncrement,
}) => {
  return (
    <div className={css.btnContainer}>
      <button className={css.Btn} onClick={goodIncrement}>
        GOOD
      </button>
      <button className={css.Btn} onClick={neutralIncrement}>
        NEUTRAL
      </button>
      <button className={css.Btn} onClick={badIncrement}>
        BAD
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  badIncrement: PropTypes.func.isRequired,
  neutralIncrement: PropTypes.func.isRequired,
  goodIncrement: PropTypes.func.isRequired,
};
