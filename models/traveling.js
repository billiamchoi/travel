const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;

var schema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  location: {type: String, trim: true, required: true},
  name: {type: String, trim: true, required: true},
  price: {type: Number, trim: true, required: true},
  description: {type: String, trim: true, required: true},
  course: {type: String, trim: true, required: true},
  guide: {type: String, trim: true, required: true},
  createdAt: {type: Date, default: Date.now}
}, {
  toJSON: { virtuals: true},
  toObject: {virtuals: true}
});
schema.plugin(mongoosePaginate);

var Traveling = mongoose.model('Traveling', schema);

module.exports = Traveling;
