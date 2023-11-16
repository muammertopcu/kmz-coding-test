import React, {ReactElement, useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Button, Input} from '@components';
import {useDispatch} from 'react-redux';
import {setToken} from '../../redux/slices/authSlice';
import {useLoginMutation} from '../../redux/api/authApi';
import Toast from 'react-native-toast-message';
import {LoginMutationResponse, LoginMutationVariables} from '@types';
import styles from './Login.styles';

const Login = (): ReactElement => {
  const [loginMutation] = useLoginMutation();
  const dispatch = useDispatch();

  const [userInformation, setUserInformation] =
    useState<LoginMutationVariables>({
      username: '',
      password: '',
    });

  const setUserInformationHandler = (key: string, value: string): void => {
    setUserInformation(prev => {
      return {...prev, [key]: value};
    });
  };

  const LoginHandler = async (): Promise<void> => {
    const {data, error}: {data?: LoginMutationResponse; error?: any} =
      await loginMutation(userInformation);

    if (error) {
      Toast.show({
        type: 'error',
        text1: error.data.data.error,
        position: 'bottom',
      });

      return;
    }

    dispatch(setToken(data?.data.token));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoWrapper}>
        <Text style={styles.logo}>Market</Text>
      </View>

      <View style={styles.formWrapper}>
        <Input
          value={userInformation.username}
          placeholder={'Username'}
          autoCapitalize={'none'}
          onChangeText={text => setUserInformationHandler('username', text)}
        />

        <Input
          value={userInformation.password}
          placeholder={'Password'}
          secureTextEntry={true}
          onChangeText={text => setUserInformationHandler('password', text)}
        />

        <Button text={'Login'} onPress={LoginHandler} />
      </View>
    </SafeAreaView>
  );
};

export default Login;
