class ErrorHandler extends Error {
  status: number;
    constructor(message:string, status:number) {
      super(message);
      this.status = status;
    }
  }
  
  export default ErrorHandler;
  