import type { ImageMetadata } from "astro";
import imgAnticuchos from "../assets/anticuchos.png";
import imgBroaster from "../assets/broaster.png";
import imgBroasterClose from "../assets/broasterClose.png";
import imgChurrasco from "../assets/churrasco.png";
import imgEnteroPlato from "../assets/enteroPlato.png";
import imgFamiliar from "../assets/familiar.png";
import imgFuego from "../assets/fuego.png";
import imgHero from "../assets/hero.png";
import imgMedio from "../assets/medio.png";
import imgParrilla from "../assets/parrilla.png";
import imgPersonal from "../assets/personal.png";

export interface Combo {
  id: string;
  tag: string;
  name: string;
  desc: string;
  price: string;
  priceNum: number;
  img: ImageMetadata;
  span: string;
  tall: boolean;
  allowsEnsalada?: boolean;
}

export interface MenuItem {
  id: string;
  name: string;
  desc: string;
  price: string;
  priceNum: number;
  img: ImageMetadata;
  allowsEnsalada?: boolean;
}

export interface MenuCategory {
  cat: string;
  note: string;
  items: MenuItem[];
}

export interface Stat {
  n: string;
  l: string;
}

export interface DistrictZone {
  name: string;
  price: number;
  time: string;
}

export const RESTAURANT_CONFIG = {
  name: "La Leña — Pollería & Brasas",
  phoneDisplay: "(01) 555-1998",
  phoneTel: "+5115551998",
  whatsappNumber: "51999999999",
  whatsappDisplay: "+51 999 999 999",
  address: "Av. Sucre 1998, Pueblo Libre, Lima",
  googleMapsUrl: "https://maps.google.com/?q=Av.+Sucre+1998,+Pueblo+Libre,+Lima",
  email: "pedidos@lalena.pe",
  ruc: "20608765432",
  legalName: "INVERSIONES GASTRONOMICAS LA LEÑA S.A.C.",
};

export const UPSELL_ITEMS = [
  {
    id: "chicha-morada-1l",
    name: "Chicha Morada 1L",
    priceNum: 14,
    icon: "🥤",
  },
  {
    id: "tequenos-brasa",
    name: "Tequeños Brasa (8u)",
    priceNum: 24,
    icon: "🥟",
  },
  {
    id: "aji-casa-pote",
    name: "Pote Ají Extra 4oz",
    priceNum: 4,
    icon: "🌶️",
  },
  {
    id: "inca-kola-15l",
    name: "Inca Kola 1.5L",
    priceNum: 12,
    icon: "🥤",
  },
];

export const DISTRICT_ZONES: DistrictZone[] = [
  { name: "Pueblo Libre", price: 4, time: "25-35 min" },
  { name: "Magdalena del Mar", price: 5, time: "30-40 min" },
  { name: "Jesús María", price: 5, time: "30-40 min" },
  { name: "San Miguel", price: 5, time: "30-40 min" },
  { name: "Lince", price: 6, time: "35-45 min" },
  { name: "Breña", price: 6, time: "35-45 min" },
  { name: "Miraflores", price: 7, time: "40-50 min" },
  { name: "Surquillo", price: 7, time: "40-50 min" },
  { name: "Recojo en Tienda (Av. Sucre 1998)", price: 0, time: "15-20 min" },
];

export const IMAGES = {
  hero: imgHero,
  familiar: imgFamiliar,
  medio: imgMedio,
  personal: imgPersonal,
  broaster: imgBroaster,
  anticuchos: imgAnticuchos,
  parrilla: imgParrilla,
  broasterClose: imgBroasterClose,
  enteroPlato: imgEnteroPlato,
  fuego: imgFuego,
  churrasco: imgChurrasco,
};

