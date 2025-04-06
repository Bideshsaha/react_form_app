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
    <div className="flex flex-col items-center mt-2">
      <form onSubmit={submitHandler}>
      <label htmlFor="firstName">First Name</label><br></br>
        <input
        type="text"
        name="firstName"
        id="firstName"
        placeholder="Enter your name"
        value={FormData.firstName}
        onChange={changeHandler}
        className="outline"
        />
        <br></br>
      <label htmlFor="lasttName">Last Name</label><br></br>
        <input
        type="text"
        name="lastName"
        id="lastName"
        placeholder="Enter your name"
        value={FormData.lastName}
        onChange={changeHandler}
        className="outline"
        />
      
        <br></br>
      <label htmlFor="email">email</label><br></br>
        <input
        type="text"
        name="email"
        id="email"
        placeholder="Enter your Email"
        value={FormData.email}
        onChange={changeHandler}
        className="outline"
        />
      
        <br></br>
      <label htmlFor="country">Country</label>
      <br></br>
      <select
      id="country"
      name="country"
      value={FormData.country}
      onChange={changeHandler}
      className="outline"
      >
        <option>India</option>
        <option>United states</option>
        <option>Canada</option>
        <option>Maxico</option>

      </select>

        <br></br>
      <label htmlFor="streetAddress">Street Address</label><br></br>
        <input
        type="text"
        name="streetAddress"
        id="streetAddress"
        placeholder="Madhyamgram"
        value={FormData.streetAddress}
        onChange={changeHandler}
        className="outline"
        />

        <br></br>
      <label htmlFor="city">City</label><br></br>
        <input
        type="text"
        name="city"
        id="city"
        placeholder="kolkata"
        value={FormData.city}
        onChange={changeHandler}
        className="outline"
        />

        <br></br>
      <label htmlFor="state">State</label><br></br>
        <input
        type="text"
        name="state"
        id="state"
        placeholder="West Bengal"
        value={FormData.state}
        onChange={changeHandler}
        className="outline"
        />

        <br></br>
      <label htmlFor="postalCode">PIN</label><br></br>
        <input
        type="text"
        name="postalCode"
        id="postalCode"
        placeholder="700130"
        value={FormData.postalCode}
        onChange={changeHandler}
        className="outline"
        />


      <fieldset>
        <legend>By Email</legend>
        <div className="flex">
          <input
            id="comments"
            name="comments"
            type="checkbox"
            checked={FormData.comments}
            onChange={changeHandler}
          />
          <div>
            <label htmlFor="comments">Comments</label>
            <p>Get notified when someones posts a comment on a posting</p>
          </div>
        </div>

        <div className="flex">
          <input
            id="candidates"
            name="candidates"
            type="checkbox"
            checked={FormData.candidates}
            onChange={changeHandler}
          />
          <div>
            <label htmlFor="candidates">Candidates</label>
            <p>Get notified when a candidate applies for a job</p>
          </div>
        </div>

        <div className="flex">
          <input
            id="offers"
            name="offers"
            type="checkbox"
            checked={FormData.offers}
            onChange={changeHandler}
          />
          <div>
            <label htmlFor="offers">Offers</label>
            <p>Get notified when a candidate accepts or rejects an offer</p>
          </div>
        </div>
      </fieldset>

      <fieldset>
      <legend>Push Notifications</legend>
      <p>These are delivered via SMS to your mobile phone</p>

      <input
        type="radio"
        id="pushEverything"
        name="pushNotifications"
        value="Everything"
        onChange={changeHandler}
      />

      <label htmlFor="pushEverything">Everything</label>
      <br></br>
      <input
        type="radio"
        id="pushEmail"
        name="pushNotifications"
        value="Same as Email"
        onChange={changeHandler}
      />

      <label htmlFor="pushEmail">Same as Email</label>
      <br></br>
      <input
        type="radio"
        id="pushNothing"
        name="pushNotifications"
        value="No Push Notifications"
        onChange={changeHandler}
      />

      <label htmlFor="pushNothing">No Push Notifications</label>

      </fieldset>
      <button className="bg-blue-500 text-white font-bold rounded py-2 px-4">Save</button>
      </form>
    </div>
  );
}

export default App;
