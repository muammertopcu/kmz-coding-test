import React, {ReactElement} from 'react';
import {TextInput, TextInputProps} from 'react-native';
import styles from './Input.styles';

type ExcludedInputProps = Pick<TextInputProps, 'placeholder'>;

interface InputProps extends ExcludedInputProps {
  value?: TextInputProps['value'];
  onChangeText?: TextInputProps['onChangeText'];
  placeholder?: string;
  secureTextEntry?: boolean;
  autoCapitalize?: TextInputProps['autoCapitalize'];
}

function Input({
  value,
  placeholder,
  onChangeText,
  secureTextEntry = false,
  autoCapitalize,
}: InputProps): ReactElement {
  return (
    <TextInput
      style={styles.input}
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      autoCapitalize={autoCapitalize}
    />
  );
}

export default Input;
