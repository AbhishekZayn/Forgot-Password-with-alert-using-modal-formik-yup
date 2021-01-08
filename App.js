import React, { Component } from "react";
import { TouchableOpacity, TextInput, Text, View, Modal,Button, Image } from "react-native";
import * as yup from "yup";
import { Formik } from "formik";

class App extends Component {
constructor()
  {
    super();
    this.state={
      show:false
    }
  }
  render() {
    return (
      <Formik
        initialValues={{
          Student_UID: "",
          password: ""
        }}
        onSubmit={(values) => Alert.alert(JSON.stringify(values))}
        validationSchema={yup.object().shape({
          Student_UID: yup.string().email().required(),
          password: yup
            .string()
            .min(4, "Password should be of atleast 4 chars.")
            .required()
        })}
      >
        {({
          values,
          handleChange,
          errors,
          setFieldTouched,
          touched,
          isValid,
          handleSubmit
        }) => (
      <View style={{ flex: 1, padding:15 ,marginTop: 100 }}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>
          Forgot Password
        </Text>
        <Text style={{ marginBottom: 20, fontSize: 12, color: "grey" }}>
          Link with reset password has been to your email id
        </Text>
        <TextInput
                value={values.Student_UID}
                style={{
      borderRadius: 5,
      borderWidth: 1,
      borderColor: "#4e4e4e",
      padding: 10,
      marginTop: 15
    }}
                onChangeText={handleChange("Student_UID")}
                onBlur={() => setFieldTouched("Student_UID")}
                placeholder="Student UID"
              />
              {touched.Student_UID && errors.Student_UID && (
                <Text style={{ fontSize: 10, color: "#FF0D10" }}>
                  {errors.Student_UID}
                </Text>
              )}
        <TouchableOpacity
          style={{
            marginTop: 30,
            backgroundColor: "#6061e2",
            borderRadius: 5,
            width: "100%",
            height: 50,
            textAlign: "left",
            justifyContent: "center",
            alignSelf: "center",
            alignContent: "center",
            alignItems: "center"
          }}
          onPress={()=>{this.setState({show:true})}}
        >
          <Text style={{ color: "white", fontSize: 18 }}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: 245, marginTop: 10 }}>
          <Text>Back to Login</Text>
        </TouchableOpacity>
        <Modal
        transparent={true}
        visible={this.state.show}
        >
          <View style={{backgroundColor:"#000000aa",flex:1}}>
            <View style={{backgroundColor:"#ffffff", marginBottom:325 , marginTop:170 ,marginLeft:10 ,marginRight:10 ,padding:40 , borderRadius:10, flex:1}}>
            <Text style={{fontSize:18, fontWeight:"bold"}}>Opps..!</Text>
            <Text style={{fontSize:12, marginTop:10}}>Please contact system admin as you don't have the registered email</Text>
            <Text style={{fontSize:12, marginTop:10}}>Write your concern at:</Text>
            <View style={{marginTop:10, flex: 1, flexDirection: 'row'}}>
              <Image style={{height:20,width:20}} source={require('./image/email-14-xxl.png')} />
              <Text style={{marginLeft:10 ,fontSize:12}}>rkglobal@gmail.com</Text>  
            </View>
            <View style={{marginTop:5, flex: 1, flexDirection: 'row'}}>
              <Image style={{height:20,width:20}} source={require('./image/calls.png')} />
              <Text style={{fontSize:12, marginLeft:10}}>+91-7836965364</Text>  
            </View>
            <View style={{marginTop:10, flex: 1, flexDirection: 'row'}}>
             <TouchableOpacity
          style={{
            marginTop: 30,
            marginRight:10,
            backgroundColor: "#6061e2",
            borderRadius: 5,
            width: 125,
            height: 40,
            textAlign: "left",
            justifyContent: "center",
            alignSelf: "center",
            alignContent: "center",
            alignItems: "center"
          }}
          onPress={()=>{this.setState({show:false})}}
        >
          <Text style={{ color: "white", fontSize: 18 }}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: 30,
            backgroundColor: "white",
            borderWidth:1,
            borderRadius: 5,
            width: 125,
            height: 40,
            textAlign: "left",
            justifyContent: "center",
            alignSelf: "center",
            alignContent: "center",
            alignItems: "center"
          }}
          onPress={()=>{this.setState({show:false})}}
        >
          <Text style={{ color: "black", fontSize: 18 }}>Cancel</Text>
        </TouchableOpacity>
            </View>
            </View>
          </View>
        </Modal>
      </View>
      )}
      </Formik>
    );
  }
}

export default App;
