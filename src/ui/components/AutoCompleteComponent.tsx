import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import {useDispatch} from 'react-redux';
import placesMockData from '../../utils/json/placesData.json';
import {search} from '@utils/assets/images';
import {saveSearchHistorySuccess} from '../../redux/actions/actions';

const AutocompleteComponent = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearch = text => {
    setSearchText(text);
    const filteredData = placesMockData.filter(item =>
      item.description.toLowerCase().includes(text.toLowerCase()),
    );
    setSearchResults(filteredData);
    setShowDropdown(!!text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Search Places"
          value={searchText}
          placeholderTextColor={'#999'}
          style={styles.inputfield}
          onChangeText={handleSearch}
        />
        <Image source={search} style={styles.searchImage} />
      </View>
      {showDropdown && (
        <View style={styles.dropdown}>
          <FlatList
            data={searchResults}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  dispatch(saveSearchHistorySuccess(item.description));
                  setShowDropdown(false);
                  setSearchText('');
                }}>
                <Text style={styles.dropdownItem}>{item.description}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.place_id}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  inputfield: {
    height: 42,
    flex: 1,
    color: '#FFF',
  },
  dropdown: {
    borderRadius: 4,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: '#CCC',
    width: 370,
    maxHeight: 150,
    position: 'absolute',
    top: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderColor: '#999',
    backgroundColor: '#363636',
  },
  dropdownItem: {
    padding: 10,
    borderBottomColor: '#999',
    borderBottomWidth: 1,
  },
  searchImage: {
    height: 20,
    width: 20,
    tintColor: '#FFF',
  },
});

export default AutocompleteComponent;
