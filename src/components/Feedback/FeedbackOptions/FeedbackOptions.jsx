const FeedbackOptions = ({ options, onOptinClick }) => {
  return options.map(option => {
    return (
      <button type="button" key={option} onClick={() => onOptinClick(option)}>
        {option}
      </button>
    );
  });
};

export default FeedbackOptions;
