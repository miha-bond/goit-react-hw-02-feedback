import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onOptinClick }) => {
  return options.map(option => {
    return (
      <button
        className={css.button}
        type="button"
        key={option}
        onClick={() => onOptinClick(option)}
      >
        {option}
      </button>
    );
  });
};

export default FeedbackOptions;
