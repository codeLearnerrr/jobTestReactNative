import React from 'react';

import { Header, Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';

import { HamburgerStyle } from '../styled-components';

const HeaderBar = ({ inputNavigation }) => (
    <>
        <Header
            containerStyle={{ backgroundColor: 'transparent' }}
            leftComponent={<HamburgerMenu inputValue={inputNavigation} />}
            centerComponent={{ text: 'Star Wars', style: { color: '#000', fontSize: 20, fontFamily: 'Starjedi' } }}
        />
    </>
);

const HamburgerMenu = ({ inputValue }) => (
    <HamburgerStyle>
        <TouchableOpacity onPress={() => inputValue.openDrawer()} >
            <Icon name="menu" size={40} />
        </TouchableOpacity>
    </HamburgerStyle>
);

export default HeaderBar;
