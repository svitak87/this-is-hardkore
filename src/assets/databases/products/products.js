import oversizeUno from "../../images/products/oversize/oversize-uno.png";
import oversizeDos from "../../images/products/oversize/oversize-dos.png";
import oversizeTres from "../../images/products/oversize/oversize-tres.png";

import hoodieUno from "../../images/products/hoodies/hoodie-uno.png";
import hoodieDos from "../../images/products/hoodies/hoodie-dos.png";
import hoodieTres from "../../images/products/hoodies/hoodie-tres.png";
import hoodieCuatro from "../../images/products/hoodies/hoodie-cuatro.png";
import hoodieCinco from "../../images/products/hoodies/hoodie-cinco.png";
import hoodieSeis from "../../images/products/hoodies/hoodie-seis.png";

import rinoneraUno from "../../images/products/accesories/rinonera-uno.png";
import rinoneraDos from "../../images/products/accesories/rinonera-dos.png";
import rinoneraTres from "../../images/products/accesories/rinonera-tres.png";
import billeteraUno from "../../images/products/accesories/billetera-uno.png";

// import chaquetaUno from "../../images/products/chaqueta-uno.png";
// import chaquetaDos from "../../images/products/chaqueta-dos.png";
// import chaquetaTres from "../../images/products/chaqueta-tres.png";

// import mediasUno from "../../images/products/medias-uno.png";
// import mediasDos from "../../images/products/medias-dos.png";
// import mediasTres from "../../images/products/medias-tres.png";

// import camisetaUno from "../../images/products/camiseta-uno.png";
// import camisetaDos from "../../images/products/camiseta-dos.png";
// import camisetaTres from "../../images/products/camiseta-tres.png";

