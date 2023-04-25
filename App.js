import {SafeAreaView, Text, View, StyleSheet } from "react-native";
import {Ionicons, MaterialCommunityIcons,FontAwesome} from "react-native-vector-icons";

const App = props => {
  return (
    <SafeAreaView style={{backgroundColor:"#eee", flex:1 }}>
      {/* Heading */}
        <View>
          <Text style={styles.heading}>
            <Text style={{color: "#024c98", fontWeight: "bold"}}>GTB</Text>
            <Text style={{color: "#4b99fb"}}>Pay</Text>
          </Text>
        </View>

      {/* Your Balance */}
       
        <View style={styles.center}>
            <View style={styles.box}>
              <Text>Your Balance</Text>
              <Text style={styles.balanceSize}>1,500,000.00Ks</Text>
              <View style={styles.userQr}>
                <Text>Thet Naing</Text>
                <MaterialCommunityIcons name="qrcode-scan" size={25}/>
              </View>
            </View>
          </View>

        {/* Add Receive */}
        <View style={styles.addRec}>
            <View style={styles.boxRec}>
              <Ionicons name="ios-arrow-down-circle-outline" size={34} color={"#5097fa"}/>
              <Text style={{marginTop: 20}}>Add or Receive</Text>
            </View>
            <View style={styles.boxRec2}>
                <View style={{width: 30, height: 30, borderWidth: 2, borderColor: "#5097fa",borderRadius: 100, display: "flex", justifyContent: "center", alignItems: "center"}}>
                  <FontAwesome name="send-o" size={15} color={"#5097fa"}/>
                </View>
              <Text style={{marginTop: 20}}>Send Money</Text>
            </View>
        </View>

        {/* Recent Activity */}
       <View style={{alignItems:"center"}}>
        <View style={{ width: "95%", backgroundColor: "#e6e6ff", borderRadius: 15, padding:20}}>
              <Text style={{ color: "374151"}}>Recent Activity</Text>
          </View>
       </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  heading: {
      marginTop: 30,
      fontSize: 30,
      textAlign: "center",
      color: "purple",
      fontWeight: "bold",
      marginBottom: 15,
  },                                                                                                                                                                                                                                                                                                                                                                             
  box: {
    width: "95%",
    // height: 100,
    backgroundColor: "#eeffe6",
    borderRadius: 15,
    padding: 20,
  },
  center: {
    alignItems: "center",

  },
  balanceSize:{
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 20,
  },
  userQr: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addRec: {
    // flex: 1,
    flexDirection: 'row',
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
  },
  boxRec:{
    // flex: 1,
    width: "48%",
    height: 120,
    backgroundColor: '#e6ffff',
    marginRight: 10,
    borderRadius: 15,
    padding: 15,
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 10,
  },
    boxRec2: {
  //   flex: 1,
    width: "48%",
    height: 120,
    backgroundColor: '#e6ffff',
    marginRight: 10,
    borderRadius: 15,
    padding: 15,
    paddingTop: 20,
    paddingBottom: 20,
  }
})
export default App;