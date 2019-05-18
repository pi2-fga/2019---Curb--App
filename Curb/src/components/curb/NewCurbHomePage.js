import React, {Component} from 'react';
import Wallpaper from '../login/Wallpaper';
import Logo from '../login/Logo';
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