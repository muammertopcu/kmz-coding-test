import React, {ReactElement} from 'react';
import {TextInput, TextInputProps} from 'react-native';
import styles from './Input.styles';

type ExcludedInputProps = Pick<TextInputProps, 'placeholder'>;

interface InputProps extends ExcludedInputProps {
  onChangeText?: TextInputProps['onChangeText'];
  placeholder?: string;
}

function Input({placeholder, onChangeText}: InputProps): ReactElement {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      onChangeText={onChangeText}
    />
  );
}

export default Input;
