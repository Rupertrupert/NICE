import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const AlbumDetail = (props) => {
  const { thumbnail_image, title, artist, image } = props.album;
  return (
    <View style={styles.cardContainerStyle}>
      <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
        <Image
          style={styles.thumbnailStyle}
          source={{
            uri: thumbnail_image
          }}
        />
        <View style={styles.headerContentStyle}>
          <Text style={[styles.textStyle, styles.titleStyle]}>{title}</Text>
          <Text style={[styles.textStyle, styles.artistStyle]}>{artist}</Text>
        </View>
      </View>
      <View style={styles.cardSectionStyle}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: image
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  thumbnailContainerStyle: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
    margin: 5
  },
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 10,
  },
  titleStyle:{
    fontSize:18,
    color: "#FFFFFF" ,
  },
  artistStyle:{
    color: "#FFFFFF" 
  },
  cardContainerStyle: {
    borderWidth: 0,
    borderRadius: 2,
    borderColor: "#000",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 2
  },
  cardSectionStyle: {
    padding:5,
    backgroundColor: "#000",
    borderColor: "#ddd",
    borderBottomWidth: 1
  },
  imageStyle: {
    height: 370,
    width:null
  }
});

export default AlbumDetail;