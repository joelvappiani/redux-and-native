import {
    View,
    Text,
    StyleSheet,
    Pressable,
    SafeAreaView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { removeMessageFromStore } from '../reducers/messages';

const ShowScreen = () => {
    const dispatch = useDispatch();
    const messages = useSelector(
        (state) => state.messages.value
    );

    const messagesList = messages.map((data, i) => {
        return (
            <SafeAreaView key={i} style={styles.message}>
                <Text style={styles.messageText}>
                    {data}
                </Text>
                <Pressable
                    style={styles.button}
                    onPress={() =>
                        dispatch(
                            removeMessageFromStore(data)
                        )
                    }
                >
                    <Text style={styles.buttonText}>
                        DELETE
                    </Text>
                </Pressable>
            </SafeAreaView>
        );
    });

    return (
        <View style={styles.container}>
            <Text style={styles.title}>My messages:</Text>
            {messagesList}
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        marginBottom: 30,
        marginTop: 70,
        fontSize: 23,
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
    message: {
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    messageText: {
        fontSize: 15,
    },
    button: {
        width: 70,
        borderRadius: 10,
        backgroundColor: '#ec6e5b',
        padding: 2,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
    },
});

export default ShowScreen;
