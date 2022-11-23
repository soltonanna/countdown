import React, { Fragment } from 'react';

const Clock = ({timerDays, timerHours, timerMinutes, timerSeconds}) => {
  return (
    <Fragment>
        <div className="clock">
            <section>
                <p>{timerDays}</p>
                <span>Days</span>
            </section>
            <span>:</span>
            <section>
                <p>{timerHours}</p>
                <span>Hours</span>
            </section>
            <span>:</span>
            <section>
                <p>{timerMinutes}</p>
                <span>Minutes</span>
            </section>
            <span>:</span>
            <section>
                <p>{timerSeconds}</p>
                <span>Seconds</span>
            </section>
        </div>
    </Fragment>
  )
}

Clock.defaultProps = {
    timerDays: 10,
    timerHours: 10,
    timerMinutes: 10,
    timerSeconds: 10
}

export default Clock;