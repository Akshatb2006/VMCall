 import mongoose from "mongoose";
 import bcrypt from "bcryptjs";

 const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,

    },
    bio: {
        type: String,
        default: "Hello, I am using this app!",
    },
    profilePicture: {
        type: String,
        default: "https://www.w3schools.com/howto/img_avatar.png",
    },
    nativeLanguage: {
        type: String,
        default: "English",
    },
    learningLanguage: {
        type: String,
        default: "English",
    },
    location: {
        type: String,
        default: "",
    },
    isOnboarded: {
        type: Boolean,
        default: false,
    },
    friends: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }]
 }, {timestamps: true});

 userSchema.pre("save", async function (next) {

    if (!this.isModified("password")) return next();
    try{
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
})

userSchema.methods.matchPassword = async function (enteredPassword) {
    const isPasswodCorrect = await bcrypt.compare(enteredPassword, this.password);
    return isPasswodCorrect;
};

 const User = mongoose.model("User", userSchema);
 
    
 export default User;