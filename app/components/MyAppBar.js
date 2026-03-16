import { StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";

export default function MyAppBar({
  title,
  showCalendar = false,
  onCalendarPress,
  showBack = false,
  onBackPress,
  centerTitle = false
}) 

{
 

  return (
    <Appbar.Header>
      {showBack && <Appbar.BackAction onPress={onBackPress} />}
      <Appbar.Content title={title} titleStyle={styles.appBarText} />
      {showCalendar && <Appbar.Action icon="calendar" onPress={onCalendarPress} />}
    </Appbar.Header>
  );
}; 



const styles = StyleSheet.create({
  appBarText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  centerContent: {
    alignItems: 'center',
  },
  centerTitleText: {
    textAlign: 'center',
  },
});