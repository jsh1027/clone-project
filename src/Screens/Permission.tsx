import React, { useEffect } from 'react';
import { Alert, FlatList } from 'react-native';
import { 
    PermissionListStyles as PListSt,
    TextStyles as Tst,
    AlertStyles as AlertSt,
    ButtonStyles as BtnSt
    } 
    from '~/Components/StyleComponents';
import { Item } from '~/Components/PermissionList/Item';
import { PermissionDB } from '~/Assets/Data/PermissionDB';


const AlertComponent = AlertSt.AlertComponent_com;
const ListScreen = PListSt.ListScreen_com;
const TitleText = Tst.TitleText_com;
const Announcement = Tst.Announcement_com;
const FlatListContainer = PListSt.FlatListContainer_com;
const AnnouncementContainer = PListSt.AnnouncementContainer_com;
const Button = BtnSt.BottomBtn_com;
const BtnText = Tst.BtnText_com;
const showAlert = () =>{
    Alert.alert(
       'You need to...'
    )
 }

const Permission = () => {
    // useEffect(()=>{
    //     BluetoothAlert();
    // }, []);

    const BluetoothAlert = () =>
        AlertComponent(
            {
                title: "'민트카'에서 Bluetooth를 사용하려고 합니다",
                content: "블루투스를 이용해 스마트 웰컴 및 차량제어 기능을 사용하시려면 '승인'을 선택하세요.",
                buttons:
                        [
                            {
                                text: "허용 안 함",
                                onPress: () => {}
                            },
                            { 
                                text: "확인",
                                onPress: () => {}
                            }
                        ]
            }
    );

    return (
        <>
            <ListScreen>
                <TitleText>
                    편리한 그린카 사용을 위해{'\n'}
                    권한을 허용해주세요
                </TitleText>
                <FlatListContainer>
                    <FlatList
                        data={PermissionDB}
                        renderItem={Item}
                        keyExtractor={item => item.id}
                    />
                </FlatListContainer>
                <AnnouncementContainer>
                    <Announcement>
                        * 특정 기능 이용 시 허용이 필요하며, 허용하지 않아도 해당 기능 외의 서비스를 이용하실 수 있어요.
                    </Announcement>
                    <Announcement>
                        * 휴대폰 '설정 &gt; 민트카 &gt; 권한'에서도 접근 권한 변경을 하실 수 있어요.
                    </Announcement>
                </AnnouncementContainer>
            </ListScreen>
            <Button onPress={showAlert}>
                <BtnText>
                    확인
                </BtnText>
            </Button>
        </>
    );
};

export default Permission;