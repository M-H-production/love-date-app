import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 15,
    marginBottom: 10,
  },
  stepContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'

  },
  stepCircle: {
    width: 50,
    height: 50,
    backgroundColor: '#003153',
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  stepCircleCheck: {
    width: 50,
    height: 50,
    backgroundColor: '#3F704D',
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  stepCircleNotActive: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: '#003153',
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  stepCircleText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20
  },
  stepCircleNotActiveText: {
    color: '#003153',
    fontWeight: 'bold',
    fontSize: 20
  },
  title: {
    color: '#003153',
    paddingTop: 5,
  }
});

export default styles;