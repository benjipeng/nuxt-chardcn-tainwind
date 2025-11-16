export interface NavigationItem {
  label: string
  mobileLabel: string
  to: string
  icon: string
  iconColor: string
}

export const useNavigation = () => {
  const navItems: NavigationItem[] = [
    {
      label: 'BROWSE',
      mobileLabel: 'Browse Disasters',
      to: '/browse',
      icon: 'lucide:layers',
      iconColor: 'text-cockpit-green'
    },
    {
      label: 'TIMELINE',
      mobileLabel: 'Timeline',
      to: '/timeline',
      icon: 'lucide:calendar',
      iconColor: 'text-radar-cyan'
    },
    {
      label: 'ABOUT',
      mobileLabel: 'About',
      to: '/about',
      icon: 'lucide:info',
      iconColor: 'text-nav-magenta'
    }
  ]

  return {
    navItems: readonly(navItems)
  }
}
