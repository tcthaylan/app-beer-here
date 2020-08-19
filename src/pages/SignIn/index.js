import React from 'react';
import { View, Text } from 'react-native';
import Background from '../../components/Background'
import Input from '../../components/Input'
// import { Container } from './styles';

const SignIn = props => {
  return (
    <Background>
      <Text>SignIn</Text>
      <Input 
        placeholder="Digite seu e-mail"
      />
    </Background>
  )
}

export default SignIn;