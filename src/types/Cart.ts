export interface AddToCartResponse {
  status: boolean;
  message: string;
  code: string;
}

export interface CartItem {
  cartID: number;
  categoryName: string;
  currency: string;
  discountRate: number;
  id: number;
  kdv: number;
  listingPrice: number;
  maxSaleUnit: number;
  merchantPrice1: number;
  merchantPrice2: number;
  merchantPrice3: number;
  merchantPrice4: number;
  merchantPrice5: number;
  minSaleUnit: number;
  productImage: string;
  purchasePrice: number;
  qty: number;
  salePrice: number;
  saleUnit: string;
  stock: number;
  stockCode: string;
  stockName: string;
  stockReduced: number;
  totalPrice: number;
  unitIncrement: number;
  weight: number;
}

export interface Basket {
  basketBagPrice: number;
  basketBagQuantity: number;
  cargoPrice: number;
  couponDiscountAmount: number;
  generalTotalPrice: number;
  totalPrice: number;
}

export interface Coupon {
  couponDiscountStr: string;
  couponMessage: string;
}
