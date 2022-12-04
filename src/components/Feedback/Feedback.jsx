import Section from 'components/Section/Section';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import React from 'react';

import { css } from './Feedback.module.css';

export class Feedback extends React.Component {
  state = {
    good: 0,
    neutrala: 0,
    bad: 0,
  };

  render() {
    return (
      <Section title="Statistics">
        <Statistics
          good={this.state.good}
          neutral={this.state.neutrala}
          bad={this.state.bad}
          // total={}
          // positivePercentage={}
        />
      </Section>
    );
  }
}
