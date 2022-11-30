export const globalError = (error,_req,res,next) => {
    const errorStatus = error.status || 500;
    const errorMessage = error.message || "Unknown Error Happen on Server";
    return res.status(errorStatus).json({
        status: errorStatus,
        message: errorMessage,
    });
}