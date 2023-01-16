import TitleWithImage from "../../components/title/titleWithImage/TitleWithImage";
import { MessageContainer } from "../../components/message/message.style";
import HeaderIcons from "../../components/headers/HeadersIcons";
import ScreenWrapper from "../../components/ScreenWrapper";
import Message from "../../components/message/Message";
import { useAppSelector } from "../../redux/hooks";
import { ScrollView, Button } from "react-native";
import { sortBy } from "lodash";

const AlertsScreen = () => {
  const alerts = useAppSelector((state) => state.alerts.alerts);
  return (
    <ScreenWrapper>
      <ScrollView
        style={{ marginBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        <HeaderIcons />
        <TitleWithImage
          title={"ENVIES"}
          image={require("../../../assets/images/clutch/Clutch_signature.png")}
        />
        {sortBy(alerts, (event) => new Date(event.start_date)).map(
          (event, index) => (
            <MessageContainer index={index} key={index}>
              <Message index={index} event={event} />
            </MessageContainer>
          )
        )}
      </ScrollView>
    </ScreenWrapper>
  );
};

export default AlertsScreen;
