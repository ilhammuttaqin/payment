import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { colors, numberWithCommas, responsiveWidth } from "../../../utils";
import Gap from "../Gap";

const CardHistory = ({ pesan }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.tanggal}>{pesan.tanggalPemesanan}</Text>
      {pesan.transaksi.map((history, index) => {
        return (
          <View style={styles.history} key={index}>
            <Text style={styles.textBold}>{index + 1}.</Text>
            <Image source={history.produk.gambar} style={styles.produk} />
            <View style={styles.desc}>
              <Text style={styles.nama}>{history.produk.nama}</Text>
              <Text style={styles.harga}>
                Rp. {numberWithCommas(history.produk.harga)}
              </Text>
              <Gap height={7} />
              <Text style={styles.textBold}>
                Pesan : {history.jumlahPesanan}
              </Text>
              <Text style={styles.textBold}>
                SubTotal : Rp. {numberWithCommas(history.subTotal)}
              </Text>
            </View>
          </View>
        );
      })}
      <Gap height={10} />
      <View style={styles.footer}>
        <View style={styles.label}>
          <Text style={styles.textPrimary}>Status :</Text>
          <Text style={styles.textPrimary}>Ongkir (2-3 Hari) :</Text>
          <Text style={styles.textPrimary}>Total Harga :</Text>
        </View>

        <View style={styles.label}>
          <Text style={styles.textPrimary}>{pesan.status}</Text>
          <Text style={styles.textPrimary}>Rp. 15.000</Text>
          <Text style={styles.textPrimary}>
            Rp. {numberWithCommas(pesan.totalHarga + 15000)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CardHistory;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.mainBackground,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  history: {
    flexDirection: "row",
    marginTop: 10,
  },
  desc: {
    marginLeft: responsiveWidth(10),
  },
  produk: {
    marginLeft: responsiveWidth(10),
    width: responsiveWidth(66),
    height: responsiveWidth(66),
  },
  tanggal: {
    fontSize: 16,
    fontWeight: "bold",
  },
  nama: {
    fontSize: 13,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  textBold: {
    fontSize: 11,
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
  },
  label: {
    flex: 1,
  },
  textPrimary: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.secondary,
    textTransform: "uppercase",
    textAlign: "right",
  },
});
