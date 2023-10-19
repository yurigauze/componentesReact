import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { Table, Rows } from 'react-native-table-component';
import styles from './style';
import CustomTextInput from '../input';
import CustomButton from '../Touchableopacity';

export default function Form() {
    const [task, setTask] = useState('');
    const [taskList, setTaskList] = useState([]);

    const Salvar = () => {
        if (task) {
            const newTaskList = [...taskList, task];
            setTaskList(newTaskList);
            setTask('');
        }
    };
    const Limpar = () => {
        setTaskList([]);
    };


    const tableData = taskList.map((item) => [item]);

    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Nota</Text>
                <CustomTextInput
                    style={styles.formInput}
                    onChangeText={(text) => setTask(text)}
                    value={task}
                    placeholder='Descrição da Tarefa'
                />

                <CustomButton
                    onPress={Salvar}
                    buttonText="Salvar"
                    buttonStyle={styles.formButton}
                    textStyle={styles.formButtonText} 
                />


                <View>
                    <Text style={styles.text}>Lista de Tarefas:</Text>
                    <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                        <Rows data={tableData} textStyle={{ margin: 6 }} />
                    </Table>
                </View>

                <CustomButton
                    onPress={Limpar}
                    buttonText="Limpar"
                    buttonStyle={styles.formButton}
                    textStyle={styles.formButtonText}
                />
            </View>
        </View>
    );
}
