import React, { Component } from "react";
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  
  buttonClick = (type) => {
    this.setState(prevState => ({
        [type]: prevState[type] + 1,
      }));
  }

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;

  }

  countPositiveFeedbackPercentage(tot, g) {
    return Math.round((g / tot) * 100)
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const goodPercentage = total > 0 ? this.countPositiveFeedbackPercentage(total, good) : 0;
    return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 30,
        height: '100vh',
        padding: 40,
        fontSize: 30,
        color: '#010101'
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions options={this.state} onLeaveFeedback={this.buttonClick}/>
      </Section>
      
      <Section title="Statistics">
      {(total !== 0) ? (
        <Statistics 
          good={good} 
          neutral={neutral} 
          bad={bad} 
          total={total} 
          positivePercentage={goodPercentage}/>
        ) : (
        <Notification message={"There is no feedback"}></Notification>
        )}
      </Section>
    </div>
  );
  }
}

