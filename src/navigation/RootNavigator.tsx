import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Screens, ModalScreen, NotFoundScreen } from '@screens';

import { RootStackParamList } from '../types';
import { TabNavigator } from './TabNavigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screens.Root}
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Screens.NotFound}
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name={Screens.Modal} component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
