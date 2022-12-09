//import classNames from "classnames";
import { Component } from "react";
import { Statistics } from "./components/Statistics/Statistics";
import { FeedbackOptions } from "./components/FeedbackOptions/FeedbackOptions";
import { Section } from "./components/Section/Section"
import {Notification}  from "./components/Notificstion/Notification"
 class  App extends Component{
state = {
  good: 0,
  neutral: 0,
  bad: 0,
}

   onKlickOptions = keyName => {
     this.setState(prevState => 
({ [keyName]: prevState[keyName] + 1})  
     )
     //console.log(Object.keys() )
   }
   countTotalFeedback = () => {
     const { good, neutral, bad }= this.state;
   return   good + neutral + bad
 //  countTotalFeedback = () =>
    //Object.values(this.state).reduce((total, item) => total + item, 0);
  }
    
   countPositiveFeedbackPercentage = () => {
     const total = this.countTotalFeedback();
     const { good } = this.state;
     const percent = (good * 100) / total;
     return Math.round(percent);
   }
   hideSection = () => {
     if (this.state.value === 0) {
       this.setState({True: true})
     }
     
  }
   render() {
     const { good, bad, neutral } = this.state;
     const total = this.countTotalFeedback();
     const positivePercentage = this.countPositiveFeedbackPercentage();
     //const ObjVal = Object.value;
     return (
       <>
         <Section title="Please Leave Feetback">
           <FeedbackOptions onLeaveFeedback={this.onKlickOptions} options={this.state} />
         </Section>
         <Section title="Statistics">
           {total > 0 ? ( 
             <Statistics
             good={good}
             neutral={neutral}
             bad={bad}
             total={total}
             positiveFeedback={positivePercentage} />)
          : <Notification message="There is no feedback" />}
    </Section> 
       </>)
   }

};

export default App;
