import React, { Component } from 'react';
import Logo from '../custom/Logo';
import Form from './Form';
import Wallpaper from '../custom/Wallpaper';
import ButtonSubmit from './ButtonSubmit';
import SignupSection from './SignupSection';

export default class LoginScreen extends Component {
  render() {
    return (
      <Wallpaper>
        <Logo />
        <Form />
        <SignupSection />
        <ButtonSubmit />
      </Wallpaper>
    );
  }
}