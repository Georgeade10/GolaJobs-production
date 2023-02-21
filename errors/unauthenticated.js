import { StatusCodes } from 'http-status-codes/build/cjs/status-codes.js';
import CustomAPIError from './custom-api.js';

class UnAuthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

export default UnAuthenticatedError;
