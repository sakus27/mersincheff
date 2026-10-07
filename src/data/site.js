/**
 * Business information. Only facts provided by the restaurant.
 * Leave a field empty ('' / []) and the UI omits it automatically.
 */
export const site = {
  name: 'MERSİN CHEFF TANTUNİ',
  shortName: 'Mersin Cheff Tantuni',
  address: {
    street: 'Hamidiye, Park Cd. No:63 D:1A',
    district: 'İnegöl',
    province: 'Bursa',
    country: 'TR',
  },
  phone: { display: '0 551 351 33 16', e164: '+905513513316' },
  instagram: { handle: '@inegol_mersin_tantuni', url: 'https://www.instagram.com/inegol_mersin_tantuni/' },
  platforms: [],
};

/** Directions: opens Google Maps with the written address (no coordinates are invented). */
export const directionsUrl =
  'https://www.google.com/maps/dir/?api=1&destination=' +
  encodeURIComponent(`${site.name}, ${site.address.street}, ${site.address.district}, ${site.address.province}`);