export const COMBOS: Combo[] = [
  {
    id: "combo-familiar",
    tag: "Para la mesa",
    name: "Combo Familiar",
    desc: "Pollo entero a la brasa, papas doradas, ensalada criolla, ají de la casa y gaseosa 1.5L.",
    price: "S/ 129",
    priceNum: 129,
    img: imgFamiliar,
    span: "md:col-span-7",
    tall: true,
    allowsEnsalada: true,
  },
  {
    id: "combo-duo",
    tag: "El clásico",
    name: "Combo Dúo Brasa",
    desc: "Dos medios pollos con papas, ensalada y ají verde. Para compartir sin pelear.",
    price: "S/ 89",
    priceNum: 89,
    img: imgMedio,
    span: "md:col-span-5",
    tall: false,
    allowsEnsalada: true,
  },
  {
    id: "combo-broaster",
    tag: "Crocante",
    name: "Combo Broaster",
    desc: "8 piezas broaster, papas con sal de mar y salsas de la casa.",
    price: "S/ 79",
    priceNum: 79,
    img: imgBroaster,
    span: "md:col-span-5",
    tall: false,
    allowsEnsalada: false,
  },
  {
    id: "combo-parrillero",
    tag: "Parrillero",
    name: "Combo de la Leña",
    desc: "Parrilla mixta con anticuchos, chorizo, res y pollo. Chimichurri y papas al carbón.",
    price: "S/ 119",
    priceNum: 119,
    img: imgParrilla,
    span: "md:col-span-7",
    tall: true,
    allowsEnsalada: true,
  },
];

export const CARTA: MenuCategory[] = [
  {
    cat: "Pollos a la Brasa",
    note: "A la brasa · Carbón de algarrobo norteño",
    items: [
      {
        id: "pollo-entero",
        img: imgEnteroPlato,
        name: "Pollo Entero Braseado",
        desc: "El rey de la mesa. Papas crocantes, ensalada y cremas.",
        price: "S/ 89",
        priceNum: 89,
        allowsEnsalada: true,
      },
      {
        id: "medio-pollo",
        img: imgMedio,
        name: "1/2 Pollo Clásico",
        desc: "Jugoso por dentro, piel crocante por fuera con papas.",
        price: "S/ 49",
        priceNum: 49,
        allowsEnsalada: true,
      },
      {
        id: "cuarto-pollo",
        img: imgPersonal,
        name: "1/4 Pollo Personal",
        desc: "El clásico antojo personal con papas y cremas.",
        price: "S/ 29",
        priceNum: 29,
        allowsEnsalada: true,
      },
    ],
  },
  {
    cat: "Broasters",
    note: "Fritos al punto · Crujientes",
    items: [
      {
        id: "broaster-8pzas",
        img: imgBroaster,
        name: "Broaster Crocante (8 pzas)",
        desc: "8 piezas doradas con papas y sal de mar.",
        price: "S/ 55",
        priceNum: 55,
      },
      {
        id: "alitas-broaster",
        img: imgBroasterClose,
        name: "Alitas Broaster",
        desc: "Bañadas en miel-picante de la casa con papas.",
        price: "S/ 32",
        priceNum: 32,
      },
      {
        id: "chicharron-broaster",
        img: imgBroaster,
        name: "Chicharrón Broaster",
        desc: "Trozos jugosos marinados con yucas fritas.",
        price: "S/ 38",
        priceNum: 38,
      },
    ],
  },
  {
    cat: "Parrillas & Carnes",
    note: "A la leña · Fuego vivo",
    items: [
      {
        id: "parrilla-mixta",
        img: imgParrilla,
        name: "Parrilla Mixta Familiar",
        desc: "Bife de res, pechuga, chorizo parrillero y anticuchos.",
        price: "S/ 95",
        priceNum: 95,
        allowsEnsalada: true,
      },
      {
        id: "anticuchos-corazon",
        img: imgAnticuchos,
        name: "Anticuchos de Corazón",
        desc: "Tres palos tiernos con papa dorada y choclo.",
        price: "S/ 42",
        priceNum: 42,
      },
      {
        id: "churrasco-res",
        img: imgChurrasco,
        name: "Churrasco de Res a la Brasa",
        desc: "A la parrilla de algarrobo con chimichurri casero.",
        price: "S/ 58",
        priceNum: 58,
        allowsEnsalada: true,
      },
    ],
  },
  {
    cat: "Piqueos & Guarniciones",
    note: "Para compartir al centro",
    items: [
      {
        id: "tequenos-brasa",
        img: imgBroasterClose,
        name: "Tequeños Brasa (8 unids)",
        desc: "Rellenos de pollo a la brasa con crema de palta fresca.",
        price: "S/ 24",
        priceNum: 24,
      },
      {
        id: "chaufa-brasa",
        img: imgEnteroPlato,
        name: "Arroz Chaufa de Pollería",
        desc: "Al wok con trozos de pollo a la leña, cebolla china y huevo.",
        price: "S/ 18",
        priceNum: 18,
      },
      {
        id: "papas-doradas-extra",
        img: imgPersonal,
        name: "Porción Extra de Papas Doradas",
        desc: "Papas fritas al punto con sal de mar y orégano.",
        price: "S/ 16",
        priceNum: 16,
      },
    ],
  },
  {
    cat: "Bebidas & Refrescos",
    note: "Heladas al instante",
    items: [
      {
        id: "chicha-morada-1l",
        img: imgHero,
        name: "Chicha Morada Artesanal 1L",
        desc: "Hervida con maíz morado, piña, manzana y clavo. Receta familiar.",
        price: "S/ 14",
        priceNum: 14,
      },
      {
        id: "inca-kola-15l",
        img: imgMedio,
        name: "Inca Kola 1.5L Helada",
        desc: "La bebida del sabor nacional para acompañar la brasa.",
        price: "S/ 12",
        priceNum: 12,
      },
      {
        id: "coca-cola-15l",
        img: imgMedio,
        name: "Coca-Cola 1.5L Helada",
        desc: "Gaseosa familiar helada de 1.5 litros.",
        price: "S/ 12",
        priceNum: 12,
      },
      {
        id: "cusquena-trigo",
        img: imgChurrasco,
        name: "Cerveza Cusqueña Trigo (330ml)",
        desc: "Cerveza premium helada para maridar con parrilla.",
        price: "S/ 10",
        priceNum: 10,
      },
    ],
  },
  {
    cat: "Extras & Cremas de la Casa",
    note: "El secreto del sabor",
    items: [
      {
        id: "aji-casa-pote",
        img: imgFuego,
        name: "Pote Ají de la Casa (4 oz)",
        desc: "Nuestra crema de ají amarillo y huacatay artesanal.",
        price: "S/ 4",
        priceNum: 4,
      },
      {
        id: "vinagreta-pote",
        img: imgFuego,
        name: "Pote Vinagreta Criolla (4 oz)",
        desc: "El aliño clásico de pollería para bañar tus papas y ensalada.",
        price: "S/ 4",
        priceNum: 4,
      },
    ],
  },
];

