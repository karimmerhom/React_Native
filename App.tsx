import {SafeAreaView} from 'react-native';
import {COLORS, icons, images} from './constants';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenHeaderBtn from './components/common/header/ScreenHeaderBtn';
import HomePage from './components/home/homePage/homePage';
import JobDetails from './components/jobdetails/jobDetailsPage/jobDetailsPage';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="home"
            component={HomePage}
            options={{
              headerStyle: {backgroundColor: COLORS.lightWhite},
              headerShadowVisible: false,
              headerLeft: () => (
                <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
              ),
              headerRight: () => (
                <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
              ),
              headerTitle: '',
            }}
          />
          <Stack.Screen
            name="jobDetails"
            component={JobDetails}
            options={{
              headerStyle: {backgroundColor: COLORS.lightWhite},
              headerShadowVisible: false,
              headerLeft: () => (
                <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
              ),
              headerRight: () => (
                <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
              ),
              headerTitle: '',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
