import React, { Fragment, useState } from "react";
import {
  Map,
  mapStyles,
  markerStyle,
} from "../../components/map/mapView.style";
import MapView, { Callout, Marker } from "react-native-maps";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Appearance,
  TouchableHighlight,
  Pressable,
} from "react-native";
import { useGetAllEventsQuery } from "../../api/events.service";
import fr from "date-fns/locale/fr";
import { FontAwesome } from "@expo/vector-icons";
import { format } from "date-fns";
import DateTimePicker from "react-native-modal-datetime-picker";
import { useNavigation } from "@react-navigation/native";
import Eroutes from "../../routes/Eroutes";
import { useAppDispatch } from "../../redux/hooks";

const styles = StyleSheet.create({
  title: {
    fontFamily: "Poppins-Bold",
    fontSize: 12,
    color: "#000000",
  },
  description: {
    fontFamily: "Poppins-SemiBoldItalic",
    fontSize: 10,
    color: "#000000",
  },
  date: {
    fontFamily: "Poppins-Bold",
    fontSize: 12,
    color: "#ffffff",
    padding: 5,
  },
  icon: {
    fontFamily: "Poppins-Bold",
    fontSize: 12,
    color: "#ffffff",
  },
});

const styleDateBox = StyleSheet.create({
  dateBox: {
    position: "absolute",
    top: 35,
    right: 5,
    alignSelf: "center",
    backgroundColor: "rgb(0,0,0)",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    flexDirection: "row",
    padding: 2,
  },
});

