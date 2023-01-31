import React, { useState } from "react";
import { Http } from "../../config/Service";
import { apis } from "../../config/WebConstant";
import "./FormDesign.css";
const FormDesign = () => {
  const [gst, setGst] = useState("");
  const [shopPlatFrom, setShopPlatFrom] = useState("");
  const [shippingServices, setShippingServices] = useState("");
  const [socialMedia, setSocialMedia] = useState("");
  const [userData, setUserData] = useState("");

  const [registrationData, setRegistrationData] = useState({
    shop_name: "",
    owner_name: "",
    contactNo: "",
    whatsappNo: "",
    shopAddress: "",
    Geolocation: { latitude: "", longitude: "" },
    ShopGstNo: "",
    ShopListedPlatForm: "",
    ShippingServices: "",
    anySuggestion: "",
    socialMediaPage: "",
    monthlySales: "",
    yearlyTurnover: "",
  });
  console.log(registrationData);

  const getInput = (e) => {
    setRegistrationData((previous) => {
      return { ...previous, [e.target.name]: e.target.value };
    });
  };

  const getLocation = () => {
    const success = (position) => {
      const { latitude, longitude } = position.coords;
      setRegistrationData((previous) => {
        return {
          ...previous,
          Geolocation: { latitude: latitude, longitude: longitude },
        };
      });
    };

    const error = (error) => {
      console.log(error);
    };

    navigator.geolocation.getCurrentPosition(success, error);
  };

  const storeData = (e) => {
    console.log("aaaaa");
    Http.PostAPI(apis.storeData, registrationData, null)
      .then((res) => {
        console.log("Store Data", res);
        if (res?.data?.status) {
          setUserData(res?.data?.data);
          console.log(res.data);
        } else {
          alert("Fields not matched");
        }
      })
      .catch((e) => {
        console.log("Error:", e);
      });
  };

  return (
    <div className="form-body">
      <div className="row">
        <div className="form-holder">
          <div className="form-content">
            <div className="form-items">
              <h3>Registeration Form</h3>
              <p>Fill in the data below.</p>
              <form
                className="requires-validation"
                noValidate=""
                onSubmit={storeData}
              >
                <div className="col-md-12 ">
                  <input
                    className="form-control"
                    type="text"
                    name="shop_name"
                    placeholder="Shop Name"
                    required=""
                    onChange={(e) => {
                      getInput(e);
                    }}
                  />
                  <div className="valid-feedback">
                    Shop Name field is valid!
                  </div>
                  <div className="invalid-feedback">
                    Shop Name field cannot be blank!
                  </div>
                </div>
                <div className="col-md-12">
                  <input
                    className="form-control"
                    type="text"
                    name="ownerName"
                    placeholder="Owner Name"
                    required=""
                    onChange={(e) => {
                      getInput(e);
                    }}
                  />
                  <div className="valid-feedback">
                    Owner Name field is valid!
                  </div>
                  <div className="invalid-feedback">
                    Owner Name field cannot be blank!
                  </div>
                </div>
                <div className="col-md-12">
                  <input
                    className="form-control"
                    type="number"
                    name="contactNo"
                    placeholder="Contact No."
                    required=""
                    onChange={(e) => {
                      getInput(e);
                    }}
                  />
                  <div className="valid-feedback">
                    Contact No. field is valid!
                  </div>
                  <div className="invalid-feedback">
                    Contact No. field cannot be blank!
                  </div>
                </div>

                <div className="col-md-12">
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="E-mail Address"
                    required=""
                    onChange={(e) => {
                      getInput(e);
                    }}
                  />
                  <div className="valid-feedback">Email field is valid!</div>
                  <div className="invalid-feedback">
                    Email field cannot be blank!
                  </div>
                </div>

                <div className="col-md-12">
                  <input
                    className="form-control"
                    type="number"
                    name="whatsappNo"
                    placeholder="Whatsapp No"
                    required=""
                    onChange={(e) => {
                      getInput(e);
                    }}
                  />
                  <div className="valid-feedback">
                    whtasapp No.field is valid!
                  </div>
                  <div className="invalid-feedback">
                    whatsapp No. field cannot be blank!
                  </div>
                </div>

                <div className="col-md-12 col-sm-6">
                  <textarea
                    className="form-control"
                    type="text"
                    name="shopAddress"
                    placeholder="Shop Address"
                    required=""
                    onChange={(e) => {
                      getInput(e);
                    }}
                  />
                  <div className="valid-feedback">
                    {" "}
                    Shop Address field is valid!
                  </div>
                  <div className="invalid-feedback">
                    Shop Address field cannot be blank!
                  </div>
                </div>

                <div className="form-button mt-3">
                  <button
                    id="submit"
                    type="submit"
                    className="btn btn-primary "
                    onClick={getLocation}
                  >
                    Get Current Location
                  </button>
                </div>

                <div className="col-md-12">
                  <select
                    className="form-select mt-3"
                    required=""
                    onClick={(e) => setGst(e.target.value)}
                  >
                    <option selected="" disabled="" value="">
                      Shop Gst Registered
                    </option>
                    <option value="yes">Yes</option>
                    <option value="">No</option>
                  </select>
                  {gst ? (
                    <div className="col-md-12">
                      <input
                        className="form-control"
                        type="number"
                        placeholder="Enter Your Gst No.Here"
                        name="ShopGstNo"
                        required=""
                        onChange={(e) => {
                          getInput(e);
                        }}
                      />
                    </div>
                  ) : (
                    <></>
                  )}
                </div>

                <div className="col-md-12">
                  <select
                    className="form-select mt-3"
                    required=""
                    onClick={(e) => setShopPlatFrom(e.target.value)}
                  >
                    <option selected="" disabled="" value="">
                      Is shop Listed In Anywhere Platform
                    </option>
                    <option value="yes">Yes</option>
                    <option value="">No</option>
                  </select>
                  {shopPlatFrom ? (
                    <div className="col-md-12">
                      <input
                        className="form-control"
                        type="number"
                        placeholder="Enter Your Gst No.Here"
                        name="ShopGstNo"
                        required=""
                        onChange={(e) => {
                          getInput(e);
                        }}
                      />
                    </div>
                  ) : (
                    <></>
                  )}
                </div>

                <div className="col-md-12">
                  <select
                    className="form-select mt-3"
                    required=""
                    onClick={(e) => setShippingServices(e.target.value)}
                  >
                    <option selected="" disabled="" value="">
                      Do You Provide Shipping Service
                    </option>
                    <option value="yes">Yes</option>
                    <option value="">No</option>
                  </select>
                  {shippingServices ? (
                    <div className="col-md-12">
                      <input
                        className="form-control"
                        type="number"
                        placeholder="Enter Your Gst No.Here"
                        name="ShopGstNo"
                        required=""
                        onChange={(e) => {
                          getInput(e);
                        }}
                      />
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="col-md-12">
                  <input
                    className="form-control"
                    type="number"
                    name="monthlySales"
                    placeholder="Monthly Sales"
                    required=""
                    onChange={(e) => {
                      getInput(e);
                    }}
                  />
                  <div className="valid-feedback">
                    Monthly Sales field is valid!
                  </div>
                  <div className="invalid-feedback">
                    Monthly Sales field cannot be blank!
                  </div>
                </div>
                <div className="col-md-12">
                  <input
                    className="form-control"
                    type="number"
                    name="yearlyTurnover"
                    placeholder="Yearly Turnover"
                    required=""
                    onChange={(e) => {
                      getInput(e);
                    }}
                  />
                  <div className="valid-feedback">
                    Yearly Turnover field is valid!
                  </div>
                  <div className="invalid-feedback">
                    Yearly Turnover field cannot be blank!
                  </div>
                </div>

                <div className="col-md-12 col-sm-6">
                  <textarea
                    className="form-control"
                    type="text"
                    name="anySuggestion"
                    placeholder="Any Suggestion"
                    required=""
                    onChange={(e) => {
                      getInput(e);
                    }}
                  />
                  <div className="valid-feedback">
                    {" "}
                    Any Suggestion field is valid!
                  </div>
                  <div className="invalid-feedback">
                    Any Suggestion field cannot be blank!
                  </div>
                </div>

                <div className="col-md-12">
                  <select
                    className="form-select mt-3"
                    required=""
                    onClick={(e) => setSocialMedia(e.target.value)}
                  >
                    <option selected="" disabled="" value="">
                      Any Social Media Pages
                    </option>
                    <option value="yes">Yes</option>
                    <option value="">No</option>
                  </select>
                  {socialMedia ? (
                    <div className="col-md-12">
                      <input
                        className="form-control"
                        type="number"
                        placeholder="Enter Your Gst No.Here"
                        name="ShopGstNo"
                        required=""
                        onChange={(e) => {
                          getInput(e);
                        }}
                      />
                    </div>
                  ) : (
                    <></>
                  )}
                </div>

                <div className="form-button mt-3">
                  <button id="submit" type="submit" className="btn btn-primary">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FormDesign;
