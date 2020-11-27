import React from 'react';
import { FlatList } from 'react-native';
import Styled from 'styled-components/native';
import PermissionItem from '~/Components/Permission/PermissionItem';


const Container = Styled.View`
    width: 100%;
`;

const PermissionData = [
    {
        iconName: "location-sharp",
        title: "위치",
        sup: "(선택)",
        content: "내 위치에서 가까운 그린존 확인"
    },
    {
        iconName: "camera-sharp",
        title: "카메라",
        sup: "(선택)",
        content: "면허증 인식, 차량 상태 등 사진 촬영"
    },
    {
        iconName: "image-sharp",
        title: "사진",
        sup: "(선택)",
        content: "촬영한 사진을 그린카로 전송"
    }
];


const PermissionList = () =>{
    

    return (
        <Container>
            <FlatList
                data = {PermissionData}
                renderItem = {PermissionItem}
                keyExtractor = { (item, i) => `${item.title}_${i}` }
            />
        </Container>
    );
};

export default PermissionList;