import React, { Component } from 'react'
import { 
    View,
    FlatList,
    Text,
    TouchableOpacity,
    StyleSheet,
    Alert,
} from 'react-native'

import { updateTodoList, deleteTodoList, queryAllTodoLists } from '../databases/allSchemas';

export default class TodoListComponent extends Component {
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}
