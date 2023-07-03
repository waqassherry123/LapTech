import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import { fontSize, fontWeight } from '../../theme/fonts';
import * as space from './Spacers';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../theme/metrics'
import { color } from '../../theme/colors';
// import Icon from '../../assets/icons/Icon';
import { style as globalStyle } from '../../utils/globalStyles';
//biggest, baddest title used for main page in stack
//<StackHeader icon={}></Stackheader>

// export const StackHeader = ({ children, ...props }) => {
//     return (
//         <>
//             <space.s2 />
//             <View style={[styles.StackHeaderContainer]}>
//                 <Text style={[styles.StackHeader, props.textStyles]}>
//                     {children}
//                 </Text>
//                 {/* Clickable Icon as needed ie nutrition settings*/}
//                 {props.icon ? [<TouchableOpacity onPress={props.onPress}><Icon name={props.icon} fill={color.Blue} height={hp(3.25)} width={hp(3.25)} style={{ marginTop: hp(-.4) }} /></TouchableOpacity>] : []}
//             </View>
//             <space.s3 />
//         </>
//     )
// }

//title used for main pages in stack
//<PageTitle></PageTitle>
// export const PageTitle = ({ children, ...props }) => {
//     return (
//         <>
//             <Text style={[styles.PageTitle, props.style]}>
//                 {children}
//             </Text>
//             <space.s1 />
//         </>
//     )
// }

//titles used for section inside of page
//<SectionTitle></SectionTitle>
// export const SectionTitle = ({ children, ...props }) => {
//     return (
//         <>
//             <Text style={[styles.SectionTitle, { ...props.style }]}>
//                 {children}
//             </Text>
//         </>
//     )
// }

//main text
//<Copy></Copy>
// export const Copy = ({ children, ...props }) => {
//     return (
//         <>
//             <Text
//                 onPress={props.onPress ? () => props.onPress() : () => { }}
//                 style={[styles.Copy, { ...props.style }]}
//             >
//                 {children}
//             </Text>
//             <space.s1 />
//         </>
//     )
// }

//small text
//<Caption></Caption>
// export const Caption = ({ children, ...props }) => {
//     return (
//         <>
//             <Text style={[styles.Caption, props.style]}>
//                 {children}
//             </Text>
//             <space.s0 />
//         </>
//     )
// }

//used for feature text on cards
//<CardTitle></CardTitle>
export const CardTitle = ({ children, ...props }) => {
    return (
        <>
            <Text style={[styles.CardTitle, { ...props.style }]}>
                {children}
            </Text>
        </>
    )
}

//used for primary text on cards
//<CardText></CardText>
// export const CardText = ({ children, ...props }) => {
//     return (
//         <>
//             <Text style={[styles.CardText, { ...props.style }]}>
//                 {children}
//             </Text>
//         </>
//     )
// }

//used for small text on cards
//<CardCaption></CardCaption>
// export const CardCaption = ({ children }) => {
//     return (
//         <>
//             <Text style={[styles.CardCaption]}>
//                 {children}
//             </Text>
//         </>
//     )
// }

//used as pair for Pair/Value Components
//<Pair></Pair>
// export const Pair = ({ children, ...props }) => {
//     return (
//         <>
//             <Text style={[styles.Pair, { color: (props.textColor ? props.textColor : props.error ? color.Red : color.Blue) }]}>
//                 {children}
//             </Text>
//         </>
//     )
// }

//used as value for Pair/Value Components
//<Value></Value>
// export const Value = ({ children, ...props }) => {
//     return (
//         <>
//             <Text style={[styles.Value, { color: (props.textColor ? props.textColor : (props.error ? color.Red : color.Blue)) }]}>
//                 {children}
//             </Text>
//         </>
//     )
// }


// CALS title
// used in nutrition section at manual entry and signle item detail
// export const CalsTitle = (props) => {
//     return (
//         <View
//             style={[globalStyle.flexRow, globalStyle.startCenter]}
//         >
//             <Text style={[globalStyle.sixBold, globalStyle.txtBlue]}>
//                 +{props.userCalories} Cal{" "}
//             </Text>
//             <space.s1 />
//             <Text style={[globalStyle.txtBlue]}>
//                 {" "}
//                 {props.caloriesCount ? props.caloriesCount : ""}
//             </Text>
//         </View>
//     )
// }
const styles = StyleSheet.create({
    StackHeader: {
        fontSize: hp(4),
        lineHeight: hp(4),
        fontWeight: '500',
        height: 'auto',
    },

    StackHeaderContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    PageTitle: {
        fontSize: hp(3),
        lineHeight: hp(3),
        fontWeight: '500',
        height: 'auto',
    },

    SectionTitle: {
        fontSize: hp(2.5),
        lineHeight: hp(2.5),
        fontWeight: '500',
        height: 'auto',
    },

    Copy: {
        fontSize: hp(2),
        lineHeight: hp(2.5),
        height: 'auto',
    },

    Caption: {
        fontSize: hp(1.5),
        lineHeight: hp(1.5),
        height: 'auto',
    },

    CardTitle: {
        fontSize: hp(2),
        // lineHeight: hp(3),
        fontWeight: '700',
        height: 'auto',
    },

    CardText: {
        fontSize: hp(1.65),
        lineHeight: hp(1.65),
        height: 'auto',
    },

    CardCaption: {
        fontSize: hp(1.25),
        lineHeight: hp(1.25),
        height: 'auto',
    },

    Pair: {
        fontSize: hp(2),
        lineHeight: hp(2),
        fontWeight: '700',
        height: 'auto',
    },

    Value: {
        fontSize: hp(2),
        lineHeight: hp(2),
        height: 'auto',
        flexWrap: 'wrap',
        textAlign: 'right',
    },


})
