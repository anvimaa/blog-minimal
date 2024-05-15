import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'Anvima',
  subtitle: 'Code',
  lang: 'pt',
  themeHue: 250,
  banner: {
    enable: true,
    src: 'assets/images/banner.png',
  },
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    {
      name: 'GitHub',
      url: 'https://github.com/anvimaa',
      external: true,
    },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/avatar-1.jpg',
  name: 'Antonio Mantente',
  bio: 'Um programador apaixonado 🥰 por finanças.',
  links: [
    {
      name: 'Twitter',
      icon: 'fa6-brands:twitter',
      url: 'https://twitter.com',
    },
    {
      name: 'LinkedIn',
      icon: 'fa6-brands:linkedin',
      url: '#',
    },
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/anvimaa',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: false,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
