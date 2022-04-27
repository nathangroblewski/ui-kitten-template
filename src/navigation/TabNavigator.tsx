import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Pressable } from 'react-native';
import { Screens, TabOneScreen, TabScreens, TabTwoScreen } from '@screens';
import Colors from '../constants/Colors';
import { useColorScheme } from '@hooks';
import { RootTabParamList, RootTabScreenProps } from '../types';

const Tab = createBottomTabNavigator<RootTabParamList>();

export const TabNavigator = () => {
  const colorScheme = useColorScheme();

  return (
    <Tab.Navigator
      initialRouteName={TabScreens.TabOne}
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint
      }}
    >
      <Tab.Screen
        name={TabScreens.TabOne}
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          title: 'Tab One',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate(Screens.Modal)}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1
              })}
            >
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          )
        })}
      />
      <Tab.Screen
        name={TabScreens.TabTwo}
        component={TabTwoScreen}
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />
        }}
      />
    </Tab.Navigator>
  );
};

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
