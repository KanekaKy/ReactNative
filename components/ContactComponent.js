import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Card, Text } from 'react-native-elements'

class Contact extends Component {
    static navigationOptions = {
        title: 'Contact Us'
    }
    render() {
        return (<ScrollView>
            <Card wrapperStyle={{ margin: 20 }}
                title="Contact Information">
                <Text Style= {{marginBottom: 10}}>
                    1 Nucamp Way {"\n"}
                    Seattle, WA 98001 {"\n"}
                    U.S.A. {"\n"}</Text>
                <Text>Phone:1234-5678 {"\n"}
                    Email:Campsite@info.co </Text>
            </Card>
        </ScrollView>);
    }
}
export default Contact;