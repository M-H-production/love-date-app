import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#d696a7',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 16
  },
  teddy: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  titlePic: {
    textAlign: 'center',
    paddingVertical: 20,
    fontSize: 30,
    fontFamily: 'Love',
    color: '#003153',
  },
  partnerButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: 45,
    marginTop: 15,
    borderRadius: 20,
    flex: 1,
    minWidth: '100%',
    backgroundColor: '#003153',
    marginHorizontal: 16,
    text: {
      color: '#fff'
    }
  },
  DateContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,

    label: {
      fontSize: 16,
      paddingVertical: 3,
      color: '#003153',

    },
    firstDate: {
      fontWeight: 500,
      fontSize: 20,
    }
  },
  AddPartner: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    img: {
      width: 300,
      height: 300,
      marginVertical: 15
    },
    title: {
      paddingVertical: 16,
      fontSize: 15,
      color: '#003153',
    }
  }
});

export default styles;