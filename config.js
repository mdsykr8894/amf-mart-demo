/*
  AMF Mart mutable site settings.
  Keep store details, external destinations and editable asset paths here.
  Update this file for business content; do not duplicate these values in
  index.html or the wording documents.
  Theme values intentionally live in :root inside index.html so the design
  system remains together with the CSS that consumes it.
*/
window.AMF_CONFIG = {
  site: {
    title: 'AMF Mart',
    description: 'AMF Mart electrical product catalogue for home use, technical work and business needs.'
  },

  store: {
    name: 'AMF Mart'
  },

  announcement: {
    left: 'Electrical essentials for home, work and business.',
    right: 'Saturday – Thursday · 8:30 AM – 5:30 PM · Friday: Closed'
  },

  contact: {
    phone: {
      display: '+6 096186791',
      href: 'tel:+6096186791'
    },
    email: {
      display: 'amfjaya@gmail.com',
      href: 'mailto:amfjaya@gmail.com'
    },
    // Replace when AMF Mart confirms its production WhatsApp number.
    whatsappUrl: 'https://wa.me/01129327456'
  },

  location: {
    short: 'Kampung Raja, Terengganu',
    full: 'Lot 4875 Jalan Batu Tumbuh, Dalam, Kampung Gong Kepas, 22200 Kampung Raja, Terengganu, Malaysia',
    hours: {
      days: 'Saturday – Thursday',
      time: '8:30 AM – 5:30 PM',
      closed: 'Friday: Closed'
    },
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=AMF+Mart%2C+Lot+4875+Jalan+Batu+Tumbuh%2C+Kampung+Gong+Kepas%2C+22200+Kampung+Raja%2C+Terengganu%2C+Malaysia'
  },

  social: {
    facebookUrl: 'https://www.facebook.com/AmfMart/',
    tiktokUrl: ''
  },

  assets: {
    logo: 'assets/logo/electrical-shop-black.png',
    footerLogo: 'assets/logo/electrical-shop-white.png',
    favicon: 'assets/logo/electrical-shop-black%20-%20Copy.png',
    homeBanner: 'assets/banners/homepage-banner-temporary.png',
    aboutImage: 'assets/about/AMFmart%20Electrical.png'
  },

  catalogue: {
    path: 'catalogue/catalog.json',
    fallbackPath: 'catalogue/catalog-fallback.js'
  },

  visitorCounter: {
    storageKey: 'amf-mart-visitor-count',
    label: 'visitor'
  }
};
