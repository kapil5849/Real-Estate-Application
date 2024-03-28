export const errorHandler = (statusCode,message)=>{ // create a function that takes in a status code and a message
    const error = new Error(); // create a new error object
    error.statusCode = statusCode; // set the status code of the error object
    error.message = message; // set the message of the error object
    return error; // return the error object
}