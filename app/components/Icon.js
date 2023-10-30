import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";

export default function Icon({name, size=40, backgroundColour='black', iconColour='white'}) {
  return (
    <View style={{
      width: size,
      height: size,
      borderRadius: size / 2,
      backgroundColor: backgroundColour,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <MaterialCommunityIcons
        name={name}
        color={iconColour}
        size={size / 2}
      />
    </View>
  );
}
