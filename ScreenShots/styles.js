import Stylesheet from "react-native"
export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  calculationText: {
    fontSize: 24,
    color: "black",
  },
  btntext: {
    fontSize: 30,
  },
  btntextOP: {
    fontSize: 30,
    color: "white",
  },
  resultText: {
    fontSize: 30,
    color: "white",
  },
  result: {
    flex: 2,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  calculations: {
    flex: 1,
    backgroundColor: "#636363",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  buttons: {
    flex: 7,
    flexDirection: "row",
  },
  btn: {
    flex: 1,
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "center",
  },
  numbers: {
    flex: 3,
    backgroundColor: "#434343",
  },
  operations: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "space-around",
    alignItems: "stretch",
  },
  row: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  opcode: {
    justifyContent: "center",
    alignItems: "center",
  },
  textStyling: {
    color: "#2FFFFF",
    textAlign: "center",
    fontSize: 30,
    padding: 20,
  },
  viewStyle: {
    position: "absolute",
    bottom: 30,
    marginLeft: 30,
    marginRight: 30,
  },
})
