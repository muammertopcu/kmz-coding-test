export interface Product {
  currency: string;
  discountRate: number;
  id: number;
  inCartQty: number;
  isInFavorite: boolean;
  kdv: number;
  key: number;
  listPrice: number;
  listPriceVat: string;
  maxSaleUnit: number;
  minSaleUnit: number;
  price: number;
  priceVat: string;
  productImages: {
    id: number;
    imagePath: string;
  }[];
  score: number;
  stock: number;
  stockCode: string;
  stockName: string;
  stockType: string;
  totalRow: number;
  unitIncrement: number;
}
