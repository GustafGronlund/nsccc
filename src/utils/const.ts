import vedtaegterItem from '../assets/pdf/vedtaegter.pdf';

export const VEDTAEGTER_PDF = vedtaegterItem;

export const NAV_ITEMS = [
  { path: '/', label: 'Forside' },
  { path: '/gallery', label: 'Galleri' },
  { path: '/about', label: 'Om NSCCC' },
  { path: VEDTAEGTER_PDF, label: 'Vedtægter' },
  { path: '/member-registration', label: 'Tilmelding til klub' },
  { path: '/registration', label: 'Tilmelding' },
  { path: 'https://www.facebook.com/North.Sea.Classic', label: 'Facebook' },
  { path: '/contact', label: 'Kontakt' },
];

export const TILMELDING_REQUIREMENTS = [
  'For- og efternavn',
  'Adresse',
  'E-mail',
  'Mobilnummer',
  'Køretøjets mærke',
  'Køretøjets model',
  'Køretøjets årgang',
];

export const NSCCC_COLOR = '#29ABE2';

export const CLUB_NAME = 'North Sea Classic Car Club';
