import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Card, Text } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

class Contact extends Component {
    static navigationOptions = {
        title: 'Contact Us'
    }
    render() {
        return (
            <ScrollView>
                <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
                    <Card wrapperStyle={{ margin: 20 }}
                        title="Contact Information">
                        <Text>1 Nucamp Way </Text>
                        <Text>Seattle, WA 98001 </Text>
                        <Text Style={{ marginBottom: 10 }}>U.S.A. </Text>
                        <Text>Phone:1234-5678 {"\n"}
                            Email:Campsite@info.co </Text>
                    </Card>
                </Animatable.View>
            </ScrollView>
        );
    }
}
export default Contact;