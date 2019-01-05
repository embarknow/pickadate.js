// @flow

import createCycleHourActor from './createCycleHourActor'

const cycleHourUpActor = createCycleHourActor(hoursInMeridiem =>
  hoursInMeridiem === 11 ? 0 : hoursInMeridiem + 1
)

export default cycleHourUpActor