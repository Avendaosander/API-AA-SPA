import { model } from 'mongoose'
import { Schema } from 'mongoose'

const testimonialsSchema = new Schema(
   {
      user: {
         type: Schema.Types.ObjectId,
         ref: 'Users'
      },
      service: {
         type: Schema.Types.ObjectId,
         ref: 'Services'
      },
      descripcion: {
         type: String,
         required: true
      }
   },
   {
      timestamps: true
   }
)

const Testimonials = model('Testimonials', testimonialsSchema)
export default Testimonials
