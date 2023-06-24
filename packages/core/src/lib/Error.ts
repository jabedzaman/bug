export default class SpotidlError extends Error {
  constructor(public message: string, public name = "TypeError") {
    super();
    Error.captureStackTrace(this, this.constructor);
  }
}
