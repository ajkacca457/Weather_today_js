const Timeconvert = (time) => {
  const date = new Date(time * 1000);
  const hour = date.getHours();
  let min = date.getMinutes();
  min = min < 10 ? `0${min}` : min;
  const ntime = `${hour}: ${min}`;
  return ntime;
};


export default Timeconvert;
