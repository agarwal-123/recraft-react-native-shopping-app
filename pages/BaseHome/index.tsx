import React from 'react';
import { RouteComponentProps } from 'react-router-native';
import ThemeToggle from '../../components/Base/ThemeToggle';
import { connect } from "react-redux";
import { setThemeAction } from '../../store/reducers/config';
import { Dispatch } from 'redux';
import { AppTheme, AppConstants } from '../../config/DefaultConfig';
import ImageComponent from '../../components/Base/ImageComponent';
import useConstants from '../../hooks/useConstants';
import RoundButton from '../../components/Base/RoundButton';
import { View, ViewStyle, StyleSheet, TextStyle, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ThemedText from '../../components/UI/ThemedText';

// @ts-ignore
const ImagePath = require("../../Recraftsoppify_aap_bg_effect.png")

interface Props extends RouteComponentProps {
  dispatch: Dispatch,
  history
}

const BaseHome: React.FunctionComponent<Props> = ({
  dispatch,
  history
}: Props) => {
  const constants: AppConstants = useConstants();

  const goToBaseNext = () => {
    history.push('/createAccount')
  }

  const goToLogin = () => {
    history.push('/login')
  }

  const backButton = () => {
    history.push('/')
  }

  const updateTheme = (theme: AppTheme) => dispatch(setThemeAction(theme))

  return (
    <>
      {/* <ThemeToggle updateTheme={updateTheme} /> */}
      {/* <ImageComponent src={constants.recraftLogo}/> */}
      <ImageBackground source={ImagePath} style={{ width: '100%', height: '100%' }} >
        <View style={style.container}>
          <TouchableOpacity onPress={backButton}>
            <MaterialIcon name="arrow-left" size={30} color="#900" style={style.backIcon} />
          </TouchableOpacity>
          <View style={style.topContainer}> 
            <ImageComponent src={constants.recraftLogo}/>
          </View>
          <View style={style.childContainer}>
            <ThemedText styleKey="textColor" style={style.title}>{constants.title}</ThemedText>
          </View>
          <RoundButton buttonStyle={style.button} label="LOGIN" onPress={() => { alert("clicked") }} />
          <RoundButton buttonStyle={style.button} label="SIGN UP" onPress={() => { alert("clicked") }} />
          <View style={style.childContainer}>
            <ThemedText style={style.forgotPassword} styleKey="textColor">{"Or Sign Up With"}</ThemedText>
          </View>
          <View style={style.childContainer}>
            <View style={[style.iconContainer, { backgroundColor: '#e3384c' }]}>
              <Icon name="google" size={30} color="#900" style={style.Icon} />
            </View>
            <View style={[style.iconContainer, { backgroundColor: '#39579a' }]}>
              <Icon name="facebook" size={30} color="#900" style={[style.Icon]} />
            </View>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

export default connect(({ dispatch }) => ({ dispatch }))(BaseHome);

interface Style {
  container: ViewStyle;
  topContainer: ViewStyle;
  childContainer: ViewStyle;
  bottomContainer: ViewStyle;
  inputContainer: TextStyle;
  inputLabel: TextStyle;
  forgotPassword: TextStyle;
  title: TextStyle;
  Icon: TextStyle;
  iconContainer: ViewStyle;
  containerBg: ViewStyle;
  containerImage: ViewStyle;
  backIcon: ViewStyle;
  button: ViewStyle;
}

const style: Style = StyleSheet.create<Style>({
  container: {
    paddingLeft: 35,
    paddingRight: 35,
    fontSize: 16,
    backgroundColor: 'transparent'
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 150,
    marginBottom: 10,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 30,
    paddingBottom: 30,
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
  },
  inputLabel: {
    width: "100%",
    color: "#aaaaaa",
    fontSize: 13
  },
  childContainer: {
    flexDirection: 'row',
    justifyContent: "center",
  },
  forgotPassword: {
    marginTop: 30,
    marginBottom: 15,
    fontSize: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    color: "#54afee",
    marginBottom: 110,
  },
  iconContainer: {
    borderRadius: 6,
    margin: 12,
    minWidth: 50,
    shadowOffset: { width: 0, height: 8 },
    shadowColor: 'black',
    shadowOpacity: 0.2,

  },
  Icon: {
    fontSize: 25,
    padding: 15,
    color: '#fff',
    justifyContent: "center",
  },
  backIcon: {
    fontSize: 25,
    position: 'absolute',
    top: 20,
    left: 10,
    color: '#000',
  }
});
