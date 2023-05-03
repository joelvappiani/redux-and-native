import {
    View,
    Text,
    TextInput,
    Pressable,
    StyleSheet,
} from 'react-native';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMessageToStore } from '../reducers/messages';

const InputScreen = () => {
    const [input, setInput] = useState('');

    const dispatch = useDispatch();

    const handleMessage = () => {
        dispatch(addMessageToStore(input));
        setInput('');
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={(value) => setInput(value)}
                value={input}
            />
            <Pressable
                style={styles.button}
                onPress={() => handleMessage()}
            >
                <Text style={styles.buttonText}>
                    Add to show screen
                </Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        width: 270,
        padding: 5,
        borderRadius: 10,
        paddingLeft: 10,
        marginTop: 50,
        marginBottom: 20,
    },
    button: {
        width: 150,
        borderRadius: 10,
        backgroundColor: '#ec6e5b',
        padding: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
    },
});

export default InputScreen;
