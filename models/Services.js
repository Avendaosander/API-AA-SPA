import { model } from 'mongoose';
import { Schema } from 'mongoose';

const servicesSchema = new Schema({
   titulo: {
      type: String,
      unique: true,
      required: true
   },
   descripcion: {
      type: Array,
      default: [],
      required: true
   },
   precio: {
      type: String,
      required: true
   },
   duracion: {
      type: String,
      required: true
   },
   descuento: {
      type: Number,
      default: null
   }
});

const Services = model('Services', servicesSchema);
export default Services