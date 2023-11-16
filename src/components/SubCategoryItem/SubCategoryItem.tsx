import React, {ReactElement} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import type {Category} from '@types';
import styles from './SubCategoryItem.styles';

interface Props {
  subCategory: Category;
  onPress?: () => void;
  active?: boolean;
}

const SubCategoryItem = ({
  subCategory,
  onPress,
  active,
}: Props): ReactElement => {
  return (
    <TouchableOpacity
      style={[styles.container, active && styles.active]}
      onPress={onPress}>
      <Text style={styles.text}>{subCategory.categoryName}</Text>
    </TouchableOpacity>
  );
};

export default SubCategoryItem;
