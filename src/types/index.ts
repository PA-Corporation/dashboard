export interface Section {
  name: string;
  href: string;
  icon: React.ComponentType | null;
}

export interface SidebarProps {
  path: string;
}
