import React from "react";

const Address = () => {
  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-map-marker position-absolute"></i>
        <span className="d-block">Address Point</span>Near Big Satwa Mosque Dubai,UAE
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">mail me</span>{" "}
        <a href="mailto:adnanmaqsood383@gmail.com">adnanmaqsood383@gmail.com</a>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-phone-square position-absolute"></i>
        <span className="d-block">call me</span>{" "}
        <a href="Tel: +923059843866">+92 305 9843 866</a>
      </p>
      <p className="open-sans-font custom-span-contact position-relative">
        <i class="fa fa-whatsapp position-absolute"></i>
        <span className="d-block">Whatsapp</span>{" "}
        <a href="https://wa.link/x21yf9">+92 305 9843 866</a>
        <a href="https://wa.link/3x3pv8">+971 547 597 296</a>
      </p>
      {/* End .custom-span-contact */}
    </>
  );
};

export default Address;