export const products = [
  // =========================
  // OVERSIZE
  // =========================

  {
    id: 1,
    name: "Oversize Hardkore Black",
    slug: "oversize-hardkore-black",
    category: "oversize",
    price: 95000,
    currency: "COP",
    image: oversizeUno,
    description:
      "Camiseta oversize de algodón con identidad urbana This Is Hardkore.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Negro"],
    featured: true,
    available: true,
  },

  {
    id: 2,
    name: "Oversize Raw Sound",
    slug: "oversize-raw-sound",
    category: "oversize",
    price: 105000,
    currency: "COP",
    image: oversizeDos,
    description:
      "Diseño oversize inspirado en la cultura Hip Hop y el sonido underground.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blanco", "Negro"],
    featured: false,
    available: true,
  },

  {
    id: 3,
    name: "Oversize Colombia",
    slug: "oversize-colombia",
    category: "oversize",
    price: 100000,
    currency: "COP",
    image: oversizeTres,
    description:
      "Camiseta oversize con identidad colombiana y estética streetwear.",
    sizes: ["M", "L", "XL"],
    colors: ["Negro", "Verde"],
    featured: true,
    available: true,
  },

  // =========================
  // HOODIES
  // =========================

  {
    id: 4,
    name: "Buzo Classic Hardkore",
    slug: "buzo-classic-hardkore",
    category: "hoodies",
    price: 150000,
    currency: "COP",
    image: hoodieUno,
    description: "Algodón de corte urbano con identidad clásica Hardkore.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Negro", "Gris"],
    featured: false,
    available: true,
  },

  {
    id: 5,
    name: "Hoodie High Me",
    slug: "Hoodie-high-me",
    category: "hoodies",
    price: 165000,
    currency: "COP",
    image: hoodieDos,
    description:
      "Inspirado en la cultura Hip Hop colombiana y el movimiento underground.",
    sizes: ["M", "L", "XL"],
    colors: ["Negro"],
    featured: true,
    available: true,
  },

  {
    id: 6,
    name: "Hoodie Street Colombia",
    slug: "Hoodie-street-Colombia",
    category: "hoodies",
    price: 155000,
    currency: "COP",
    image: hoodieTres,
    description:
      "Buzo premium con capota. Nueva tela burda de alto gramaje. Silueta streetwear de ajuste relajado.",
    sizes: ["S", "M", "L"],
    colors: ["Gris", "Beige"],
    featured: false,
    available: true,
  },
  {
    id: 22,
    name: "Hoodie hardokere by Pez",
    slug: "hoodie-hardkore",
    category: "hoodies",
    price: 180000,
    currency: "COP",
    image: hoodieCuatro,
    description: "Colección de edición limitada - Colaboración @pezbarcelona.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Negro", "Gris"],
    featured: true,
    available: true,
  },

  {
    id: 23,
    name: "Hoodie hardkore State of Mind",
    slug: "hoodie-boom-bap",
    category: "hoodies",
    price: 190000,
    currency: "COP",
    image: hoodieCinco,
    description:
      "De la nueva temporada de Buzo capotero en nuevas telas, presentamos el buzo blanco Hardkore",
    sizes: ["M", "L", "XL"],
    colors: ["Negro"],
    featured: false,
    available: true,
  },

  {
    id: 24,
    name: "Hoodie Gang",
    slug: "hoodie-Gang",
    category: "hoodies",
    price: 195000,
    currency: "COP",
    image: hoodieSeis,
    description:
      "Buzo Hardkore Gang Café, Nueva tela, algodón premium, estampado 3 tintas. ",
    sizes: ["S", "M", "L"],
    colors: ["Negro", "Café"],
    featured: true,
    available: true,
  },

  //   // =========================
  //   // ACCESORIOS
  //   // =========================

  {
    id: 7,
    name: "Carriel Manos libres",
    slug: "carriel-manos-libres",
    category: "accesorios",
    price: 75000,
    currency: "COP",
    image: rinoneraUno,
    description: "Riñonera urbana compacta con identidad This Is Hardkore.",
    sizes: ["Única"],
    colors: ["Negro"],
    featured: false,
    available: true,
  },
  {
    id: 16,
    name: "Riñonera Street",
    slug: "Riñonera Street",
    category: "accesorios",
    price: 165000,
    currency: "COP",
    image: rinoneraDos,
    description: "Riñonera clásica con bolsillo frontal y estética urbana.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Negro", "Gris"],
    featured: true,
    available: true,
  },
  {
    id: 8,
    name: "Bandolero cuadrado",
    slug: "Bandolero cuadrado",
    category: "accesorios",
    price: 80000,
    currency: "COP",
    image: rinoneraTres,
    description:
      "Funcional para complementar cualquier outfit urbano.",
    sizes: ["Única"],
    colors: ["Negro", "Rojo"],
    featured: true,
    available: true,
  },
  {
    id: 25,
    name: "Billetera Hardkore",
    slug: "billetera-hardkore",
    category: "accesorios",
    price: 55000,
    currency: "COP",
    image: billeteraUno,
    description: "Billetera compacta con identidad gráfica This Is Hardkore.",
    sizes: ["Única"],
    colors: ["Negro, Beige, Café"],
    featured: false,
    available: true,
  },

  //   {
  //     id: 9,
  //     name: "Riñonera Street",
  //     slug: "rinonera-street",
  //     category: "accesorios",
  //     price: 85000,
  //     currency: "COP",
  //     image: rinoneraTres,
  //     description: "Accesorio streetwear diseñado para llevar lo esencial.",
  //     sizes: ["Única"],
  //     colors: ["Negro", "Verde"],
  //     featured: false,
  //     available: true,
  //   },

  //   // =========================
  //   // CHAQUETAS/ACCESORIOS
  //   // =========================

  //   {
  //     id: 10,
  //     name: "Chaqueta Hardkore",
  //     slug: "chaqueta-hardkore",
  //     category: "chaquetas",
  //     price: 220000,
  //     currency: "COP",
  //     image: chaquetaUno,
  //     description:
  //       "Chaqueta urbana de inspiración streetwear con identidad Hardkore.",
  //     sizes: ["S", "M", "L", "XL"],
  //     colors: ["Negro"],
  //     featured: true,
  //     available: true,
  //   },

  //   {
  //     id: 11,
  //     name: "Chaqueta Underground",
  //     slug: "chaqueta-underground",
  //     category: "chaquetas",
  //     price: 235000,
  //     currency: "COP",
  //     image: chaquetaDos,
  //     description:
  //       "Chaqueta de estética underground inspirada en la cultura Hip Hop.",
  //     sizes: ["M", "L", "XL"],
  //     colors: ["Negro", "Gris"],
  //     featured: false,
  //     available: true,
  //   },

  //   {
  //     id: 12,
  //     name: "Chaqueta Colombia",
  //     slug: "chaqueta-colombia",
  //     category: "chaquetas",
  //     price: 245000,
  //     currency: "COP",
  //     image: chaquetaTres,
  //     description:
  //       "Chaqueta urbana con detalles inspirados en la identidad colombiana.",
  //     sizes: ["S", "M", "L"],
  //     colors: ["Negro", "Verde"],
  //     featured: true,
  //     available: true,
  //   },

  //   // =========================
  //   // MEDIAS
  //   // =========================

  //   {
  //     id: 13,
  //     name: "Medias Logo Hardkore",
  //     slug: "medias-logo-hardkore",
  //     category: "medias",
  //     price: 35000,
  //     currency: "COP",
  //     image: mediasUno,
  //     description:
  //       "Medias urbanas con logo This Is Hardkore.",
  //     sizes: ["Única"],
  //     colors: ["Negro", "Blanco"],
  //     featured: false,
  //     available: true,
  //   },

  //   {
  //     id: 14,
  //     name: "Medias High Me",
  //     slug: "medias-high-me",
  //     category: "medias",
  //     price: 38000,
  //     currency: "COP",
  //     image: mediasDos,
  //     description:
  //       "Medias inspiradas en la estética Hip Hop y streetwear.",
  //     sizes: ["Única"],
  //     colors: ["Negro", "Rojo"],
  //     featured: false,
  //     available: true,
  //   },

  //   {
  //     id: 15,
  //     name: "Medias Street",
  //     slug: "medias-street",
  //     category: "medias",
  //     price: 35000,
  //     currency: "COP",
  //     image: mediasTres,
  //     description:
  //       "Diseño urbano para complementar tus prendas Hardkore.",
  //     sizes: ["Única"],
  //     colors: ["Blanco", "Negro"],
  //     featured: false,
  //     available: true,
  //   },

  //   // =========================
  //   // CANGUROS/ACCESORIOS
  //   // =========================

  //   {
  //     id: 18,
  //     name: "Canguro Underground",
  //     slug: "canguro-underground",
  //     category: "accesorios",
  //     price: 180000,
  //     currency: "COP",
  //     image: canguroTres,
  //     description:
  //       "Canguro de estética underground para los amantes del Hip Hop.",
  //     sizes: ["S", "M", "L"],
  //     colors: ["Negro", "Beige"],
  //     featured: true,
  //     available: true,
  //   },

  //   // =========================
  //   // CAMISETAS
  //   // =========================

  //   {
  //     id: 19,
  //     name: "Camiseta Hardkore Logo",
  //     slug: "camiseta-hardkore-logo",
  //     category: "camisetas",
  //     price: 85000,
  //     currency: "COP",
  //     image: camisetaUno,
  //     description:
  //       "Camiseta clásica de algodón con identidad This Is Hardkore.",
  //     sizes: ["S", "M", "L", "XL"],
  //     colors: ["Negro", "Blanco"],
  //     featured: true,
  //     available: true,
  //   },

  //   {
  //     id: 20,
  //     name: "Camiseta High Me",
  //     slug: "camiseta-high-me",
  //     category: "camisetas",
  //     price: 90000,
  //     currency: "COP",
  //     image: camisetaDos,
  //     description:
  //       "Camiseta urbana inspirada en la cultura Hip Hop colombiana.",
  //     sizes: ["S", "M", "L", "XL"],
  //     colors: ["Negro", "Rojo"],
  //     featured: false,
  //     available: true,
  //   },

  //   {
  //     id: 21,
  //     name: "Camiseta Raw Sound",
  //     slug: "camiseta-raw-sound",
  //     category: "camisetas",
  //     price: 95000,
  //     currency: "COP",
  //     image: camisetaTres,
  //     description:
  //       "Diseño inspirado en el sonido crudo del Hip Hop underground.",
  //     sizes: ["M", "L", "XL"],
  //     colors: ["Negro", "Blanco"],
  //     featured: true,
  //     available: true,
  //   },

  //   // =========================
  //   // BILLETERAS/ACCESORIOS
  //   // =========================

  //   {
  //     id: 26,
  //     name: "Billetera Street",
  //     slug: "billetera-street",
  //     category: "accesorios",
  //     price: 60000,
  //     currency: "COP",
  //     image: billeteraDos,
  //     description: "Billetera urbana funcional para el uso diario.",
  //     sizes: ["Única"],
  //     colors: ["Negro", "Gris"],
  //     featured: false,
  //     available: true,
  //   },

  //   {
  //     id: 27,
  //     name: "Billetera Raw",
  //     slug: "billetera-raw",
  //     category: "accesorios",
  //     price: 65000,
  //     currency: "COP",
  //     image: billeteraTres,
  //     description:
  //       "Diseño compacto inspirado en la estética underground Hardkore.",
  //     sizes: ["Única"],
  //     colors: ["Negro", "Rojo"],
  //     featured: true,
  //     available: true,
  //   },
];
