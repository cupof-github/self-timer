import React from 'react';
import ReactDOM from 'react-dom';

var day = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

// var week = ['weekday', 'weekend'];

class ListFunction extends React.Component {

    render() {
        return (
            <div>
              <h3>.on()</h3>
              <ul>
                {day.map((name, index) => {
                  return <li key={index}>
                    <a href={'#onSunday'}>
                      {name}( task )</a>
                  </li>;
                })}


              </ul>

              <ul>
                <li>
                  <a href="#onWeekdays">
                    Weekdays( task )
                  </a>
                </li>
                <li>
                  <a href="#onWeekend">
                    Weekend( task )
                  </a>
                </li>
                <li>
                  <a href="#onSelects">
                    Selects( daysOfTheWeek, task )
                  </a>
                </li>
              </ul>

              <ul>
                <li>
                  <a href="#onAnnual">
                    Annual( date, task )
                  </a>
                </li>
                <li>
                  <a href="#onDatesBetween">
                    DatesBetween( from, to, task )
                  </a>
                </li>
              </ul>

              <h3>.at()</h3>
              <ul>
                <li>
                  <a href="#atBetween">
                    Between( from, to, task )
                  </a>
                </li>
                <li>
                  <a href="#atUnless">
                    Unless( from, to, task )
                  </a>
                </li>
                <li>
                  <a href="#atHour">
                    Hour( hour, task )
                  </a>
                </li>
                <li>
                  <a href="#atHoursBetween">
                    HoursBetween( from, to, task )
                  </a>
                </li>

              </ul>

              <h3>.in()</h3>
              <ul>
                <li>
                  <a href="#inDay">
                    Day( day, task )
                  </a>
                </li>
                <li>
                  <a href="#inDays">
                    Days( days, task )
                  </a>
                </li>
                <li>
                  <a href="#inDaysBetween">
                    DaysBetween( from, to, task )
                  </a>
                </li>

              </ul>


              <ul>
                <li>
                  <a href="#inMonth">
                    Month( month, task )
                  </a>
                </li>
                
                <li>
                  <a href="#inMonthSelects">
                    MonthSelects( months, task )
                  </a>
                </li>
              </ul>

              <ul>
                <li>
                  <a href="#inYear">
                    Year( year, task )
                  </a>
                </li>
              </ul>

              <h3>.is()</h3>
              <ul>
                <li>
                  <a href="#isTrue">
                    True( condition, task )
                  </a>
                </li>
                <li>
                  <a href="#isFalse">
                    False( condition, task )
                  </a>
                </li>
                <li>
                  <a href="#isLanguage">
                    Language( language, task )
                  </a>
                </li>
                <li>
                  <a href="#isLang">
                    Lang( language, task )
                  </a>
                </li>
              </ul>

            </div>
        );
    };
};
ReactDOM.render(
    <ListFunction/>, document.getElementById('list-functions'));
