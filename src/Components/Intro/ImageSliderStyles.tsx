
import { Dimensions, StyleSheet } from 'react-native';
import commonValue from '~/Components/Common/commonValue';
 
const {width} = Dimensions.get('window');
 
const styles = StyleSheet.create({
 
    container: {
        flex: 1,
        resizeMode: "contain"
    },
    pagination: {
        flexDirection: "row",
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    pagingIcon: {
        fontSize: (width / 25),
        color: commonValue.c_supplement,
        marginLeft: 5,
        marginRight: 5,
        alignSelf: 'center'
    },
    pagingActive: {
        fontSize: (width / 25),
        color: commonValue.c_brand,
        marginLeft: 5,
        marginRight: 5,
        alignSelf: 'center'
    },
});
 
export default styles;
