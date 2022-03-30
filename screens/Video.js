import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';
import DatePicker from 'react-native-datepicker';


const Video = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <WebView
                style={{ marginTop: (Platform.OS == 'ios') ? 20 : 0, }}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                source={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' }}
            />
        </View>
    )
}

export default Video;