const moment = require("jalali-moment");

class RabaniLogger {
  constructor() {
    this.throwLoggedError = this.throwLoggedError;
  }

  throwLoggedError(errorMessage, logInfo) {
    console.log(logInfo);
    throw new Error(errorMessage);
  }

  getDefaultLogValues() {
    return {
      time: new Date(),
      route: location.href,
    };
  }
}

export default new RabaniLogger();
