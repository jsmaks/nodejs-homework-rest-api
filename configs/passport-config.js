const passport = require("passport");
const {ExtractJwt, Strategy} = require("passport-jwt");
require("dotenv").config();
const {user: service} = require("../services")
const {SECRET_KEY} = process.env;

const setting = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: SECRET_KEY
}
const jwtStrategy = new Strategy(setting, async (payload, done) => {
    console.log(payload)
    try {
        const user = await service.getById(payload.id);
        if(!user ) {
            throw new Error("Not found .")
        }
        done(null, user)
    } catch (error) {
        done(error)
    }   
   
})
passport.use("jwt", jwtStrategy)