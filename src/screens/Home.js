import React, { useEffect } from "react";
import { Dimensions, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { ActivityIndicator, View, StyleSheet, Button } from "react-native";
import { getAllProducts } from "../redux/modules/products";
import { Status } from "../redux/status";
import { ScrollView } from "react-native-gesture-handler";
import { withTheme } from "react-native-elements";

export default Home = () => {
  const dispatch = useDispatch();
  const { products, status } = useSelector((state) => {
    return { products: state.products.data, status: state.products.status };
  });

  useEffect(() => {
    dispatch(getAllProducts());
    console.log("DATA", products);
  }, []);

  return (
    <View style={styles.wrapper}>
      <ScrollView>
        <View style={styles.container}>
          {[].map((res) => {
            return (
              <View
                style={{
                  width: "100%",
                  height: 200,
                  backgroundColor: "white",
                  padding: 10,
                  marginBottom: 16,
                }}
              >
                <Text>{res.productName}</Text>
              </View>
            );
          })}
        </View>
        <ActivityIndicator
          size="large"
          color="#2296f3"
          animating={status === Status.LOADING ? true : false}
        />

        <Button onPress={() => {}} title="On Press" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#333333",
    width: "100%",
    height: "auto",
    padding: 16,
  },
  container: {
    height: Dimensions.get("window").height - 158,
    backgroundColor: "white",
  },
  text: {
    color: "white",
  },
});
