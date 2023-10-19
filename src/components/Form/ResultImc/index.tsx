import React from 'react';
import { Text, View } from 'react-native';
import styles from './style';

interface IResultImc {
    resultImc: string;
    messageResultImc: string;
}

export default function ResultImc(props: IResultImc) {
    return (
        <View>
            <Text>{props.messageResultImc}{props.resultImc}</Text>
        </View>
    );
}