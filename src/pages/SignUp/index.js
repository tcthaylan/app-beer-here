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

export default function SignUp({ navigation }) {
  const emailRef = useRef()
  const passwordRef = useRef()

  function handleSubmit() {
    
  }

  return (
    <Background>
      <Container>
        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome completo"
            returnKeyType="next"
            onSubmitEdditing={() => emailRef.current.focus()}
          />
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            ref={emailRef}
            returnKeyType="next"
            onSubmitEdditing={() => passwordRef.current.focus()}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEdditing={handleSubmit}
          />
        </Form>
        <SubmitButton onPress={handleSubmit}>Acessar</SubmitButton>
        <SignLink onPress={() => { navigation.navigate('SignIn') }}>
          <SignLinkText>Já tenho conta</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  )
}