import {
  MessageStyle,
  MessageContentStyle,
  MessageTimestampLeft,
} from "./message.style";
import Ievent from "../../redux/slices/Ievent";
import { format, getHours } from "date-fns";
import { Text, Button, StyleSheet, Pressable } from "react-native";
import fr from "date-fns/locale/fr";
import { capitalize } from "lodash";
import { FC } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useNavigation } from "@react-navigation/native";
import Eroutes from "../../routes/Eroutes";

type TMessage = {
  event: Ievent;
  index: number;
};
const Message: FC<TMessage> = ({ event, index }) => {
  var alerts = useAppSelector((state) => state.alerts.alerts);
  console.log("ALERTS", alerts);
  const whenEventIs = (date: any) => {
    const hours = getHours(new Date(date));
    if (hours < 18 && hours > 12) {
      return "Cette après-midi";
    } else if (hours < 12) {
      return "Ce matin";
    } else {
      return "Ce soir";
    }
  };

  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const deleteAlert = (event: any) => {
    dispatch({ type: "alerts/disableAlert", payload: event["@id"] });
    console.log("DELETE ALERT");
  };

  return (
    <MessageStyle index={index}>
      <Pressable
        onPress={() => {
          dispatch({
            type: "events/setSelectedEvent",
            payload: event,
          }); //Définition de l'évènement sélectionné
          navigation.navigate(Eroutes.EVENT_DETAILS_SCREEN); //navigation sur les détails de l'évenement
        }}
      >
        <MessageContentStyle>
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
            }}
          >
            {capitalize(
              format(new Date(event.start_date), "PPPPp", { locale: fr })
            )}
          </Text>
          <Pressable style={styles.button} onPress={() => deleteAlert(event)}>
            <Text style={{ color: "red", fontSize: 18 }}>×</Text>
          </Pressable>
          <Text
            style={{
              color: "white",
            }}
          >
            {whenEventIs(event.start_date)} {event.name.toUpperCase()} AU{" "}
            {event.location.name.toUpperCase()}
          </Text>

          {/* <FontAwesome5 onPress={deleteAlert(event.name)} style={{ position: 'absolute', right: 0, top: 10 }} name={'trash'} size={15} color="white"/> */}
        </MessageContentStyle>
        <MessageTimestampLeft></MessageTimestampLeft>
      </Pressable>
    </MessageStyle>
  );
};

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    paddingVertical: 0,
    paddingHorizontal: 0,
    right: -3,
    top: -10,
  },
});

export default Message;
