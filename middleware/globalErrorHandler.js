module.exports.errorHandler = (err, req, res, next) => {
    if (err) {
        res.status(400).json({ status: false, error: err.message });
    }
    next();
}