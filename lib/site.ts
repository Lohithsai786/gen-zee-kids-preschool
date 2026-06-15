export const site = {
  name: 'Gen Zee Kids',
  fullName: 'Gen Zee Kids Pre School',
  tagline: 'Play • Learn • Grow • Shine',
  admissions: 'Admissions Open 2026-27',
  address: '19-12-532, Bairagipatteda, Near Padmavathi Park, Tirupati – 517501',
  phones: ['+91 83338 06350', '+91 83338 06358'],
  // tel: links need no spaces
  phoneTel: ['+918333806350', '+918333806358'],
  whatsapp: '918333806350',
  links: {
    facebook: 'https://www.facebook.com/share/1E7pKuhNmZ/?mibextid=wwXIfr',
    instagram:
      'https://www.instagram.com/gen_zee_kids_preschool?igsh=MTM0em94cjJhcWRwYQ==',
    maps: 'https://maps.app.goo.gl/MdVRdrEeRbDwENbMA?g_st=ipc',
  },
} as const

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
] as const
