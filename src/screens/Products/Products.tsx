import React, {ReactElement, useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {useGetSubCategoriesQuery} from '../../redux/api/categoryApi';
import type {AddToCartResponse, Category, Product} from '@types';
import {ProductItem, ProductListHeader} from '@components';
import {useGetProductsQuery} from '../../redux/api/productApi';
import {useAddToCartMutation} from "../../redux/api/cartApi";
import Toast from "react-native-toast-message";

const Products = ({route}: any): ReactElement => {
  const [addToCart] = useAddToCartMutation();
  const {categories} = route.params;
  const [subCategories, setSubCategories] = useState<Category[]>();
  const [products, setProducts] = useState<Product[]>();
  const [page, setPage] = useState<number>(1);

  const [selectedSubCategory, setSelectedSubCategory] = useState<number>();
  const [selectedCategory, setSelectedCategory] = useState<number>(
    route.params.id,
  );

  const {
    data: subcategories,
    isLoading,
    refetch,
  } = useGetSubCategoriesQuery(selectedCategory);

  const {
    data: productData,
    refetch: refetchProduct,
    isFetching,
  } = useGetProductsQuery({
    categoryId: selectedSubCategory ? selectedSubCategory : selectedCategory,
    page,
    pageSize: 20,
  });

  useEffect(() => {
    setSubCategories(subcategories?.data.categories);
  }, [subcategories]);

  useEffect(() => {
    setProducts(prev => [...(prev ?? []), ...(productData?.data ?? [])]);
  }, [productData]);

  const subCategoryPressHandler = (id: number) => {
    setProducts([]);
    setSelectedSubCategory(id);
    refetchProduct();
  };

  const categoryPressHandler = (id: number) => {
    setProducts([]);
    setSelectedCategory(id);
    refetch();
    refetchProduct();
  };

  const addToCartHandler = (id: number):void => {
    addToCart({productId: id, amount: 1, userId: 1}).then(({data}: AddToCartResponse|any) => {
      Toast.show({
        type: 'success',
        text1: data.message,
        position: 'bottom',
      })
    })
  }

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={products}
        renderItem={({item}) => <ProductItem product={item} onPress={() => addToCartHandler(item.id)} />}
        numColumns={3}
        ListHeaderComponent={
          <ProductListHeader
            selectedCategory={selectedCategory}
            selectedSubCategory={selectedSubCategory}
            categoryPressHandler={categoryPressHandler}
            subCategories={subCategories}
            categories={categories}
            subCategoryPressHandler={subCategoryPressHandler}
          />
        }
        onEndReached={() => {
          if (isFetching) {
            return;
          }

          setPage(prev => prev + 1);
          refetchProduct();
        }}
        ListFooterComponent={
          isFetching ? <ActivityIndicator size={24} /> : null
        }
      />
    </View>
  );
};

export default Products;
