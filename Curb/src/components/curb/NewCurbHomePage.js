import React, { Component } from 'react';

import Wallpaper from '../custom/Wallpaper';
import Logo from '../custom/Logo';
import ButtonNewCurb from '../curb/ButtonNewCurb';

export default class NewCurbHomePage extends Component {
  render() {
    return (
      <Wallpaper>
        <Logo></Logo>
        <ButtonNewCurb></ButtonNewCurb>
      </Wallpaper>
    );
  }
}