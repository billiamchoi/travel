const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;

var schema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  traveling: { type: Schema.Types.ObjectId, ref: 'Traveling' },
  date: {type: Date},
  number_of_people: {type: String, trim: true, required: true},
  total: {type: Number, trim: true, required: true}, 
  createdAt: {type: Date, default: Date.now}
}, {
  toJSON: { virtuals: true},
  toObject: {virtuals: true}
});
schema.plugin(mongoosePaginate);
var Reservation = mongoose.model('Reservation', schema);

module.exports = Reservation;
