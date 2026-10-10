import type { ImageMetadata } from "astro";
import imgAnticuchos from "../assets/anticuchos.png";
import imgBroaster from "../assets/broaster.png";
import imgBroasterClose from "../assets/broasterClose.png";
import imgChurrasco from "../assets/churrasco.png";
import imgEnteroPlato from "../assets/enteroPlato.png";
import imgFamiliar from "../assets/familiar.png";
import imgFuego from "../assets/fuego.png";
// Import local images
import imgHero from "../assets/hero.png";
import imgMedio from "../assets/medio.png";
import imgParrilla from "../assets/parrilla.png";
import imgPersonal from "../assets/personal.png";

export interface Combo {
  tag: string;
  name: string;
  desc: string;
  price: string;
  img: ImageMetadata;
  span: string;
  tall: boolean;
}

export interface MenuItem {
  img: ImageMetadata;
  name: string;
  desc: string;
  price: string;
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
    tag: "Para la mesa",
    name: "Combo Familiar",
    desc: "Pollo entero a la brasa, papas doradas, ensalada criolla, ají de la casa y gaseosa 1.5L.",
    price: "S/ 129",
    img: imgFamiliar,
    span: "md:col-span-7",
    tall: true,
  },
  {
    tag: "El clásico",
    name: "Combo Dúo Brasa",
    desc: "Dos medios pollos con papas, ensalada y ají verde. Para compartir sin pelear.",
    price: "S/ 89",
    img: imgMedio,
    span: "md:col-span-5",
    tall: false,
  },
  {
    tag: "Crocante",
    name: "Combo Broaster",
    desc: "8 piezas broaster, papas con sal de mar y salsas de la casa.",
    price: "S/ 79",
    img: imgBroaster,
    span: "md:col-span-5",
    tall: false,
  },
  {
    tag: "Parrillero",
    name: "Combo de la Leña",
    desc: "Parrilla mixta con anticuchos, chorizo, res y pollo. Chimichurri y papas al carbón.",
    price: "S/ 119",
    img: imgParrilla,
    span: "md:col-span-7",
    tall: true,
  },
];

export const CARTA: MenuCategory[] = [
  {
    cat: "Pollos",
    note: "A la brasa · Carbón de algarrobo",
    items: [
      {
        img: imgEnteroPlato,
        name: "Pollo Entero Braseado",
        desc: "El rey de la mesa. Papas, ensalada y ají.",
        price: "S/ 89",
      },
      {
        img: imgMedio,
        name: "1/2 Pollo Clásico",
        desc: "Jugoso por dentro, crocante por fuera.",
        price: "S/ 49",
      },
      {
        img: imgPersonal,
        name: "1/4 Pollo Personal",
        desc: "El antojo de la tarde con papitas.",
        price: "S/ 29",
      },
    ],
  },
  {
    cat: "Broasters",
    note: "Fritos al punto · Crujientes",
    items: [
      {
        img: imgBroaster,
        name: "Broaster Crocante",
        desc: "8 piezas doradas con sal de mar.",
        price: "S/ 55",
      },
      {
        img: imgBroasterClose,
        name: "Alitas Broaster",
        desc: "Bañadas en miel-picante de la casa.",
        price: "S/ 32",
      },
      {
        img: imgBroaster,
        name: "Chicharrón Broaster",
        desc: "Trozos jugosos con yuca frita.",
        price: "S/ 38",
      },
    ],
  },
  {
    cat: "Parrillas",
    note: "A la leña · Fuego vivo",
    items: [
      {
        img: imgParrilla,
        name: "Parrilla Mixta",
        desc: "Res, pollo, chorizo y anticuchos.",
        price: "S/ 95",
      },
      {
        img: imgAnticuchos,
        name: "Anticuchos de Corazón",
        desc: "Tres palitos con papa y choclo.",
        price: "S/ 42",
      },
      {
        img: imgChurrasco,
        name: "Churrasco de Res",
        desc: "A la parrilla con chimichurri.",
        price: "S/ 58",
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
