import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RecentExpensesScreen from "./screens/RecentExpensesScreen";
import AllExpensesScreen from "./screens/AllExpensesScreen";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { GlobalStyles } from "./constants/styles";
import IconButton from "./components/ui/IconButton";
import ManageExpensesScreen from "./screens/ManageExpensesScreen";

const RootStack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: "white",
        sceneStyle: { backgroundColor: "#4a1aa2ff" },
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ tintColor }) => (
          <IconButton
            icon="plus"
            size={24}
            color={tintColor}
            onPress={() => {
              navigation.navigate("ManageExpense");
            }}
          />
        ),
      })}
    >
      <Tab.Screen
        name="Recent Expenses"
        component={RecentExpensesScreen}
        options={{
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="timer-sand-empty"
              color={color}
              size={size}
            />
          ),

          tabBarLabelStyle: { fontSize: 14, fontWeight: "bold" },
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="All Expenses"
        component={AllExpensesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign
              name="calendar"
              color={color}
              size={size}
            />
          ),
          tabBarLabelStyle: { fontSize: 14, fontWeight: "bold" },
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light"></StatusBar>
      <NavigationContainer>
        <RootStack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
            headerTintColor: "white",
          }}
        >
          <RootStack.Screen
            name="Tabs"
            component={BottomTabs}
            options={{ headerShown: false }}
          ></RootStack.Screen>
          <RootStack.Screen
            name="ManageExpense"
            component={ManageExpensesScreen}
            options={{
              presentation: "modal"
            }}
          ></RootStack.Screen>
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
