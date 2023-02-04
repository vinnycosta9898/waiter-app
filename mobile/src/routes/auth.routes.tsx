// Pagina de usuarios não logados 
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SignIn } from "../Pages/SignIn";

const Stack = createNativeStackNavigator();

export function AuthRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="SignIn" component={SignIn} />
        </Stack.Navigator>
    )
}