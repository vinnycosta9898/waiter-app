import { View, ActivityIndicator} from "react-native";
import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";

export function Routes(){
    const isAuthenticated = false;
    const loading = true;

    if(loading){
        return(
            <View 
                style={{  
                        flex: 1, 
                        backgroundColor: "#F5F7FB",
                        justifyContent: "center", 
                        alignItems: "center"
                        }}
                        >
                        <ActivityIndicator size={60} color="#1D1D2E"/>
            </View>
        )
    }
    return(
        isAuthenticated ? <AppRoutes/> : <AuthRoutes/>
    )
}