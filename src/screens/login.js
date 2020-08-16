import React, {useState, useEffect} from 'react';
import {
  View,
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import * as Actions from '../action';

let deviceWidth = Dimensions.get('window').width;
const Login = (props) => {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState({userName: '', password: ''});
  const [isvalidation, setValidation] = useState(false);
  const auth = useSelector((state) => state.auth);

  console.log('Login-screen', auth);

  const onChange = (name, value) => {
    setCredential({
      ...credential,
      [name]: value,
    });
  };
  const login = async () => {
    if (credential.password != '' && credential.userName != '') {
      await dispatch(Actions.login(credential));
      // props.navigation.navigate('Dashboard');
    } else {
      setValidation(true);
    }
  };

  const handleBackButton = () => {
    return true;
  };
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);

    if (auth.user) {
      props.navigation.navigate('Dashboard');
    }
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, [auth]);
  return (
    <View style={{justifyContent: 'center', flex: 1, margin: 5}}>
      <View style={{justifyContent: 'center'}}>
        <Text style={{fontWeight: 'bold'}}>User Name *</Text>
        <View style={styles.item}>
          <TextInput
            style={styles.input}
            value={credential.userName}
            onChangeText={(value) => onChange('userName', value)}
          />
        </View>
        {isvalidation ? (
          credential.userName == '' ? (
            <Text style={styles.errorText}>UserName is required</Text>
          ) : null
        ) : null}
      </View>
      <View>
        <Text style={{fontWeight: 'bold'}}>Password *</Text>
        <View style={styles.item}>
          <TextInput
            style={styles.input}
            value={credential.password}
            secureTextEntry={true}
            onChangeText={(value) => onChange('password', value)}
          />
        </View>
        {isvalidation ? (
          credential.password == '' ? (
            <Text style={styles.errorText}>password is required</Text>
          ) : null
        ) : null}
      </View>
      {auth ? (
        auth.error ? (
          <Text style={styles.errorText}>{auth.error}</Text>
        ) : null
      ) : null}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            login();
          }}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = {
  errorText: {color: 'red'},
  loginText: {
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: '#FED02F',
    padding: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  item: {
    marginVertical: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#fff',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  input: {
    fontSize: 14,
    color: '#A0A0A0',
    paddingLeft: 15,
  },
  containerStyle: {
    padding: 5,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#fff',
    justifycontent: 'flex-start',
    flexDirection: 'column',
    borderColor: '#ddd',
    position: 'relative',
    shadowRadius: 2,
    elevation: 5,
    marginLeft: 5,
    marginRight: 5,
    // marginTop:10,
    shadowColor: '#000',

    width: deviceWidth - 20,
  },
};

export default Login;
