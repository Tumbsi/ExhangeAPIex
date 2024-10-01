import { View, Text, StyleSheet } from 'react-native'
import { Picker } from '@react-native-picker/picker'

export default function CurrencySelector({values, selected, onValueChange}) {
    return (
        <View style={styles.pickerContainer}>
        <Picker
        style={styles.picker}
        onValueChange={(itemValue) => onValueChange(itemValue)}
        selectedValue={selected}
    >
        {values.map((currency) => (
            <Picker.Item key={currency.key} label={currency.label} value={currency.value} />
        ))}
    </Picker>
    </View>
    );
}

const styles = StyleSheet.create({
    pickerContainer: {
      width: '100%',
      alignItems: 'center',
    },
    picker: {
      width: '70%',
    },
  });