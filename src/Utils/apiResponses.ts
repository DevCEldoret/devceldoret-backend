import { Response } from "express";

class Responses {
  successMessage(response: Response, statusCode: number, message: String) {
    try {
      return response
        .status(statusCode)
        .send({ status: statusCode, message: message });
    } catch (error) {
      return response
        .status(statusCode)
        .send({ status: statusCode, message: error });
    }
  }
  successWithPayload(
    response: Response,
    statusCode: number,
    message: String,
    payload: Object
  ) {
    try {
      return response
        .status(statusCode)
        .send({ status: statusCode, message: message, data: payload });
    } catch (error) {}
  }
  errorMessage(response: Response, statusCode: number, message: String) {
    try {
      return response
        .status(statusCode)
        .send({ status: statusCode, message: message });
    } catch (error) {
      return response
        .status(statusCode)
        .send({ status: statusCode, message: error });
    }
  }
}

const prompt = new Responses();

export default prompt;
