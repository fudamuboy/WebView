#React Native WebView App

This is a simple React Native mobile application that demonstrates basic navigation and web content integration.
Features

    Stack Navigation between two screens:

        HomeScreen: The main landing page.

        WebScreen: Displays the Migros website inside the app using a WebView.

    WebView component to load external web content within the app.

    Loading Indicator:

        An ActivityIndicator (spinner) with a "Loading..." text is displayed while the webpage is loading.

        The loading screen disappears once the content is fully loaded.

    Customized Header:

        The WebScreen shows a customized header with a back button labeled "Retour" and a title "Migros".

        The HomeScreen has the header hidden for a cleaner look.

Technologies Used

    @react-navigation/native

    @react-navigation/native-stack

    react-native-webview

    react-native-safe-area-context

    expo-constants

🔧 How It Works

    When the app starts, it loads the HomeScreen.

    From there, users can navigate to the WebScreen, which opens the Migros website inside the app.

    While the website is loading, a spinner and loading message are shown.

    After the page finishes loading, the spinner disappears, and the user can interact with the website normally.
