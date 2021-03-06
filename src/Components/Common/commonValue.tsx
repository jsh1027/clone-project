import { Platform, StatusBar} from 'react-native';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const commonValue = {
    
    /* 색상 */
    "c_brand" : "#04BFBF",
    "c_title": "#000000",
    "c_content": "#363636",
    "c_menu": "#5a5a5a",
    "c_supplement": "#BEBEBE",
    "c_strong": "#04ADBF",
    "c_click":"#f3f3f3",
    "c_unselect":"#d8d8d8",

    /* SafeAreaView Margin => Statusbar height */
    "sb_margintop": STATUSBAR_HEIGHT
}

export default commonValue;