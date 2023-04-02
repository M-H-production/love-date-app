import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#d696a7',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  teddy: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titlePic: {
    textAlign: 'center',
    paddingVertical: 10,
    fontSize: 20,
    color: '#444'
  },
  DateContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default styles;