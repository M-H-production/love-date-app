import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    backgroundColor: '#FF597B',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 40,
  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  titleText: {
    marginTop: 20,
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'arial'
  },

  SignInOptionContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  appleSignInBtn: {
    width: 300, // You must specify a width
    height: 45, // You must specify a height
    marginBottom: 15
  }
});

export default styles;