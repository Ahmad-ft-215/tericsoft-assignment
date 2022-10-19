const mongoose = require('mongoose');


const BMISchema = mongoose.Schema({
    height: { type: Number, required: true },
    weight: { type: Number, required: true }
});


const BMIModel = mongoose.model('bmi', BMISchema);

module.exports = BMIModel;