import React, { useRef } from 'react';
import Background from '../../components/Background'
import { 
  Container, 
  Form, 
  FormInput, 
  SubmitButton, 
  SignLink, 
  SignLinkText 
} from './styles';

export default function SignIn({ navigation }) {
  const passwordRef = useRef()

  function handleSubmit () {

  }

  return (
    <Background>
      <Container>
        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />
        </Form>
        <SubmitButton onPress={() => {}}>Acessar</SubmitButton>
        <SignLink onPress={() => { navigation.navigate('SignUp') }}>
          <SignLinkText>Criar conta gratuita</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  )
}