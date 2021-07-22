
const passport = require("passport");

// const useAuth = passport.authenticate("jwt", {session: false}, (error, user) => {
//     console.log(error);
//     console.log(user);
// })
const useAuth = (req, res, next) => {
     passport.authenticate("jwt", {session: false}, (error, user) => {
        if(error || !user || !user.token){
            res.status(401).json({
                status: "error",
                code: 401,
                message: "Unauthorized"
            })
            return;
        }
        req.user = user;
        next();
    })(req, res, next);
}

module.exports = useAuth;