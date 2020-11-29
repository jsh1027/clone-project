import React from 'react';
import Styled from 'styled-components/native';



const HeaderBox = Styled.View`
  width: 100%;
  height: 20px;
  background-color: transparent;
`;

const TestBox = Styled.View`
  width: 100%;
  height: 20px;
  background-color: transparent;
  align-items: center;
  overflow: hidden;
`;

const Semicircle = Styled.View`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  position: absolute;
  background-color: #ffffff;
  margin-top: 10px;
  transform: scaleX(5);
`;

const PanelBox = Styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

const PanelHandle = Styled.View`
  width: 40px;
  height: 6px;
  border-radius: 4px;
  background-color: #00000020;
`;


const SheetHeader = () => {
    return (
        <HeaderBox>
            <PanelBox>
                <PanelHandle />
            </PanelBox>
        </HeaderBox>
    );
};

export default SheetHeader;