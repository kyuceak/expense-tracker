import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RecentExpensesScreen from "./screens/RecentExpensesScreen";
import AllExpensesScreen from "./screens/AllExpensesScreen";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

const RootStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function AllExpensesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen></Stack.Screen>
      <Stack.Screen></Stack.Screen>
    </Stack.Navigator>
  );
}

function RecentExpensesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen></Stack.Screen>
      <Stack.Screen></Stack.Screen>
    </Stack.Navigator>
  );
}

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#5c1cd4ff" },
        headerTintColor: "white",
        sceneStyle: { backgroundColor: "#4a1aa2ff" },
        tabBarStyle: { backgroundColor: "#5c1cd4ff" },
        headerRight: ({ color, size }) => (
          <AntDesign
            name="plus"
            color="white"
            size={24}
            style={{ paddingRight: 15}}
          />
        ),
      }}
    >
      <Tab.Screen
        name="Recent Expenses"
        component={RecentExpensesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="timer-sand-empty"
              color={color}
              size={size}
            />
          ),
          tabBarActiveTintColor: "#faab45ff",
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
          tabBarActiveTintColor: "#faab45ff",
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
        <RootStack.Navigator>
          <RootStack.Screen
            name="Tabs"
            component={BottomTabs}
            options={{ headerShown: false }}
          ></RootStack.Screen>
          {/* <RootStack.Screen name="AddExpense"></RootStack.Screen> */}
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
