export const errorHandler = (status,message) => {
    const err = new Error();
    err.status = status;
    err.message = message;
    err.Stack = err.stack;
    return err;
}