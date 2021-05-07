import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { AppCard } from '../components/ui/AppCard'
import { THEME } from '../theme'


export const TodoScreen = ({ goBack, todo, onRemove }) => {
    return (
      <View>
        <AppCard style={styles.card}>
          <Text style={styles.title}>{todo.title}</Text>
          <Button title='Edit' />
        </AppCard>
  
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button title='Назад' onPress={goBack} color={THEME.GREY_COLOR} />
          </View>
          <View style={styles.button}>
            <Button
              title='Удалить'
              color={THEME.DANGER_COLOR}
              onPress={() => onRemove(todo.id)}
            />
          </View>
        </View>
      </View>
    )
  }

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        width: '40%',

    },
    title: {
        fontSize: 20
    },
    card: {
        marginBottom: 20,
        padding: 15
    }
})
