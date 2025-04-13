import "./App.css";
import {useState} from "react";

function App() {

  const [FormData,setFormData] = useState({
    firstName:"",lastName:"",email:"", country:"India",
    streetAddress:"",city:"", state:"",postalCode:"",
    comments:false,candidates:false,offers:false,
    pushNotifications:""
  })

  function changeHandler(event){
    const {name, value, checked, type} = event.target;
    setFormData( (prev) => ({...prev, [name]:type === "checkbox" ? checked: value}))
  }
  function submitHandler(event){
    event.preventDefault();
    console.log("Form Data");
    console.log(FormData);
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10 px-4">
      <form onSubmit={submitHandler} className="bg-white p-8 rounded-xl shadow-md w-full max-w-2xl space-y-6">
      <h1 className="text-2xl font-bold text-gray-700">User Registration</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium">First Name</label><br></br>
            <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Enter your name"
            value={FormData.firstName}
            onChange={changeHandler}
            className="mt-1 block w-full border rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
            />
        </div>

        <div>
          <label htmlFor="lasttName" className="block text-sm font-medium">Last Name</label><br></br>
            <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Enter your Last name"
            value={FormData.lastName}
            onChange={changeHandler}
            className="mt-1 block w-full border rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
            />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium">email</label><br></br>
          <input
          type="text"
          name="email"
          id="email"
          placeholder="Enter your Email"
          value={FormData.email}
          onChange={changeHandler}
          className="mt-1 block w-full border rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
          />
      </div>
      <div>
        <label htmlFor="country" className="block text-sm font-medium">Country</label>
        <br></br>
        <select
        id="country"
        name="country"
        value={FormData.country}
        onChange={changeHandler}
        className="mt-1 block w-full border rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
        >
          <option>India</option>
          <option>United states</option>
          <option>Canada</option>
          <option>Maxico</option>

        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      
        <label htmlFor="streetAddress" className="block text-sm font-medium">Street Address</label><br></br>
          <input
          type="text"
          name="streetAddress"
          id="streetAddress"
          placeholder="Madhyamgram"
          value={FormData.streetAddress}
          onChange={changeHandler}
          className="mt-1 block w-full border rounded-md px-3 py-2 shadow-sm"
          />
      </div>
      <div>
        <label htmlFor="city" className="block text-sm font-medium">City</label><br></br>
          <input
          type="text"
          name="city"
          id="city"
          placeholder="kolkata"
          value={FormData.city}
          onChange={changeHandler}
          className="mt-1 block w-full border rounded-md px-3 py-2 shadow-sm"
          />
      </div>
      <div>
        <label htmlFor="state" className="block text-sm font-medium">State</label><br></br>
          <input
          type="text"
          name="state"
          id="state"
          placeholder="West Bengal"
          value={FormData.state}
          onChange={changeHandler}
          className="mt-1 block w-full border rounded-md px-3 py-2 shadow-sm"
          />
      </div>
      <div>
        <label htmlFor="postalCode" className="block text-sm font-medium">PIN</label><br></br>
          <input
          type="text"
          name="postalCode"
          id="postalCode"
          placeholder="700130"
          value={FormData.postalCode}
          onChange={changeHandler}
          className="mt-1 block w-full border rounded-md px-3 py-2 shadow-sm"
          />
      </div>
      <div>
      <fieldset className="border border-gray-300 rounded-lg p-4 bg-gray-50 space-y-4 mt-4">
        <legend className="font-semibold text-gray-800 mb-2">By Email</legend>
          <div className="flex items-start space-x-3">
            <input
              id="comments"
              name="comments"
              type="checkbox"
              checked={FormData.comments}
              onChange={changeHandler}
              className="mt-1"
            />
            <div className="text-sm text-gray-700">
              <label htmlFor="comments" className="font-medium">Comments</label>
              <p>Get notified when someones posts a comment on a posting</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <input
              id="candidates"
              name="candidates"
              type="checkbox"
              checked={FormData.candidates}
              onChange={changeHandler}
              className="mt-1"
            />
            <div className="text-sm text-gray-700">
              <label htmlFor="candidates" className="font-medium">Candidates</label>
              <p>Get notified when a candidate applies for a job</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <input
              id="offers"
              name="offers"
              type="checkbox"
              checked={FormData.offers}
              onChange={changeHandler}
            />
            <div className="text-sm text-gray-700">
              <label htmlFor="offers" className="font-medium">Offers</label>
              <p>Get notified when a candidate accepts or rejects an offer</p>
            </div>
          </div>
      </fieldset>

      <fieldset className="border border-gray-300 rounded-lg p-4 bg-gray-50 mt-4">
        <legend className="font-semibold text-gray-800 mb-2">Push Notifications</legend>
        <p className="text-sm text-gray-600 mb-3">These are delivered via SMS to your mobile phone</p>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="pushEverything"
              name="pushNotifications"
              value="Everything"
              onChange={changeHandler}
            />

            <label htmlFor="pushEverything" className="text-sm text-gray-700">Everything</label>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="pushEmail"
              name="pushNotifications"
              value="Same as Email"
              onChange={changeHandler}
            />

            <label htmlFor="pushEmail" className="text-sm text-gray-700">Same as Email</label>
          </div>

          <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="pushNothing"
                  name="pushNotifications"
                  value="No Push Notifications"
                  onChange={changeHandler}
                />

                <label htmlFor="pushNothing" className="text-sm text-gray-700">No Push Notifications</label>
          </div>
      </div>
    </fieldset>
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg mt-4 transition duration-300">Save</button>
    </div>
  </form>
</div>
  );
}

export default App;
