
const validateInput = (validatorFn) => {
    return (req, res, next) => {
        const { error, value } = validatorFn(req.body);

        if (error) {
            return res.status(400).send("Validation check is failed!: " + error.details[0].message);
        }

        req.body = value; 
        next();
    };
};

module.exports = { validateInput };