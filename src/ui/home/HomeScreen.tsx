import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import AutocompleteComponent from '../components/AutoCompleteComponent';

const Home = () => {
  const searchHistory = useSelector(state => state.searchReducer.searches);

  const renderSearchItem = item => {
    return (
      <View style={styles.searchItem} key={item.id}>
        <Text style={styles.searchText}>{item}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <AutocompleteComponent />
      <View style={styles.searchHistoryContainer}>
        <Text style={styles.heading2}>Your Search History</Text>
      </View>
      <FlatList
        data={searchHistory}
        renderItem={({item}) => renderSearchItem(item)}
        keyExtractor={(_item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 120,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  searchHistoryContainer: {
    marginTop: 30,
    zIndex: 999,
  },
  heading2: {
    color: '#ccc',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchItem: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#ffffff10',
  },
  searchText: {
    fontSize: 14,
    color: '#FFF',
  },
});

export default Home;
