import { useContext } from 'react';
import { View, Text, Button} from 'react-native';
import { AuthContext } from '../../contexts/AuthContext';

export function DashBoard() {
  const { signOut } = useContext(AuthContext);
  
  return (
    <View>
        <Text>DashBoard</Text>
        <Button
          title="Sait do App"
          onPress={signOut}
        />
    </View>
  )
}
