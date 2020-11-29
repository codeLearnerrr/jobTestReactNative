import React from 'react';

import { Text, View, ScrollView } from 'react-native';

import HeaderBar from './HeaderBar';

import Icon from 'react-native-vector-icons/FontAwesome';

import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import { SpaceshipsTitle, CardContent, IconView, CardTextInfoView } from '../styled-components';

const inputJSON = [
    {
        id: 0,
        name: 'Executor',
        value: 50.000,
        speed: ' 56 L/Y',
    },
    {
        id: 1,
        name: 'Millennium Falcon',
        value: 10.000,
        speed: ' 36 L/Y',
    },
    {
        id: 2,
        name: 'CR90 corvette',
        value: 2.000,
        speed: ' 16 L/Y',
    },
    {
        id: 3,
        name: 'Star Destroyer',
        value: 8.000,
        speed: ' 16 L/Y',
    },
    {
        id: 4,
        name: 'Death Star',
        value: 16.000,
        speed: ' 16 L/Y',
    },
    {
        id: 5,
        name: 'Y-wing',
        value: 18.000,
        speed: ' 16 L/Y',
    },
];

const SpaceshipsScreen = ({ navigation }) => (
    <>
        <HeaderBar inputNavigation={navigation} />
        <View style={{ textAlign: 'center' }}>
            <SpaceshipsTitle>Spaceships</SpaceshipsTitle>
            <ScrollView>
                {inputJSON.map((input) => (
                    <Card key={input.id} style={{ marginTop: 20, marginHorizontal: 20, paddingTop: 10, paddingBottom: 10 }} >
                        <CardContent >
                            <IconView >
                                <Icon name="space-shuttle" size={25} />
                            </IconView>
                            <CardTextInfoView >
                                <Card.Title title={input.name} titleStyle={{ fontFamily: 'Starjedi', fontSize: 15 }} />
                                <Card.Content>
                                    <Paragraph>$ {input.value}   Speed:{input.speed}</Paragraph>
                                </Card.Content>
                            </CardTextInfoView>
                        </CardContent>
                    </Card>
                ))}
            </ScrollView>
        </View>
    </>
)
export default SpaceshipsScreen;