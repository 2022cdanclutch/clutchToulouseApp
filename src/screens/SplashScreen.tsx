import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useEffect, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Eroutes from "../routes/Eroutes";

export const SplashScreen = () => {
  const startAnimation = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  const navigation = useNavigation();
  const [stateCblack, setstateCblack] = useState(false);
  const [stateL, setstateL] = useState(false);
  const [stateU, setstateU] = useState(false);
  const [stateT, setstateT] = useState(false);
  const [stateC, setstateC] = useState(false);
  const [stateH, setstateH] = useState(false);
  setTimeout(() => {
    setstateL(true);
  }, 250);
  setTimeout(() => {
    setstateU(true);
  }, 500);
  setTimeout(() => {
    setstateT(true);
  }, 750);
  setTimeout(() => {
    setstateC(true);
  }, 1000);
  setTimeout(() => {
    setstateH(true);
  }, 1250);
  setTimeout(() => {
    setstateCblack(true);
  }, 1300);

  useEffect(() => {
    setTimeout(() => {
      Animated.parallel([
        Animated.timing(startAnimation, {
          toValue: {
            x: 0,
            y: -Dimensions.get("window").height / 2 + 150,
          },
          useNativeDriver: true,
        }),
      ]).start();
    }, 1500);
  }, []);

  setTimeout(() => {
    navigation.navigate(Eroutes.ROOT);
  }, 2650);
  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.animationContainer,
          {
            transform: [
              { translateY: startAnimation.y },
              { translateX: startAnimation.x },
            ],
          },
        ]}
      >
        {stateCblack ? (
          <Image
            style={{ top: 10, margin: 4 }}
            source={require("../../assets/images/Clutch_icon_green.png")}
          />
        ) : (
          <Image
            style={{ top: 10, margin: 4 }}
            source={require("../../assets/images/Clutch_icon_green.png")}
          />
        )}
        {stateL ? (
          <Image
            style={{ margin: 4 }}
            source={require("../../assets/images/logo/L.png")}
          />
        ) : (
          <Text></Text>
        )}
        {stateU ? (
          <Image
            style={{ top: 14, margin: 4 }}
            source={require("../../assets/images/logo/U.png")}
          />
        ) : (
          <Text></Text>
        )}
        {stateT ? (
          <Image
            style={{ margin: 4 }}
            source={require("../../assets/images/logo/T.png")}
          />
        ) : (
          <Text></Text>
        )}
        {stateC ? (
          <Image
            style={{ top: 10, margin: 4 }}
            source={require("../../assets/images/logo/C.png")}
          />
        ) : (
          <Text></Text>
        )}
        {stateH ? (
          <Image
            style={{ margin: 4 }}
            source={require("../../assets/images/logo/H.png")}
          />
        ) : (
          <Text></Text>
        )}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: "10%",
    justifyContent: "center",
    zIndex: 10,
  },
  animationContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default SplashScreen;
