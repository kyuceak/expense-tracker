import { Pressable, StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

function IconButton({icon, size, color, onPress}) {
  return (
    <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
      <View style={styles.buttonContainer}>
        <AntDesign
          name={icon}
          color={color}
          size={size}

        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 24,
        padding: 6,
        margin: 8
    },
    pressed: {
        opacity: 0.7
    }
})

export default IconButton;
