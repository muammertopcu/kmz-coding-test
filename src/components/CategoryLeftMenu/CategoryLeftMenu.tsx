import React, {Fragment, ReactElement} from 'react';
import {FlatList, View} from 'react-native';
import {CategoryItem} from '@components';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import type {Category} from '@types';
import styles from './CategoryLeftMenu.styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {toggleMenu} from '../../redux/slices/categorySlice';

interface ICategoryLeftMenu {
  categories?: Category[];
}

const CategoryLeftMenu = ({categories}: ICategoryLeftMenu): ReactElement => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const dispatch = useDispatch();
  const {menuStatus} = useSelector((state: RootState) => state.categorySlice);

  if (!menuStatus) {
    return <Fragment />;
  }

  const pressHandler = (id: number) => {
    dispatch(toggleMenu());
    navigation.replace('Products', {id, categories});
  };

  return (
    <View style={[styles.container]}>
      <FlatList
        data={categories}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <CategoryItem category={item} onPress={() => pressHandler(item.id)} />
        )}
      />
    </View>
  );
};

export default CategoryLeftMenu;
