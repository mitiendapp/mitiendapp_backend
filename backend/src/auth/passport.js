"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = require("passport");
const passport_jwt_1 = require("passport-jwt");
const models_1 = require("../models");
passport_1.default.use(new passport_jwt_1.Strategy({
    jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "12345",
}, (jwtPayLoad, done) => {
    return models_1.default.User.findOne({
        where: {
            id: jwtPayLoad.id
        }
    })
        .then((user) => {
        return done(null, user);
    })
        .catch((err) => {
        return done(err);
    });
}));
