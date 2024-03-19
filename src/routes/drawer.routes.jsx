import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";

import Home from "../screens/Home";
import { Filiais } from "../data/data.filiais";

const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
    return (
        <Drawer.Navigator screenOptions={{headerShown: true}}>
            <Drawer.Screen 
            name="Home"
            component={Home}
            options={{
                headerTitle: "",

                drawerIcon: ({ focused }) => (
                    <Feather
                    name="home"
                    size={24}
                    color={focused ? "#131313" : "#D6D6D6"}
                    />
                ),
                drawerLabel: "Inicial",
                drawerActiveTintColor: "#131313",
                drawerInactiveTintColor: "#D6D6D6",
            }}
            />
            
        </Drawer.Navigator>
    );

};

export default DrawerRoutes;