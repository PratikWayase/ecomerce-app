

import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    cartData: { type: Object, default: {} }

}, { minimize: false })

const UserModel = mongoose.models.user || mongoose.model('user', UserSchema)

export default UserModel