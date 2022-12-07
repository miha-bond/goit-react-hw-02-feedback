import React from 'react';
import Section from './Feedback/Section/Section';
import Statistics from './Feedback/Statistics/Statistics';
import Notification from './Feedback/Notification/Notification';
import FeedbackOptions from './Feedback/FeedbackOptions/FeedbackOptions';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  hendelOption = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedbeack = () => {
    let total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  positivePercentage = () => {
    let positive =
      this.state.good / (this.state.good + this.state.neutral + this.state.bad);
    return positive ? positive * 100 : '';
  };

  render() {
    return (
      <div>
        <Section title="Please leave feadback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onOptinClick={this.hendelOption}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedbeack() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedbeack()}
              positive={this.positivePercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
