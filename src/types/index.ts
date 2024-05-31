export interface Section {
  name: string;
  href: string;
  icon: React.ComponentType | null;
}

export interface SidebarProps {
  path: string;
}

export interface Products {
  id: number;
  name: string;
  category: string;
  cost: number;
  price: number;
  status: string;
  date: string;
  avatar: string;
  quantity: number;
}
