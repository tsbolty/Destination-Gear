const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
        type: String,
        trim: true,
        unique: true,
        required: "Username is Required"
    },
  firstName: {
        type: String,
        ref: "firstName"
    },
    lastName: {
        type: String,
        ref: "lastName"
    },
    email: {
        type:  String,
        unique: true,
        match: [/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/, "Please enter a valid e-mail address"]
    },
    phoneNumber: {
        type: Number,
        unique: true
    },
    password: {
        type: String,
        unique: false,
        validate: {
            validator: function (v) {
                return /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(v);
            },
            message: props => `${props.value} is not a valid password`
        },
        required: "password is required"
    },
    notes: [{
        type: Schema.Types.ObjectId,
        ref: "Note"
    }],
    userCreated: {
        type: Date,
        default: Date.now
    }
});

UserSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}
  
UserSchema.methods.validPassword = function (password, encrypted) {
    return bcrypt.compareSync(password, encrypted);
}

const User = mongoose.model("User", UserSchema);

module.exports = User;
