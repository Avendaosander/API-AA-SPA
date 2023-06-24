import { model } from 'mongoose'
import { Schema } from 'mongoose'

const reservationsSchema = new Schema({
   user: {
      type: Schema.Types.ObjectId,
      ref: 'Users'
   },
   service: {
      type: Schema.Types.ObjectId,
      ref: 'Services'
   },
   nombre: {
      type: String,
      required: true
   },
   fecha: {
      type: String,
      required: true
   },
   hora: {
      type: String,
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
   personas: {
      type: String,
      default: 1
   }
})

const Reservations = model('Reservations', reservationsSchema)
export default Reservations
