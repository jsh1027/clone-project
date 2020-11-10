import { Alert, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    alertTitle: {
        fontWeight: "800",
    },
    ok: {
        fontWeight: "800",
    }
});

interface Props {
    title: string;
    content: string;
    buttons: [
        {
            text: string,
            onPress: () => void,
            style?: string
        },
        {
            text: string,
            onPress: () => void
        }
    ];
}

const AlertComponent = ( {title, content, buttons }: Props ) =>
    Alert.alert(
        title,
        content,
    [
        {
            text: buttons[0].text,
            onPress: buttons[0].onPress,
            style: "cancel"
        },
        { 
            text: buttons[1].text,
            onPress: buttons[1].onPress
        }
    ],
    { cancelable: false }
);

export default AlertComponent;