import Services from '../models/Services.js'
import Reservations from '../models/Reservations.js'
import Testimonials from '../models/Testimonials.js'

export const home = async (req, res) => { //✅
   try {
      const services = await Services.find({}, { __v: 0 }).lean()
      const testimonials = await Testimonials.find({}, { __v: 0 })
         .populate(
            { path: 'user', select: 'username' },
         )
         .populate(
            { path: 'service', select: 'titulo' }
         )
         .lean()
      return res.status(200).json({ services, testimonials })
   } catch (error) {
      return res.status(500).json({ messageError: error.message })
   }
}

export const reservations = async (req, res) => { //✅
   try {
      const { userID } = req.params
      const reservations = await Reservations.find({ user: userID, __v: 0 })
         .populate(
            { path: 'service', select: 'titulo precio duracion' }
         )
         .lean()
      return res.status(200).json({ reservations })
   } catch (error) {
      return res.status(500).json({ messageError: error.message })
   }
}

export const service = async (req, res) => { //✅
   try {
      const { serviceID } = req.params
      const service = await Services.findById(serviceID, { __v: 0 }).lean()
      const testimonials = await Testimonials.find({ service: serviceID, __v: 0 })
         .populate(
            { path: 'user', select: 'username' },
         )
         .populate(
            { path: 'service', select: 'titulo' }
         )
         .lean()
      const reservations = await Reservations.find({ service: serviceID, __v: 0 })
      return res.status(200).json({ service, testimonials, reservations })
   } catch (error) {
      return res.status(500).json({ messageError: error.message })
   }
}

export const createService = async (req, res) => { //✅
   try {
      const { titulo, descripcion, precio, duracion } = req.body;
      
      let service = await Services.findOne({titulo: titulo});
      if (service) return res.status(404).json({messageError: 'Este titulo de servicio ya existe'})
      
      service = new Services({ titulo, descripcion, precio, duracion });
      await service.save();

      return res.status(201).json({service});

   } catch (error) {
      return res.status(500).json({messageError: error.message});
   }
}

export const updateService = async (req, res) => { //✅
   try {
      
      const { serviceID } = req.params;
      const update = req.body;

      const service = await Services.findByIdAndUpdate(serviceID, update, {new: true})

      return res.status(200).json({service});
   } catch (error) {
      return res.status(500).json({messageError: error.message});
   }
}

export const deleteService = async (req, res) => { //✅
   try {
      
      const { serviceID } = req.params;
      const service = await Services.findByIdAndDelete(serviceID)

      if (!service) return res.status(404).json({messageError: 'Esta reservacion no fue encontrada'})
      
      await Reservations.deleteMany({service: serviceID}, { multi: true })
      await Testimonials.deleteMany({service: serviceID}, { multi: true })

      return res.status(200).json({service});
   } catch (error) {
      return res.status(500).json({messageError: error.message});
   }
}

export const createReservation = async (req, res) => { //✅
   try {
      const { user, nombre, service, fecha, hora, precio, duracion, personas } = req.body;
      
      let reservation = new Reservations({ user, nombre, service, fecha, hora, precio, duracion, personas });
      await reservation.save();
      
      reservation = await Reservations.findById(reservation._id, { __v: 0 })
         .populate(
            { path: 'service', select: 'titulo' }
         )
         .lean()
         
      return res.status(201).json({reservation});

   } catch (error) {
      return res.status(500).json({messageError: error.message});
   }
}

export const updateReservation = async (req, res) => { //✅
   try {
      
      const { reservationID } = req.params;
      const update = req.body;

      let reservation = await Reservations.findByIdAndUpdate(reservationID, update, {new: true})

      reservation = await Reservations.findById(reservation._id, { __v: 0 })
         .populate(
            { path: 'service', select: 'titulo precio duracion' }
         )
         .lean()

      return res.status(200).json({reservation});
   } catch (error) {
      return res.status(500).json({messageError: error.message});
   }
}

export const deleteReservation = async (req, res) => { //✅
   try {
      
      const { reservationID } = req.params;
      const reservation = await Reservations.findByIdAndDelete(reservationID)

      if (!reservation) return res.status(404).json({messageError: 'Esta reservacion no fue encontrada'})

      return res.status(200).json({reservation})
   } catch (error) {
      return res.status(500).json({messageError: error.message});
   }
}

export const createTestimony = async (req, res) => { //✅
   try {
      const { user, service, descripcion } = req.body;
      
      let testimony = new Testimonials({ user, service, descripcion });
      await testimony.save();
      
      testimony = await Testimonials.findById(testimony._id)
         .populate(
            { path: 'user', select: 'username' },
         )
         .populate(
            { path: 'service', select: 'titulo' }
            )
            .lean()
            
      return res.status(201).json({testimony});

   } catch (error) {
      return res.status(500).json({messageError: error.message});
   }
}

export const deleteTestimony = async (req, res) => { //✅
   try {
      
      const { testimonyID } = req.params;
      const testimony = await Testimonials.findByIdAndDelete(testimonyID)

      if (!testimony) return res.status(404).json({messageError: 'Este testimonio no fue encontrado'})

      return res.status(204).send();
   } catch (error) {
      return res.status(500).json({messageError: error.message});
   }
}