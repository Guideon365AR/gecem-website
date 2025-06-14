export const COMPANY_INFO = {
  name: 'TuEmpresa',
  tagline: 'Transformamos Ideas en Realidad Digital',
  description: 'Creamos experiencias digitales excepcionales que impulsan el crecimiento de tu negocio.',
  email: 'contacto@tuempresa.com',
  phone: '+1 (555) 123-4567',
  address: 'Ciudad, País'
} as const;

export const NAVIGATION_ITEMS = [
  { name: 'Inicio', href: '#home' },
  { name: 'Servicios', href: '#services' },
  { name: 'Sobre Nosotros', href: '#about' },
  { name: 'Contacto', href: '#contact' }
] as const;

export const SOCIAL_LINKS = [
  { name: 'Facebook', href: '#' },
  { name: 'Twitter', href: '#' },
  { name: 'LinkedIn', href: '#' },
  { name: 'Instagram', href: '#' }
] as const;

export const ANIMATION_DELAYS = {
  short: 100,
  medium: 200,
  long: 300
} as const;