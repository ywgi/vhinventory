import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    }, 
    lastName: {
        type: String, 
        required: true,
    },
    email:  {
        type: String,
        required: true,
        match: [/^[a-zA-Z0-9._%+-]+@verhoefautomotive\.com$/, 'Email must be from verhoefautomotive.com domain'],
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        match: [/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character',]
    }
});

const User = model('User', userSchema);

export default User;