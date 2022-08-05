import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { CardHistory } from "../../kecil";

const ListHistory = ({ keranjangPesan }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {keranjangPesan.map((pesan) => {
          return <CardHistory pesan={pesan} key={pesan.id} />;
        })}
      </View>
    </ScrollView>
  );
};

export default ListHistory;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    marginTop: 30,
  },
});
