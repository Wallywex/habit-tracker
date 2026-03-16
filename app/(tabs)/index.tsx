import { Octicons } from '@expo/vector-icons';
import { useRouter } from "expo-router";
import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Checkbox, ProgressBar } from "react-native-paper";
import MyAppBar from "../components/MyAppBar";
import { useHabits } from "../contexts/HabitsContext";

export default function Index() {
  const { habits, toggleHabit } = useHabits();

  const handlePress = () => {
    router.push('/addHabits');
    
  };

  const router = useRouter();




  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 20, marginTop: 10, }}>
        <MyAppBar
          title="Daily Habits"
          showBack={false}
          showCalendar={true}
          onCalendarPress={null}
          onBackPress={null} />

      </View>

      <TouchableOpacity style={styles.floatingButton} onPress={handlePress}>
        <Octicons name="plus" size={24} color="white" />
        
      </TouchableOpacity>

      <View style={styles.flatlist}>

        <FlatList style={{ flex: 1 }}

        contentContainerStyle={{ flexGrow: 1,  }}
          
          ListEmptyComponent={ 
            <View style={{ alignItems: "center",  flex: 1, justifyContent : "center"  }}>
              <Text style={{ fontSize: 24, color: "gray" }}>
                No habits yet
              </Text>
              <Text style={{ color: "gray", marginTop: 18, paddingLeft: -10 }}>
                Tap + to add your first habit k
              </Text>
            </View>
          }
          data={habits}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.habitItem}>
              <Checkbox
                status={item.completed ? 'checked' : 'unchecked'}
                onPress={() => { toggleHabit(item.id) }}
                color="green"
                uncheckedColor="grey"
              />

              <Text
                style={[
                  styles.habitText,
                  item.completed && styles.completedText,
                ]}
              >
                {item.name}
              </Text>


            </View>
          )}
        />
      </View>


      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>PROGRESS OVERVIEW</Text>
        <View style={styles.progressOverview}>
          <View>
            <Text style={{ color: 'green', fontSize: 40, fontWeight: 'bold', paddingBottom: 10 }}>25%</Text>
            <Text style={{ color: '#94a3b8' }}>1 of 4 Habits Completed</Text>
          </View>
          <ProgressBar progress={0.25} color="green" style={{ width: 150, height: 10, borderRadius: 5 }} />
        </View>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  flatlist: {
    flex: 1,
    marginBottom: 20,
    
  },
  habitItem: {
    backgroundColor: '#f8fafc',
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 20,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',


    elevation: 3,
  },
  habitText: {
    fontSize: 18,
    marginLeft: 7
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  floatingButton: {
    backgroundColor: 'green',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 40,
    right: 30,
    elevation: 5, // For Android shadow
    shadowColor: "#000", // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    zIndex: 1, // Ensure the button is above other content
  },
  progressContainer: {
    flex: 2 / 3,
    paddingHorizontal: 20,
    paddingVertical: 30,

  },
  progressText: {
    fontSize: 25,
    color: 'grey',
  },

  progressOverview: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    backgroundColor: '#ecf4ed',
    paddingVertical: 50,
    paddingHorizontal: 20,
    borderRadius: 30,
    width: '95%',
    alignItems: 'center',

  },
});