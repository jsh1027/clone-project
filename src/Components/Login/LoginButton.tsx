import React from 'react';
import Styled from 'styled-components/native';
import { ContentText } from '~/Components/Common/TextStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';



const TouchableOpacity = Styled.TouchableOpacity`
    width: 95%;
    height: 57px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    margin-bottom: 10px;
`;

const RoundBtnText = Styled(ContentText)`
`;

const BtnIcon = Styled(Icon)`
  position: absolute;
  left: 20px;
  font-size: 27px;
`;



const LoginButton = ( props ) => {

  const navigation = useNavigation(); 

  return ( 
    <TouchableOpacity
    onPress={()=>
      {
        console.log(props.pressFC);
        navigation.navigate(props.naviFC);
      }
    }
    style={{
      backgroundColor: props.bgColor,
      borderWidth: props.boderW,
      borderColor: props.boderC
    }}
    >
        <BtnIcon 
        name={props.icon} 
        style={{color: props.iColor}}
        />
        <RoundBtnText
        style={{color: props.tColor}}
        >
            {props.text}
        </RoundBtnText>
    </TouchableOpacity>
  );
};

export default LoginButton;