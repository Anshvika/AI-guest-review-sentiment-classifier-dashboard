function errorHandler(err, req, res, next) {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    console.error(
        `[ERROR] ${req.method} ${req.originalUrl} -> ${statusCode}: ${message}`
    );

    if (process.env.NODE_ENV !== "production") {
        console.error(err.stack);
    }

    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
        timestamp: new Date().toISOString(),
    });
}

function notFoundHandler(req, res, next) {
    res.status(404).json({
        success: false,
        statusCode: 404,
        message: `Route not found: ${req.method} ${req.originalUrl}`,
        timestamp: new Date().toISOString(),
    });
}

module.exports = {
    errorHandler,
    notFoundHandler,
};