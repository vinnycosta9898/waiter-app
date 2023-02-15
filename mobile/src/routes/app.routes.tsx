// Página de usuarios logados
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { DashBoard } from "../Pages/DashBoard";

const Stack = createNativeStackNavigator();

export function AppRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="DashBoard" 
                component={DashBoard}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}