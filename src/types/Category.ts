export interface Category {
  categoryName: string;
  hasImage: boolean;
  id: number;
  imagePath?: {
    id: number;
    imagePath: string;
  };
  link: string;
  order: number;
  parentId: number;
  productCount: number;
  subCategoryCount: number;
}
