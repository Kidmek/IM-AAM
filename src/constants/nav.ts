import {
  HomeIcon_SVG,
  LogoutIcon_SVG,
  PieIcon_SVG,
  SettingIcon_SVG,
} from './icons'

export const NavElements = [
  {
    name: 'Home',
    subElements: [],
    path: '/home',
    icon: HomeIcon_SVG,
  },
  {
    name: 'Portfolio Management',
    subElements: [
      {
        name: 'Position Trader',
        path: '/portfolio/position-trader',
      },
      {
        name: 'Swing Trader',
        path: '/portfolio/swing-trader',
      },
      {
        name: 'Daily Trader',
        path: '/portfolio/daily-trader',
      },
    ],
    path: '/portfolio',
    icon: PieIcon_SVG,
  },
  {
    name: 'Settings',
    subElements: [],
    path: '/settings',
    icon: SettingIcon_SVG,
  },
  {
    name: 'Logout',
    subElements: [],
    path: '/registration',
    icon: LogoutIcon_SVG,
  },
]

export const mobileMenus = [
  {
    name: 'Home',
    path: '/home',
  },
  {
    name: 'Portfolio Management',
    path: '/portfolio',
  },
  {
    name: 'Position Trader',
    path: '/portfolio/position-trader',
  },
  {
    name: 'Swing Trader',
    path: '/portfolio/swing-trader',
  },
  {
    name: 'Daily Trader',
    path: '/portfolio/daily-trader',
  },
  {
    name: 'Settings',
    path: '/settings',
  },
  {
    name: 'Profile',
    path: '/profile',
  },
  {
    name: 'Logout',
    path: '/registration',
  },
]
