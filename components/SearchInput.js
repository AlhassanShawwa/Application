//Alhassan Ashraf Shawwa 120190095

import {StyleSheet, TextInput, View} from 'react-native';
import PropTypes from 'prop-types';
import React, {useState} from 'react';

const SearchInput = ({onSubmit, placeholder = ''}) => {
  const [text, setText] = useState('');

  const handleChangeText = newText => {
    setText(newText);
  };

  const handleSubmitEditing = () => {
    if (!text) return;

    onSubmit(text);
    setText('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        autoCorrect={false}
        value={text}
        placeholder={placeholder}
        placeholderTextColor="white"
        underlineColorAndroid="transparent"
        style={styles.textInput}
        clearButtonMode="always"
        onChangeText={handleChangeText}
        onSubmitEditing={handleSubmitEditing}
      />
    </View>
  );
};

SearchInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    marginTop: 50,
    backgroundColor: '#666',
    marginHorizontal: 20,
    marginVertical:90,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  textInput: {
    flex: 1,
    color: 'white',
  },
});

export default SearchInput;
