

const {check, validationResult}=require("express-validator");
exports.signUpRules=()=>[
    check("fullName","this field is required").notEmpty(),
    check("email",'this should be a valid email').isEmail(),
    check("password","this should be at least 6 digets").isLength({min:6})
];
exports.validator=(req,res,next)=>{
    const errors=validationResult(req);
    return errors.isEmpty()?next():res.status(415).json({errors: errors.array()});
};