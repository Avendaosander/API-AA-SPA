import { Router } from 'express';
import { createReservation, createService, createTestimony, deleteReservation, deleteService, deleteTestimony, home, reservations, service, updateReservation, updateService } from '../controllers/servicesController.js';
const router = Router()
import { isAutheticated, verifyAdmin } from '../middlewares/isAuthenticated.js';

// Devuelve todos los servicios disponibles y los testimonios disponibles
router.get('/home', isAutheticated, home)

// Devuelve todas las reservaciones de un usuario
router.get('/reservations/:userID', isAutheticated, reservations)

// Devuelve un servicio y los testimonios de ese servicio
router.get('/get-service/:serviceID', isAutheticated, service)

// Crea un servicio (Solo tiene acceso un Administrator)
router.post('/create-service/:userID', isAutheticated, verifyAdmin, createService)

// Modifica un servicio (Solo tiene acceso un Administrator)
router.put('/update-service/:serviceID/:userID', isAutheticated, verifyAdmin, updateService)

// Elimina un servicio (Solo tiene acceso un Administrator)
router.delete('/delete-service/:serviceID/:userID', isAutheticated, verifyAdmin, deleteService)

// Crea una reservacion
router.post('/create-reservation', isAutheticated, createReservation)

// Modifica una reservacion
router.put('/update-reservation/:reservationID', isAutheticated, updateReservation)

// Elimina una reservacion
router.delete('/delete-reservation/:reservationID', isAutheticated, deleteReservation)

// Crea un testimonio de un servicio
router.post('/create-testimony', isAutheticated, createTestimony)

// Elimina un testimonio
router.delete('/delete-testimony/:testimonyID', isAutheticated, deleteTestimony)

export default router