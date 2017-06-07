import {
  ValidationErrorParams
} from '../types';


class ValidationError extends Error {

  public message: string;
  public errorAttribute: string;
  public errors: Error[];

  constructor(params: ValidationErrorParams) {
    super();

    const {
      message,
      errorAttribute,
      errors
    } = params;

    this.message = message;
    this.errorAttribute = errorAttribute;
    this.errors = errors;
  }
}


export default ValidationError;
