import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Card, Button, Text, Icon } from 'react-native-elements';
import * as MailComposer from 'expo-mail-composer';

class Contact extends Component {
    static navigationOptions = {
        title: 'Contact Us'
    }
    sendMail() {
        MailComposer.composeAsync({
            recipients: ['campsites@nucamp.co'],
            subject: 'Inquiry',
            body: 'To whom it may concern:'
        })
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
                        <Button
                            title="Send Email"
                            buttonStyle={{ backgroundColor: '#5637DD', margin: 40 }}
                            icon={<Icon
                                name='envelope-o'
                                type='font-awesome'
                                color='#fff'
                                iconStyle={{ marginRight: 10 }}
                            />}
                            onPress={() => this.sendMail()}
                        />
                    </Card>
                </Animatable.View>
            </ScrollView>
        );
    }
}
export default Contact;