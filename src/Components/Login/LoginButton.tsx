import React from 'react';
import Styled from 'styled-components/native';
import { ContentText } from '~/Components/Common/TextStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



const TouchableOpacity = Styled.TouchableOpacity`
    width: 100%;
    height: 60px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    margin-bottom: 10px;
`;

const RoundBtnText = Styled(ContentText)`
  font-weight: bold;
`;

const BtnIcon = Styled(Icon)`
  position: absolute;
  left: 20px;
  font-size: 27px;
`;



const LoginButton = ( props ) => (
  <TouchableOpacity
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

export default LoginButton;