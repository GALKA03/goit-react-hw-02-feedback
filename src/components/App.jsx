//import classNames from "classnames";
import { Component } from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import {Section} from "./Section/Section"
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
     console.log(keyName)
   }
  
  // handelKlickNeutral = () =>{
  // this.setState({
  //     neutral: this.state.neutral +1,
  //   })
  // }

   countTotalFeedback = () => {
     const { good, neutral, bad }= this.state;
   return   good + neutral + bad
 
 //  countTotalFeedback = () =>
    //Object.values(this.state).reduce((total, item) => total + item, 0);
  }
    
   countPositiveFeedbackPercentage = () => {
   const total = this.onKlickOptions()
     const { good } = this.state;
     const percent = (good * 100) / total;
     return Math.round(percent);
   }
  
//     onLeaveFeedback = () => {
//      const keys = Object.keys(this.state)
//      for (const key of keys) {
//   // Ключ
//   console.log(key);
//   // Значение свойства
 
// }
//   }
   render() {
     const { good, bad, neutral } = this.state;
     const total = this.countTotalFeedback();
     const positivePercentage = this.countPositiveFeedbackPercentage();
     return (
       <div>
      <Section title="Please Leave Feetback">
           <FeedbackOptions onLeaveFeedback={this.onKlickOptions} options={this.state}/> 
        </Section>
         <Section title="Statistics">
        
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total= {total}
            positive feetback={positivePercentage}/>
    </Section>
  </div>
  );
}


};

export default App;
