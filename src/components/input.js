import React from 'react';
import { TextInput } from 'react-native';

const CustomTextInput = ({ value, onChangeText, style, placeholder }) => {
    return (
        <TextInput
            style={style}
            onChangeText={onChangeText}
            value={value}
            placeholder={placeholder}
        />
    );
}

export default CustomTextInput;
