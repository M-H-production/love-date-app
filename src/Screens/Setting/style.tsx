import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#d696a7',
    height: '100%',
    display: 'flex',
  },
  itemContainer: {
    marginVertical: 2,
    backgroundColor: '#e6c1cb',
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#d696a7',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomColor: '#5d2433',

  },
  itemInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 45,
    icon: {
      height: 32,
      width: 32,
    },
    title: {
      fontSize: 16,
      color: '#003153',
      marginLeft: 10
    }
  },
  angleIcon: {
    width: 24,
    height: 24,
  }
});

export default styles;