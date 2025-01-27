const mongoose = require('mongoose');
const validator = require('validator');

const formSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name'],
        trim: true,
        maxlength: [50, 'Name cannot exceed 50 characters'],
        validator(value) {
            if (!validator.isAlpha(value)) {
                throw new Error('Name can only contain letters');
            }
        }
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        trim: true,
        unique: [true, 'Email already exists'],
        lowercase: [true, 'Email must be in lowercase'],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Invalid email');
            }
        }
    },
    phone: {
        type: String,
        required: [true, 'Please enter your phone number'],
        trim: true,
        unique: [true, 'Phone number already exists'],
        validate(value) {
            if (!validator.isMobilePhone(value, 'en-IN')) {
                throw new Error('Invalid phone number');
            }
        },
        minlength: [10, 'Phone number must be 10 digits'],
        maxlength: [10, 'Phone number must be 10 digits']
    },
    packages: {
        type: String,
        required: [true, 'Please choose a package'],
        enum: {
            values: ['Standard', 'Premium', 'Entreprises'],
            message: '{VALUE} is not supported'
        }
    },
    chooseService: {
        type: String,
        required: [true, 'Please choose a service'],
        enum: {
            values: ['Social Media Management', 'SEO and SEM', 'Email and WhatsApp Marketing'],
            message: '{VALUE} is not supported'
        }
    }
}, {
    timestamps: true
});

const Form = mongoose.model('Form', formSchema);
module.exports = Form;