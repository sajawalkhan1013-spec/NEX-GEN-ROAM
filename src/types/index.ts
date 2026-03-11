export interface Option {
  label: string;
  value: string;
  icon?: React.ComponentType<{ className?: string }>;
  withCount?: boolean;
}

export interface eSIMPackage {
  id: string;
  name: string;
  data: string;
  duration: string;
  price: string;
  countryName?: string;
  category?: string;
}

export interface Country {
  id: string;
  name: string;
  flagUrl: string;
  imageUrl: string;
  packages: eSIMPackage[];
}

export interface Region {
  id: string;
  name: string;
  packages: eSIMPackage[];
}

export interface CartItem extends eSIMPackage {
  quantity: number;
}

