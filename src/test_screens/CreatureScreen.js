import React, { useCallback } from 'react'
import { View, ScrollView, Text, TouchableOpacity } from 'react-native'
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
        <ScrollView
            style={{
                flex: 1,
                backgroundColor: 'purple',
            }}>
            {props.test.message ?
                <Text style={{ color: 'white', fontSize: 30 }}>
                    {Object.values(props.test.message)}
                </Text> : null
            }
            <TouchableOpacity
                style={{
                    width: 250,
                    height: 50,
                    padding: 10,
                    borderRadius: 10,
                    margin: 'auto',
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
        </ScrollView >
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