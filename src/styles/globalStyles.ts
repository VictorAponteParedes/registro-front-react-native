import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  input: {
    marginBottom: 10,
    padding: 12,
    borderWidth: 2.0,
    borderColor: "#000",
    borderRadius: 8,
    width: 340,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    marginLeft: 5,
    color: "#000",
  },

  outerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerModal: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    padding: 35,
    borderRadius: 8,
  },
  icon: {
    marginBottom: 8,
  },
  successText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
  },
  containerListaUsuario: {
    height: "auto",
    justifyContent: "center",
    padding: 16,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 16,
    fontStyle: "italic",
  },

  usuarioItem: {
    marginBottom: 12,
    padding: 10,
    borderWidth: 2,
    borderColor: "#226b5e",
    borderRadius: 15,
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  botonEliminar: {
    backgroundColor: "#ffcccc",
  },

  containerLogin: {
    paddingVertical: 25,
    paddingHorizontal: 25,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 35,
  },

  containerRegistro: {
    paddingVertical: 25,
    paddingHorizontal: 25,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 35,
  },
  backgroundImage: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "cover",
  },
  backgroundImageDetalle: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "cover",
  },

  toggleContainer: {
    marginTop: 16,
    alignItems: "center",
  },

  toggleText: {
    color: "black",
    textAlign: "center",
    fontSize: 14,
    fontStyle: "italic",
    fontWeight: "bold",
  },

  linkText: {
    color: "blue",
    textDecorationLine: "underline",
  },

  registroStilo: {
    backgroundColor: "#00b0f0",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },

  button: {
    backgroundColor: "#226b5e",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },

  botonListaUsuario: {
    marginTop: 10,
  },

  imageContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  selectedImage: {
    width: 200,
    height: 200,
    marginTop: 10,
    borderRadius: 10,
  },
  errorText: {
    color: "red",
    marginTop: 10,
  },

  containerUpdate: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
});

export default globalStyles;
