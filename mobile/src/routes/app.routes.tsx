// Página de usuarios logados
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DashBoard } from "../Pages/DashBoard";
import { Order } from "../Pages/Order";

export type StackParamsList = {
    DashBoard: undefined;
    Order: {
        number: number | string;
        order_id: string;
    };
}

const Stack = createNativeStackNavigator<StackParamsList>();

export function AppRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="DashBoard" 
                component={DashBoard}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="Order"
                component={Order}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}