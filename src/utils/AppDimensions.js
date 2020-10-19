import {Dimensions} from 'react-native'

function getWidth(params) {
    return Dimensions.get('window').width;
}

function getHeight(params) {
    return Dimensions.get('window').height;
}

const AppDimensions = {getHeight,getWidth};
export default AppDimensions;