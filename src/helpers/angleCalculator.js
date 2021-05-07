export const angleCalculator = (time) => {
  const hours = +time.split(":")[0]; //Will get the Hours from the state and covert it to number 20
  const minutes = +time.split(":")[1]; //Will get the Minutes from the state and covert it to number
  const hoursTo12 = ((hours + 11) % 12) + 1; //Coverting 24h format to 12h to make the calculation simple
  const hour_angle = 0.5 * (hoursTo12 * 60 + minutes);
  const minute_angle = 6 * minutes;
  const angle = Math.abs(hour_angle - minute_angle);
  return Math.min(360 - angle, angle);;
  // //Result explanation:
  // //The analog clock is a circle with 360deg. Means 360/12(hour) = 30deg for each hour
  // // Every hour is 60 minutes. so each minute will be 30/60 = 0.5deg
  // //(minutes * 6) means, as the hour handle moves, the minutes handle will move too. We should consider these movements. Between each hour on the clock, we have 6 points. for example between 2 and 3, we have 6 points, the first point is on 2 and the last point is on 3
  // //Math.abs will help us to get rid of the negative angles
};
