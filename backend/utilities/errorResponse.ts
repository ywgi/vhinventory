export const errorResponse = (err : Error) => {
    return({
        success: false,
        message: "Failure to communicate with server.",
        error: err
    });
}