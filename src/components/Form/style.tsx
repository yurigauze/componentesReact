import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    formContext: {
        width: '100%',
        height: '100%',
        bottom: 0,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 30,
    },
    text: {
        textAlign: 'center',
    },
    form: {
        width: '100%',
        height: 'auto',
        marginTop: 30, 
        padding: 10,
        borderColor: '#000000'
    },
    formLabel: {
        color: '#000000',
        fontSize: 18, 
        paddingLeft: 20,
    },
    formInput: {
        width: '90%',
        borderRadius: 10,
        backgroundColor: '#F6F6F6',
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },
    formButton: {
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        backgroundColor: '#4a8f1f',
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        margin: 30,
    },
    formButtonText: {
        fontSize: 20,
        color: '#FFFFFF',
    },
});

export default styles;