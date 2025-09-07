import { StyleSheet, Text, TextInput, View } from "react-native";
import { input } from '../../node_modules/sucrase/dist/esm/parser/traverser/base';
import { GlobalStyles } from "../../constants/styles";

function Input({ label, invalid, style,textInputConfig}) {
  

  const inputStyles = [styles.input];

  if(textInputConfig && textInputConfig.multiline){
    inputStyles.push(styles.inputMultiline);
  }

  return (
    <View style={[styles.inputContainer,style]}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>{label}</Text>
      <TextInput {...textInputConfig} style={[inputStyles, invalid && styles.invalidInput]} />
    </View>
  );
}

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 4,
        marginVertical: 8,
        
    },
    label: {
        fontSize: 12,
        color: GlobalStyles.colors.primary100,
        marginBottom: 4
    },
    input: {
        backgroundColor: GlobalStyles.colors.primary100,
        padding: 6,
        borderRadius: 6,
        fontSize: 18,
        color: GlobalStyles.colors.primary700
    },
    inputMultiline: {
        minHeight: 100,
        textAlignVertical: "top"
    },
    invalidLabel: {
        color: GlobalStyles.colors.error500
    },
    invalidInput: {
        backgroundColor: GlobalStyles.colors.error50
    }
});

export default Input;
