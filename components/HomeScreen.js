import React from 'react';

import HeaderBar from './HeaderBar';

import { HomeView, HomeText } from '../styled-components';

const HomeScreen = ({ navigation }) => (
    <>
        <HeaderBar inputNavigation={navigation} />
        <HomeView >
            <HomeText >Welcome to the Star Wars Guide!</HomeText>
        </HomeView>
    </>
);



export default HomeScreen;