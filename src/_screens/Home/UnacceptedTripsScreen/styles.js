import {StyleSheet} from 'react-native'
import { bluePrimary, width } from '../../../styles/constants'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    title: {
        color: bluePrimary,
        textAlign: 'center',
        fontSize: 20
    },
    content: {

    },
    inputGroup: {
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    item_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        margin: 6,
        padding: 10,
        width: width - 40,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#a4a4a4',
    },
    col: {
        flexDirection: 'column'
    },
    textBold: {
        color: 'black',
        fontSize: 15,
        marginBottom: 5,
        fontWeight: '400'
    },
    textGrey: {
        color: '#606060',
        fontSize: 12,
    },

});

