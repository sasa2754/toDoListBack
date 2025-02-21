import mongoose, { Schema, Document, Date } from 'mongoose';


interface IUser extends Document {
    email: string;
    password: string;
}

const userSchema : Schema = new Schema({
    email: { type: String, require: true },
    password: { type: String, require: true }
});

const User = mongoose.model<IUser>('User', userSchema);

export default User; 
