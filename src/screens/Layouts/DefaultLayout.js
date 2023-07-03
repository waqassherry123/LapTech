import React from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    useColorScheme,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScrollIntoView, wrapScrollView } from 'react-native-scroll-into-view';
import Icon from '../../assets/icons/Icon';

// import { color } from '../../theme/colors';
import { color } from '../../theme/colors';
import { widthPercentageToDP } from '../../theme/metrics';

const CustomScrollView = wrapScrollView(ScrollView);

const DefaultLayout = ({ children, backTo, ...props }) => {
    const isLight = useColorScheme() === 'light';
    const insets = useSafeAreaInsets();

    const bottomInset = 0;
    // const bottomInset =
    //   props.bottomInset >= 0
    //     ? props.bottomInset
    //     : insets.bottom - 10 < 0
    //     ? insets.bottom
    //     : insets.bottom - 10;
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : null}
                style={{ flex: 1 }}
                contentContainerStyle={{
                    flexGrow: 1,
                }}
                keyboardVerticalOffset={-bottomInset}>
                <SafeAreaView
                    style={[
                        styles.safeAreaView,
                        {
                            backgroundColor: isLight ? color.White : color.White,
                            paddingBottom: bottomInset,
                        },
                    ]}
                    edges={props.edges ? props.edges : ['top', 'right', 'left']}>
                    <CustomScrollView
                        style={styles.scrollView}
                        refreshControl={props.refreshControl}
                        contentContainerStyle={{
                            flexGrow: 1,
                        }}
                        keyboardShouldPersistTaps={'handled'}>
                        <View style={{}}>{/* <DefaultHeader backTo={backTo} /> */}</View>
                        <View
                            style={{
                                flex: 1,
                                paddingRight: widthPercentageToDP(5),
                                paddingLeft: widthPercentageToDP(5),
                                paddingBottom:
                                    props.bottomInset === 0
                                        ? props.bottomInset
                                        : 31 - bottomInset,
                                // position:'absolute'
                            }}>
                            {children}
                        </View>
                    </CustomScrollView>
                </SafeAreaView>
            </KeyboardAvoidingView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        minHeight: '100%',
    },
    safeAreaView: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
    },
});

export default DefaultLayout;
