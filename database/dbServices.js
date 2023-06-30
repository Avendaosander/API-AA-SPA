import Services from "../models/Services.js";

function addServices() {
   Services.insertMany([
      {
         "titulo": "Masaje Terapéutico",
         "descripcion": "Ven y disfruta de un masaje profundo y revitalizante que te ayudará a aliviar el estrés y la tensión muscular. Nuestros terapeutas expertos utilizarán técnicas especializadas para brindarte un alivio duradero.",
         "precio": 20,
         "duracion": "60",
         "descuento": null,
      },
      {
         "titulo": "Tratamiento Facial de Lujo",
         "descripcion": "Déjate mimar con nuestro exclusivo tratamiento facial de lujo. Utilizamos productos naturales y técnicas avanzadas para hidratar, rejuvenecer y revitalizar tu piel. Experimenta una sensación de frescura y luminosidad en tu rostro.",
         "precio": 45,
         "duracion": "75",
         "descuento": null,
      },
      {
         "titulo": "Baño de Aromaterapia",
         "descripcion": "Sumérgete en un baño de aromas relajantes y déjate llevar por una experiencia sensorial única. Nuestros baños de aromaterapia están diseñados para calmar tu mente, equilibrar tus emociones y mejorar tu bienestar general.",
         "precio": 30,
         "duracion": "45",
         "descuento": null,
      },
      {
         "titulo": "Meditación Guiada",
         "descripcion": "Descubre la paz interior a través de nuestra sesión de meditación guiada. Nuestros expertos te guiarán en un viaje de relajación profunda y te ayudarán a encontrar la calma y el equilibrio en tu vida diaria.",
         "precio": 15,
         "duracion": "30",
         "descuento": null,
      },
      {
         "titulo": "Envoltura Corporal Reafirmante",
         "descripcion": "Dale a tu piel un tratamiento reafirmante y tonificante con nuestra envoltura corporal especializada. Utilizamos productos naturales y técnicas de masaje específicas para mejorar la elasticidad de tu piel y dejarla suave y tersa.",
         "precio": 55,
         "duracion": "90",
         "descuento": null,
      },
      {
         "titulo": "Pedicura de Spa",
         "descripcion": "Consienta sus pies con nuestra lujosa pedicura spa. Nuestros técnicos calificados empaparán, exfoliarán e hidratarán sus pies, dejándolos suaves y rejuvenecidos. Siéntese, relájese y disfrute de una experiencia maravillosa.",
         "precio": 25,
         "duracion": "60",
         "descuento": null,
      },
      {
         "titulo": "Tratamiento Capilar de Hidratación Profunda",
         "descripcion": "Revitaliza tu cabello con nuestro tratamiento capilar de hidratación profunda. Utilizamos productos nutritivos y técnicas de masaje del cuero cabelludo para restaurar la salud y el brillo de tu cabello. Disfruta de un cabello suave, sedoso y radiante.",
         "precio": 40,
         "duracion": "45",
         "descuento": null,
      },
      {
         "titulo": "Terapia de Reflexología",
         "descripcion": "Experimenta el poder curativo de la reflexología, una técnica milenaria que estimula los puntos de presión en los pies para promover el equilibrio y la salud en todo el cuerpo. Nuestros terapeutas especializados te brindarán alivio y bienestar.",
         "precio": 30,
         "duracion": "60",
         "descuento": null,
      },
   ])
}
export default addServices