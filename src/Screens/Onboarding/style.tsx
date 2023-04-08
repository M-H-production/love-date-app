import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#d696a7',
    height: '100%',
    flex: 1
  },
  personalContainer: {
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
  },
  hint: {
    color: '#003153',
    marginVertical: 30,
    fontWeight: 'bold'
  },
  avatar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15
  },
  dateLabel: {
    color: '#003153',
    marginTop: 15
  },
  dateContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  partnerContainer: {
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1
  }
});

export default styles;