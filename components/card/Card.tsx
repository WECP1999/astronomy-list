import { Image, Text, View } from "react-native";
import { IData } from "../../utils/interfaces/IData";
import { cardStyle } from "./Card.style";

type CardProp = {
  item: IData;
};

const Card = ({ item }: CardProp) => {
  return (
    <View style={cardStyle.cardContainer}>
      <View style={cardStyle.card}>
        <Image style={cardStyle.image} source={{ uri: item.image }} />

        <View style={cardStyle.cardContent}>
          <View>
            <Text style={cardStyle.cardHeader}>{item.name}</Text>
          </View>
          <View style={cardStyle.cardDescription}>
            <Text>
              {item.description.length > 200
                ? item.description.slice(0, 200) + "..."
                : item.description}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Card;
