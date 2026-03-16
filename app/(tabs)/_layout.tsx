import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";


export default function Layout() {
  return (
    <Tabs 
    screenOptions={{
      tabBarActiveTintColor : 'green',
      tabBarInactiveTintColor : 'grey',
      headerShown : false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="stats"
        options={{
          title: "Stats",
          
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'stats-chart' : 'stats-chart-outline'} color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'person' : 'person-outline'} color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}