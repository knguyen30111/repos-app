const handleAPIErrors = (defaultMessage, err?, onlyReturnsMsg?: boolean) => {
  // always log error to the console
  if (err) console.log(err);
  /**
   * if backend is a good boy, err.response.message will be printed
   * if backend is a bad boy, defaultMessage will be printed
   */
  if (!onlyReturnsMsg) {
    if (err && err.response && err.response.message) {
      alert(err.response.message);
    } else if (err && err.message) {
      alert(err.message);
    } else if (err) {
      alert(err);
    } else {
      alert(defaultMessage);
    }
  } else {
    if (err && err.response && err.response.message) {
      return err.response.message;
    } else if (err && err.message) {
      return err.message;
    } else if (err) {
      return err;
    } else {
      return defaultMessage;
    }
  }
};
export default handleAPIErrors;
