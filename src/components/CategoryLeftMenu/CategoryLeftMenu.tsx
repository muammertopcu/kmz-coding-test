import React, {Fragment, ReactElement} from 'react';
import {FlatList, View} from 'react-native';
import {CategoryItem} from '@components';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import type {Category} from '@types';
import styles from './CategoryLeftMenu.styles';

interface ICategoryLeftMenu {
  categories?: Category[];
}

const CategoryLeftMenu = ({categories}: ICategoryLeftMenu): ReactElement => {
  const {menuStatus} = useSelector((state: RootState) => state.categorySlice);

  if (!menuStatus) {
    return <Fragment />;
  }

  return (
    <View style={[styles.container]}>
      <FlatList
        data={categories}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <CategoryItem category={item} onPress={() => null} />
        )}
      />
    </View>
  );
};

export default CategoryLeftMenu;
