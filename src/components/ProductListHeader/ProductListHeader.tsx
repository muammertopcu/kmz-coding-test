import React, {Fragment} from 'react';
import {FlatList} from 'react-native';
import {CategoryItem, SubCategoryItem} from '@components';
import type {Category} from '@types';

interface IProductListHeader {
  categories: Category[];
  subCategories?: Category[];
  categoryPressHandler: (id: number) => void;
  subCategoryPressHandler: (id: number) => void;
  selectedCategory: number;
  selectedSubCategory?: number;
}

const ProductListHeader = ({
  categories,
  subCategories,
  categoryPressHandler,
  subCategoryPressHandler,
  selectedCategory,
  selectedSubCategory,
}: IProductListHeader) => {
  return (
    <Fragment>
      <FlatList
        data={categories}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <CategoryItem
            category={item}
            onPress={() => categoryPressHandler(item.id)}
            withImage
            centered
            active={item.id === selectedCategory}
          />
        )}
        horizontal
      />
      <FlatList
        data={subCategories}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <SubCategoryItem
            subCategory={item}
            onPress={() => subCategoryPressHandler(item.id)}
            active={item.id === selectedSubCategory}
          />
        )}
        horizontal
      />
    </Fragment>
  );
};

export default ProductListHeader;
