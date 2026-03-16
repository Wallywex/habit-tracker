import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SegmentedButtons, TextInput } from 'react-native-paper'
import { useHabits } from './contexts/HabitsContext'

const addHabits = () => {
  const router = useRouter();
  const { addHabit } = useHabits();
  const [frequency, setFrequency] = React.useState('daily');
  const [goal, setGoal] = React.useState('Once');
  const [habitName, setHabitName] = useState('');
  const handleAdd = () => {
    if (habitName.trim() === '') {
      alert('Please enter a habit name');
      return;
    }
    const newHabit = {
      id: Date.now().toString(),
      name: habitName,
      completed: false
    };
    addHabit(newHabit);
    router.back();
  };

  return (
    <View style={styles.container}>

      <View style={styles.formContainer}>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 16,
          marginTop: 16,
          borderBottomColor: '#e5e7eb',
          borderBottomWidth: 1,
          paddingBottom: 10
        }}>
          <Ionicons style={{ flex: 1 }} name="arrow-back" size={24} onPress={router.back}></Ionicons>
          <Text style={{ fontSize: 24, fontWeight: 'bold', flex: 2, marginLeft: 16 }}>Add New Habit</Text>
        </View>
        <View style={styles.calendarBox}>
          <View style={{
            width: 80,
            height: 80,
            borderRadius: 40,
            backgroundColor: "#4cae4f",
          }}>
            <Ionicons name="calendar-number" size={40} color="#fff" style={{ alignSelf: 'center', marginTop: 20 }}></Ionicons>
          </View>



        </View>
        <View style={{ marginTop: 16 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 16 }}>Habit Name</Text>
          <TextInput
            placeholder='Add a New Habit...'
            placeholderTextColor='grey'
            mode='outlined'
            outlineColor='#d1d5db'
            activeOutlineColor='#4cae4f'
            style={styles.habitNameInput}
            contentStyle={styles.habitNameInputContent}
            value={habitName}
            onChangeText={setHabitName}
          >

          </TextInput>
        </View>

        <View>
          <View>
            <Text style={{ 
              fontSize: 18, 
              fontWeight: 'bold', 
              marginBottom: 8,
              marginTop: 16 }}>Frequency</Text>

          </View>
          <View>
            <SegmentedButtons
            
              value={frequency}
              onValueChange={setFrequency}
              buttons={[
                { label: 'Daily', value: 'daily' },
                { label: 'Weekly', value: 'weekly' },
                { label: 'Monthly', value: 'monthly' }
              ]}
              theme={{ colors: { secondaryContainer: '#4cae4f', onSecondaryContainer: '#fff', outline: '#d1d5db' } }}

            />
            <Text style={{ marginTop: 10 }}>Selected: {frequency}</Text>
          </View>
        </View>
        <View>
          <View>
            <Text style={{ 
              fontSize: 18, 
              fontWeight: 'bold', 
              marginBottom: 8,
              marginTop: 16 }}>Goal</Text>

          </View>
          <View>
            <SegmentedButtons
            
              value={goal}
              onValueChange={setGoal}
              buttons={[
                { label: 'Once', value: 'Once' },
                { label: 'Twice', value: 'Twice' },
                { label: 'Thrice', value: 'Thrice' }
              ]}
              theme={{ colors: { secondaryContainer: '#4cae4f', onSecondaryContainer: '#fff', outline: '#d1d5db' } }}

            />
            <Text style={{ marginTop: 10 }}>Selected: {goal}</Text>
          </View>
        </View>

        <View style = {{ marginTop: 16 }}>
          <Text style = {{fontSize: 18, fontWeight: 'bold', color : 'grey'}}>Reminder</Text>
          <View style = {styles.reminderBox}>
            <Ionicons name="notifications" size={20} color="green" style={{ marginLeft: 8 }}></Ionicons>
            <Text style={{ marginLeft: 8, color: 'grey' }}>08 : 00 AM  b
              ;
            </Text>
          </View>
        
          
        </View>

        <TouchableOpacity onPress={handleAdd}>
          
           <View style = {styles.addHabitContainer}>
          
          <Text style = {{
            color: 'white', 
            fontWeight: 'bold', 
            textAlign: 'center', 
            fontSize: 20}}>Add Habit</Text>
        </View>
        </TouchableOpacity>
       
      </View>
      

    </View>
  )
}

export default addHabits

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {

    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    width: '90%',
    height: '80%',
    elevation: 3,
  },
  calendarBox: {
    backgroundColor: '#f1f5f9',
    borderRadius: 8,
    width: '100%',
    height: 200,
    justifyContent: 'center',
    marginTop: 16,
    alignItems: 'center',
  },
  habitNameInput: {
    marginTop: 12,
    backgroundColor: '#ffffff',
    borderRadius: 14,
    fontSize: 16,
  },
  habitNameInputContent: {
    paddingHorizontal: 8,
    minHeight: 52,
  },
  reminderBox : {
    backgroundColor: '#f1f5f9',
    borderRadius: 8,
    width: '100%',
    height: 50,
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    flexDirection: 'row',
  },
  addHabitContainer: {
    backgroundColor: '#4cae4f',
    borderRadius: 10,
    padding: 25,
    marginTop: 20,
  }


})