import mongoose from "mongoose";


const slotsSchema = new mongoose.Schema({
    companyname: {
        type: String,
        required: true
    },
    doe: {
        type: String,
        required: true
    },
    venue: {
        type: String,
        unique: true,
        required: true
    },
    city: {
        type: String,
        unique: true,
        required: true
    },
    client: {
        type: String,
        required: true
    },
    clientmobile: {
        type: String,
        required: true,
        match: /^[6-9]\d{9}$/,
        minlength: 10,
        maxlength: 10,
    },
    toe: {
        type: String,
        required: true,
    },

}, { timestamps: true });


const slots = new mongoose.model('slots', slotsSchema);

export default slots;