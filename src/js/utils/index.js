export const getDate = () => {
  const timestamp = new Date();

  const options = { hour: '2-digit', minute: '2-digit' };

  const date = timestamp.toLocaleTimeString('en-us', options);

  return date;
};

export const getMilliSecondsLeft = () => {
  const seconds = new Date().getSeconds();

  const milliSecondsLeft = (60 - seconds) * 1000;

  return milliSecondsLeft;
};
