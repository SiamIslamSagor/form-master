import "./App.css";
import Grandpa from "./components/Grandpa/Grandpa";
// import ReusableForm from "./components/ReusableForm/ReusableForm";
// import HookForm from "./components/HookForm/HookForm";
// import RefForm from "./components/RefForm/RefForm";
// import SimpleForm from "./components/SimpleForm/SimpleForm";
// import StatefulForm from "./components/StatefulForm/StatefulForm";

function App() {
  /* const handleSignUpSubmit = data => {
    console.log("sign up data", data);
  };

  const handleUpdateProfile = data => {
    console.log("update profile data", data);
  }; */

  return (
    <>
      <h1>Form Master</h1>

      <Grandpa></Grandpa>

      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm formTitle={"Sign Up"} handleSubmit={handleSignUpSubmit}>
        <div>
          <h1>Sign Up</h1>
          <p>Please Sign Up Right now</p>
        </div>
      </ReusableForm>
      <ReusableForm
        formTitle={"Profile Update"}
        handleSubmit={handleUpdateProfile}
        submitBtnText="Update"
      >
        <div>
          <h1>Update Profile</h1>
          <p>Always keep your profile update</p>
        </div>
      </ReusableForm> */}
    </>
  );
}

export default App;
