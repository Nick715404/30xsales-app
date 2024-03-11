export interface IBrand {
  id: string;
  name: string;
  description: string;
};

export interface IMobileNavImages {
  facebook: string,
  inst: string,
  youtube: string
};

export interface ISocialsImages {
  facebook: string,
  inst: string,
  youtube: string
}

export interface IProducts {
  id: number,
  title: string
  brand: string,
  category: string,
  description: string,
  discountPercentage?: number,
  images: string[],
  price: number,
  rating?: number,
  stock?: number,
  thumbnailPath: string,
}

export interface INavLink {
  label: string,
  href: string
}

export interface IFilterTag {
  value: string
  label: string
}