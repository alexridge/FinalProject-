const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }

});

UserSchema.statics.signup = async function (email, password) {

    const exists = await this.findOne({ email });

    if (exists) {
        throw Error('Email is already in use')
    } else {
        const user = await this.create({ email, password });

        return user
    }
};

const User = mongoose.model("User", UserSchema);
module.exports = User;
