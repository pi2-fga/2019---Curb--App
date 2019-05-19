import React from 'react';
import Wallpaper from '../login/Wallpaper';
import Logo from '../custom/Logo';
import ButtonNewCurb from '../curb/ButtonNewCurb';
import Sidebar from '../custom/Sidebar';

export default class NewCurbHomePage extends React.Component {
  render() {
    return (
      <Wallpaper>
        <Logo></Logo>
        <Sidebar></Sidebar>
        <ButtonNewCurb></ButtonNewCurb>
      </Wallpaper>
    );
  }
}