export const STATS: Stat[] = [
  { n: "1998", l: "Encendimos la primera brasa" },
  { n: "+2.4M", l: "Pollos braseados y contando" },
  { n: "4.9★", l: "Calificación en Google Maps" },
  { n: "30'", l: "Delivery o la próxima va por la casa" },
];

export const TESTIMONIOS: string[] = [
  "«El mejor pollo de Lima, causa.» — María F.",
  "«Ese olor a carbón no se olvida.» — Lucho R.",
  "«Los anticuchos me hacen llorar de felicidad.» — Andrea P.",
  "«Vengo desde el 98, nunca falla.» — Don Tito",
  "«Las papitas crocantes son otro nivel.» — Kevin M.",
];

export const FAQS = [
  {
    q: "¿Qué cremas incluye cada pedido de pollo?",
    a: "Todos nuestros pollos y combos incluyen generosas porciones de Ají verde de la casa, Mayonesa tradicional, Kétchup y Vinagreta para la ensalada. Si deseas crema extra, puedes añadir potes de 4 oz en tu pedido.",
  },
  {
    q: "¿Cómo funciona la garantía de delivery en 30 minutos?",
    a: "Contamos los 30 minutos desde el momento en que confirmas tu comanda por WhatsApp dentro de nuestro radio de reparto principal (Pueblo Libre, Magdalena, Jesús María y San Miguel). Si nos demoramos más, ¡tu próximo medio pollo va por la casa!",
  },
  {
    q: "¿Qué medios de pago aceptan?",
    a: "Aceptamos Yape, Plin, Transferencias BCP/Interbank, Efectivo (nuestro motorizado lleva vuelto exacto) y Tarjetas Visa/Mastercard mediante POS inalámbrico en la puerta de tu casa.",
  },
  {
    q: "¿Puedo pedir para recoger en tienda y evitar el costo de delivery?",
    a: "¡Por supuesto! Selecciona 'Recojo en Tienda' al enviar tu pedido por WhatsApp. Tu bolsa estará lista y caliente en 15-20 minutos en nuestro local de Av. Sucre 1998, Pueblo Libre.",
  },
];
