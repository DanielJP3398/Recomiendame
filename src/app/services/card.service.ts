import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  cards = [
    { id: 'Arrocito con amor' ,imagen: './assets/arrozconleche.jpeg', titulo: 'Arrocito con amor', contenido: 'Saborea nuestro delicioso arroz con leche de sabores únicos: Nutella, maracuyá y Baileys. Una experiencia dulce e irresistible que deleitará tus sentidos. ¡Ven y pruébalos todos!\'s content.',correo:'jaueu@gmail.com',tel:'11111' , direccion: 'Cl 21 67 89 Bogotá'},
    { id: 'El mundo de los sueños',imagen: './assets/DJ.jpeg', titulo: 'El mundo de los sueños', contenido: 'Aprende a mezclar y dominar la música como un profesional. Cursos prácticos con equipos de última generación. ¡Transforma tu pasión en una carrera!\'s content.',correo:'jebbue@outlook.com',tel:'4444', direccion: 'Cl 80 67 89 Medellin' },
    { id: 'Panaderia los panas',imagen: './assets/panaderialospanas.jpg', titulo: 'Panaderia los panas', contenido: 'Descubre la magia del pan recién horneado en nuestra panadería. Disfruta de exquisitos panes artesanales, pasteles irresistibles y dulces únicos, hechos con amor y los mejores ingredientes. ¡Te esperamos!\'s content.',correo:'edbdbua@yahoo.com',tel:'33333', direccion: 'Cr 73 67 90 Bogotá' },
    { id: 'Decorators',imagen: './assets/deco.jpg', titulo: 'Decorators', contenido: 'Transformamos tus espacios con elegancia y estilo. Nuestra empresa de decoraciones ofrece diseños personalizados para cada ocasión. ¡Haz realidad tus sueños con nuestros expertos en decoración!\'s content.',correo:'jndejedjd@noseque.com',tel:'5555', direccion: 'Cr 21 67 89 Cali' },
    { id: 'Mini Donas', imagen: './assets/minidonas.jpg', titulo: 'Mini donas', contenido: 'Disfruta de nuestro delicioso postre o snack: rellenas de crema de chocolate, cubiertas con chocolate y decoradas con líneas de chocolate. ¡Una indulgencia perfecta para cualquier momento!\'s content.',correo:'ueuebd@hotmal.com',tel:'22222', direccion: 'Av 70 51A 22  Medellin' },
    { id: 'Inkspire Studio',imagen: './assets/tattoo.jpg', titulo: 'Inkspire Studio', contenido: 'En Inkspire Studio, transformamos tu piel en arte. Nuestros talentosos artistas crean tatuajes únicos y personalizados con la más alta calidad y seguridad. ¡Haz de tu piel una obra maestra!\'s content.',correo:'@jauaune@joslmejor.com',tel:'6666', direccion: 'Dg 21 67 89 Medellin' },

  ];

  getCard(id: string) {
    return this.cards.find(card => card.id === id);
  }
}
