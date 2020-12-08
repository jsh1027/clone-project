const API_KEY = 'KNY3ERnxTF6dtLkXm8SP4SW9DIjtGEqbEjr158FWwP%2BCXsYw1QtUMqVPGK0reGDdppG%2B4Oy5VqFmrKES7%2BhrXw%3D%3D';
const API_URL = 'http://ws.bus.go.kr/api/rest/stationinfo/getStationByPos?serviceKey=';
let parseString = require('react-native-xml2js').parseString;

let jsonData = undefined;

const fetchData = () => {
    const url = `${API_URL}${API_KEY}&tmX=127.0230319441&tmY=37.5072264964&radius=300`;

    return fetch(url)
        .then(response => response.text())
        .then(data => {
            console.log('fetchData 들어옴!');
            let jsonData = '';
            parseString(data, function ( err, result ) {
                jsonData = JSON.parse(JSON.stringify(result));
            });          

            console.log(jsonData.ServiceResult.msgBody[0].itemList);
        }).catch(error => {
            console.log(error);
        });
}

export default fetchData;