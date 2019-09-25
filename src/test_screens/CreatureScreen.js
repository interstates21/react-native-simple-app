import React, { useCallback } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { getCreatureRequest } from '../store/actions/test.actions'

const CreatureScreen = (props) => {

    const handleGetData = useCallback(
        () => {
            props.getCreatureRequest();
        },
        [],
    )
    console.log("props = ", props);
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'purple',
                color: 'white',
                alignItems: 'center',
                justifyContent: 'space-around'
            }}>
            {props.test.message ?
                <Text>
                    {props.test.message.classification}
                </Text> : null
            }
            <TouchableOpacity
                style={{
                    width: 250,
                    height: 50,
                    padding: 10,
                    borderRadius: 10,
                    backgroundColor: 'white',
                    color: 'purple',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onPress={handleGetData}
            >
                <Text>
                    Click ME!
                </Text>
            </TouchableOpacity >
        </View >
    )
}


const mapStateToProps = (state) => {
    return {
        test: state.test,
        user: state.user
    }
}


const mapDispatch = {
    getCreatureRequest
}

export default connect(mapStateToProps, mapDispatch)(CreatureScreen);