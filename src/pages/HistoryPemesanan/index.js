import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";
import { DataTransaksi } from "../../DataDummy";
import { ListHistory } from "../../components";
import { colors } from "../../utils";

export default class HistoryPemesanan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keranjangPesan: DataTransaksi,
    };
  }
  render() {
    const { keranjangPesan } = this.state;
    return (
      <View style={styles.pages}>
        <ListHistory keranjangPesan={keranjangPesan} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pages: {
    backgroundColor: colors.primary,
    flex: 1
}
});
