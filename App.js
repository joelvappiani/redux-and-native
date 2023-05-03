import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import InputScreen from '../redux-and-native/screens/InputScreen';
import ShowScreen from '../redux-and-native/screens/ShowScreen';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import messages from '../redux-and-native/reducers/messages';

const store = configureStore({
    reducer: { messages },
});

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ color, size }) => {
                            let iconName = '';

                            if (route.name === 'Home') {
                                iconName = 'home';
                            } else if (
                                route.name === 'Show'
                            ) {
                                iconName = 'star';
                            }

                            return (
                                <FontAwesome
                                    name={iconName}
                                    size={size}
                                    color={color}
                                />
                            );
                        },
                        tabBarActiveTintColor: '#2196f3',
                        tabBarInactiveTintColor: 'gray',
                        headerShown: false,
                    })}
                >
                    <Tab.Screen
                        name='Home'
                        component={InputScreen}
                    />
                    <Tab.Screen
                        name='Show'
                        component={ShowScreen}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

//1.Créer un nouveau dossier OH14, et créer un nouveau projet expo. Installer tous les modules, ainsi que les modules nécessaires à la bottom-tab navigation. Tester le bon fonctionnement du projet avec yarn start.
//2.Créer un composant InputScreen.js et un composant ShowScreen.js.
//3. Créer une bottomTabNavigation qui permettra de naviguer entre ces deux composants
//4. Dans l'InputScreen créez un input et un boutton avec la mécanique d'états qui va vous permettre de stocker la valeur de l'input et de la traiter.
//5. Initialisez votre store redux dans le fichier App.js, n'oubliez pas d'importer et d'ajouter les modules nécessaires.
//6. Créez un dossier reducers qui contiendra un fichier messages.js, dans ce fichier créez et exportez deux actions: une qui va vous permettre de stocker les messages de l'input dans le store sous forme d'array (addMessages) et une autre qui va vous permettre de supprimer un messages de cet array (removeMessage)
//7. Connectez vos composants via useDispatch et useSelector afin de pouvoir capter les messages écrits dans l'InputScreen et de les afficher sur le ShowScreen
//8. Ajoutez un bouton delete sur chacun de vos messages affichés dans ShowScreen qui va vous permettre via le reducer de le supprimer de la liste