const MapScreen = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  let events: any[] = [];
  const currentMonth = selectedDate.getMonth() + 1;
  const dayBefore =
    selectedDate.getDate() -
    1 +
    "-" +
    currentMonth +
    "-" +
    selectedDate.getFullYear();
  const tomorrow =
    selectedDate.getDate() +
    1 +
    "-" +
    currentMonth +
    "-" +
    selectedDate.getFullYear();
  const { data } = useGetAllEventsQuery(
    "page=1&itemsPerPage=50&start_date[strictly_before]=" +
      tomorrow +
      "&start_date[strictly_after]=" +
      dayBefore
  );
  const eventsByLocation: { lieu: any; events: any[] }[] = [];

  function loadMarkers(date: Date) {
    return (
      new Date(date).getMonth() === selectedDate.getMonth() &&
      new Date(date).getDate() === selectedDate.getDate() &&
      new Date(date).getFullYear() === selectedDate.getFullYear()
    );
  }

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    setSelectedDate(date);
    hideDatePicker();
  };
  const MapMarkers = () => {
    if (data) {
      events = data.filter((d) => loadMarkers(new Date(d.start_date)));
      events.forEach((event) => {
        if (!eventsByLocation.find((evt) => evt.lieu === event.location.name)) {
          // si le lieu de cet event existe pas
          eventsByLocation.push({ lieu: event.location.name, events: [event] });
        } else {
          // si le lieu de cet event existe déjà
          const index = eventsByLocation.findIndex(
            (evt) => evt.lieu === event.location.name
          );
          eventsByLocation[index].events.push(event);
        }
      });
    }
    return (
      <>
        {eventsByLocation &&
          eventsByLocation.map((event, index) => (
            <Fragment key={index}>
              {event.events.length === 1 &&
                event.events.map((evt) =>
                  evt.location.latitude && evt.location.longitude ? (
                    <Marker
                      key={evt.id}
                      coordinate={{
                        latitude: evt.location.latitude,
                        longitude: evt.location.longitude,
                      }}
                      title="Titre"
                      description="description"
                    >
                      {evt.category === 1 && (
                        <Image
                          style={markerStyle.markerImage}
                          resizeMode={"contain"}
                          source={
                            Appearance.getColorScheme() === "dark"
                              ? require("../../../assets/images/markers/Fant_violet_dark.png")
                              : require("../../../assets/images/markers/Fant_violet.png")
                          }
                        />
                      )}
                      {evt.category === 2 && (
                        <Image
                          style={markerStyle.markerImage}
                          resizeMode={"contain"}
                          source={require("../../../assets/images/markers/Fant_bleu.png")}
                        />
                      )}
                      {evt.category === 3 && (
                        <Image
                          style={markerStyle.markerImage}
                          resizeMode={"contain"}
                          source={require("../../../assets/images/markers/Fant_black.png")}
                        />
                      )}
                      {evt.category === 4 && (
                        <Image
                          style={markerStyle.markerImage}
                          resizeMode={"contain"}
                          source={require("../../../assets/images/markers/Fant_jaune.png")}
                        />
                      )}
                      {evt.category === 5 && (
                        <Image
                          style={markerStyle.markerImage}
                          resizeMode={"contain"}
                          source={require("../../../assets/images/markers/Fant_rose.png")}
                        />
                      )}
                      <Callout
                        key={evt.id}
                        onPress={() => {
                          dispatch({
                            type: "events/setSelectedEvent",
                            payload: evt,
                          });//définition de l'évènement sélectionné sur l'event ouvert sur la map
                          navigation.navigate(Eroutes.EVENT_DETAILS_SCREEN);//navigation sur les détais de l'évenement
                        }}
                      >
                        <View style={markerStyle.popupHeader}>
                          <Text style={styles.title}>
                            <FontAwesome
                              name="map-marker"
                              size={15}
                              color="#000000"
                            />
                            {"  " + event.events[0].location.name}
                          </Text>
                        </View>
                        <View style={markerStyle.popup}>
                          <Text style={styles.description}>
                            <FontAwesome
                              name="music"
                              size={10}
                              color="#000000"
                            />
                            {"  " + evt.name}
                          </Text>
                          <Text style={styles.description}>
                            <FontAwesome
                              name="clock-o"
                              size={10}
                              color="#000000"
                            />
                            {"  " +
                              format(new Date(evt?.start_date), "p", {
                                locale: fr,
                              })}
                          </Text>
                        </View>
                      </Callout>
                    </Marker>
                  ) : null
                )}
              {event.events.length > 1 &&
              event.events[0].location.latitude &&
              event.events[0].location.longitude ? (
                <Marker
                  key={event.events[0].id}
                  coordinate={{
                    latitude: event.events[0].location.latitude,
                    longitude: event.events[0].location.longitude,
                  }}
                  title="Titre"
                  description="description"
                >
                  {event.events[0].category === 1 && (
                    <Image
                      style={markerStyle.markerImage}
                      resizeMode={"contain"}
                      source={
                        Appearance.getColorScheme() === "dark"
                          ? require("../../../assets/images/markers/Fant_violet_dark.png")
                          : require("../../../assets/images/markers/Fant_violet.png")
                      }
                    />
                  )}
                  {event.events[0].category === 2 && (
                    <Image
                      style={markerStyle.markerImage}
                      resizeMode={"contain"}
                      source={
                        Appearance.getColorScheme() === "dark"
                          ? require("../../../assets/images/markers/Fant_bleu_dark.png")
                          : require("../../../assets/images/markers/Fant_bleu.png")
                      }
                    />
                  )}
                  {event.events[0].category === 3 && (
                    <Image
                      style={markerStyle.markerImage}
                      resizeMode={"contain"}
                      source={
                        Appearance.getColorScheme() === "dark"
                          ? require("../../../assets/images/markers/Fant_black_dark.png")
                          : require("../../../assets/images/markers/Fant_black.png")
                      }
                    />
                  )}
                  {event.events[0].category === 4 && (
                    <Image
                      style={markerStyle.markerImage}
                      resizeMode={"contain"}
                      source={
                        Appearance.getColorScheme() === "dark"
                          ? require("../../../assets/images/markers/Fant_jaune_dark.png")
                          : require("../../../assets/images/markers/Fant_jaune.png")
                      }
                    />
                  )}
                  {event.events[0].category === 5 && (
                    <Image
                      style={markerStyle.markerImage}
                      resizeMode={"contain"}
                      source={
                        Appearance.getColorScheme() === "dark"
                          ? require("../../../assets/images/markers/Fant_rose_dark.png")
                          : require("../../../assets/images/markers/Fant_rose.png")
                      }
                    />
                  )}
                  <Callout>
                    <View style={markerStyle.popupHeader}>
                      <Text style={styles.title}>
                        <FontAwesome
                          name="map-marker"
                          size={45}
                          color="#000000"
                        />
                        {"  " + event.events[0].location.name}
                      </Text>
                    </View>
                    {event.events.map((evt, index) => (
                      //POUR CHAQUE EVENEMENT:
                      <Pressable
                        key={index}
                        onPress={() => {
                          dispatch({
                            type: "events/setSelectedEvent",
                            payload: evt,
                          });//Définition de l'évènement sélectionné sur le paragraphe de chaque évènements
                          navigation.navigate(Eroutes.EVENT_DETAILS_SCREEN);//navigation sur les détais de l'évenement
                        }}
                      >
                        <View style={markerStyle.popup}>
                          <Text style={styles.description}>
                            <FontAwesome
                              name="music"
                              size={10}
                              color="#000000"
                            />
                            {"  " + evt.name}
                          </Text>
                          <Text style={styles.description}>
                            <FontAwesome
                              name="clock-o"
                              size={10}
                              color="#000000"
                            />
                            {"  " +
                              format(new Date(evt!.start_date), "p", {
                                locale: fr,
                              })}
                          </Text>
                        </View>
                      </Pressable>
                    ))}
                  </Callout>
                </Marker>
              ) : null}
            </Fragment>
          ))}
      </>
    );
  };
  return (
    <View style={mapStyles.container}>
      <MapView
        style={mapStyles.map}
        initialRegion={{
          latitude: 43.604466,
          longitude: 1.442929,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        <MapMarkers />
      </MapView>
      <View style={styleDateBox.dateBox}>
        <TouchableHighlight onPress={showDatePicker}>
          <Text style={styles.date}>
            <FontAwesome
              name="calendar-o"
              style={styles.icon}
              size={15}
              color="#ffff"
            />
            {"  " +
              format(new Date(selectedDate), "dd/MM/yyyy", { locale: fr })}
          </Text>
        </TouchableHighlight>
        <DateTimePicker
          isVisible={isDatePickerVisible}
          mode="date"
          date={selectedDate}
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          locale={"fr_FR"}
        />
      </View>
    </View>
  );
};
export default MapScreen;
