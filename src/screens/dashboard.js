import {View, Dimensions, TouchableOpacity, Text, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import React, {useEffect} from 'react';
import * as Actions from '../action';

let deviceWidth = Dimensions.get('window').width;

const Dashboard = (props) => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.dashboard.users);
  console.log('state-dashboard-is', users);
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    await dispatch(Actions.getUsers());
  };

  return (
    <FlatList
      data={users}
      extraData={users}
      renderItem={({item, index}) => {
        return (
          <View style={{margin: 5}}>
            <View style={styles.containerStyle}>
              <View style={[styles.labelView]}>
                <View style={{width: '25%'}}>
                  <Text style={styles.labelText}>Name :</Text>
                </View>
                <View>
                  <Text>{item.name}</Text>
                </View>
              </View>
              <View style={styles.labelView}>
                <View style={{width: '25%'}}>
                  <Text style={styles.labelText}>Gender :</Text>
                </View>
                <View>
                  <Text>{item.gender}</Text>
                </View>
              </View>
              <View style={styles.labelView}>
                <View style={{width: '25%'}}>
                  <Text style={styles.labelText}>Email :</Text>
                </View>
                <View>
                  <Text>{item.email}</Text>
                </View>
              </View>
              <View style={styles.labelView}>
                <View style={{width: '25%'}}>
                  <Text style={styles.labelText}>PhoneNo :</Text>
                </View>
                <View>
                  <Text>{item.phoneNo}</Text>
                </View>
              </View>
            </View>
          </View>
        );
      }}
    />
  );
};
const styles = {
  labelView: {flexDirection: 'row'},
  labelText: {fontWeight: 'bold'},
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
export default Dashboard;
