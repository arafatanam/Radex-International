// Change these values to update the whole site.
export const WHATSAPP_NUMBER = '8801713162795'; // digits only, with country code. Dummy number for now.
export const INSTAGRAM_URL = ''; // example: 'https://instagram.com/yourhandle'. Leave empty to hide.
export const EMAIL = ''; // example: 'hello@radex.com'. Leave empty to hide.

export const waLink = (text = '') =>
  `https://wa.me/${WHATSAPP_NUMBER}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
