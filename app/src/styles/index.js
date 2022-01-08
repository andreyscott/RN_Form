import { StyleSheet } from "react-native";
import COLORS from "../consts/color";

const STYLES = StyleSheet.create({
  inputContainer: { flexDirection: "row", marginTop: 20 },
  input: {
    color: COLORS.light,
    paddingLeft: 30,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderRadius: 15,
    borderColor: "#ffdf00",
    borderBottomWidth: 0.5,
    flex: 1,
    height: 40,
    fontSize: 18,
  },
  inputIcon: { marginTop: 15, position: "absolute" },
  btnPrimary: {
    backgroundColor: "#fcfc0a",
    height: 50,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },

  btnSecondary: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  btnImage: { width: 20, height: 20, marginLeft: 22 },
});

export default STYLES;
