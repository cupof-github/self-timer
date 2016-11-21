import React from 'react';
import ReactDOM from 'react-dom';

// on()
import Sunday from '../code/on/sunday';
import Weekdays from '../code/on/weekdays';
import Weekend from '../code/on/weekend';
import Selects from '../code/on/selects';
import Annual from '../code/on/annual';
import DetesBetween from '../code/on/datesbetween';

// at()
import AtBetween from '../code/at/between';
import AtUnless from '../code/at/unless';
import AtHour from '../code/at/hour';
import AtHoursBetween from '../code/at/hoursbetween';

// in()
import InDay from '../code/in/day';
import InDays from '../code/in/days';
import InDaysBetween from '../code/in/daysbetween';
import InMonth from '../code/in/month';
import InMonthSelects from '../code/in/monthselects';
import InYear from '../code/in/year';

// is()
import IsTrue from '../code/is/true';
import IsFalse from '../code/is/false';
import IsLanguage from '../code/is/language';
import IsLang from '../code/is/lang';


// implement id for extract components
const id = 'functions';

class Code extends React.Component {
    render() {
        return (
            <div>
              <Sunday/>
              <Weekdays/>
              <Weekend/>
              <Selects/>
              <Annual/>
              <DetesBetween/>

              <AtBetween/>
              <AtUnless/>
              <AtHour/>
              <AtHoursBetween/>

              <InDay/>
              <InDays/>
              <InDaysBetween/>
              <InMonth/>
              <InMonthSelects/>
              <InYear/>

              <IsTrue />
              <IsFalse />
              <IsLanguage />
              <IsLang />
              

            </div>
        )
    }
}

ReactDOM.render(
    <Code/>, document.getElementById(id));
