import { Alert } from 'react-native';

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

const AlertComponent_com = ( {title, content, buttons }: Props ) =>
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

export default { AlertComponent_com };