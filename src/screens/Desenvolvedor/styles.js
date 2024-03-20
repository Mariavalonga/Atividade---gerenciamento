import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1, 
    
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#082347",  
    color: "white",
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#C9D4FF",
    borderRadius: 5,
    color: "white",
  
  },
  text: {
    color: "white",
    textAlign: "center",
    alignItems: "center",
    marginBottom: 20,
    

  },
  logoEscola: {
    width: 350,
    height: 350,
    marginRight: 10,
    
 
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20, 
    color: "#CD853F",
    textAlign: "center", 
  

  },
  title2: {
    padding: 50,
    fontSize: 24,
    fontWeight: "bold",
     color: "#CD853F",
    textAlign: "center", 
  },
 
  imagens: {
    marginRight: 10,
    marginBottom: 20,
    width: 350,
    height: 250,
  },
  imagens2: {
    marginRight: 10,
    marginBottom: 20,
    textAlign: "center",
    width: 300,
    height: 300,
  },
  imagens3: {
    width: 300,
    height: 200,
    marginBottom: 20,
  },
});

export default styles;