import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import Home from "../screens/Home";
import Desenvolvedor from "../screens/Desenvolvedor";


const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="home"
              size={24}
              color={focused ? "#082347" : "#082347"}
            />
          ),
          tabBarLabel: "Inicial",
          tabBarActiveTintColor: "#082347",
          tabBarInactiveTintColor: "#082347",
        }}
      />
        <Tab.Screen
        name="Desenvolvedor"
        component={Desenvolvedor}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="home"
              size={24}
              color={focused ? "#082347" : "#082347"}
            />
          ),
          tabBarLabel: "Desenvolvedor",
          tabBarActiveTintColor: "#082347",
          tabBarInactiveTintColor: "#082347",
        }}
      />





    </Tab.Navigator>
  );
};

export default TabRoutes;