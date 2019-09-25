import AwesomeAlert from 'react-native-awesome-alerts';

<AwesomeAlert
alertContainerStyle={{
  zIndex: 9999,
  textAlign: 'center',
  backgroundColor: 'white',
  elevation: 3
}}
overlayStyle={{
  backgroundColor: 'transparent'
}}
show={this.state.showAlert}
showProgress={false}
title='Something went wrong'
message={this.state.err}
closeOnTouchOutside={true}
closeOnHardwareBackPress={false}
showCancelButton={false}
showConfirmButton={true}
messageStyle={{
  textAlign: 'center'
}}
cancelText='No, cancel'
confirmText='OK'
confirmButtonColor='#DD6B55'
onCancelPressed={() => {
  this.hideAlert();
}}
onConfirmPressed={() => {
  this.hideAlert();
}}
/>