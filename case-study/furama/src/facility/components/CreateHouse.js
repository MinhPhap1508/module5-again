import React from 'react';

function CreateHouse() {
    return (
        <div>
            <div className="container px-5 my-5">
  <form id="contactForm" data-sb-form-api-token="API_TOKEN">
    <div className="form-floating mb-3">
      <input
        className="form-control"
        id="serviceName"
        type="text"
        placeholder="Service Name"
        data-sb-validations=""
      />
      <label htmlFor="serviceName">Service Name</label>
    </div>
    <div className="form-floating mb-3">
      <input
        className="form-control"
        id="area"
        type="text"
        placeholder="Area"
        data-sb-validations=""
      />
      <label htmlFor="area">Area</label>
    </div>
    <div className="form-floating mb-3">
      <input
        className="form-control"
        id="rentalCost"
        type="text"
        placeholder="Rental Cost"
        data-sb-validations=""
      />
      <label htmlFor="rentalCost">Rental Cost</label>
    </div>
    <div className="form-floating mb-3">
      <input
        className="form-control"
        id="capacity"
        type="text"
        placeholder="Capacity"
        data-sb-validations=""
      />
      <label htmlFor="capacity">Capacity</label>
    </div>
    <div className="form-floating mb-3">
      <input
        className="form-control"
        id="rentalType"
        type="text"
        placeholder="Rental Type"
        data-sb-validations=""
      />
      <label htmlFor="rentalType">Rental Type</label>
    </div>
    <div className="form-floating mb-3">
      <input
        className="form-control"
        id="roomStandard"
        type="text"
        placeholder="Room Standard"
        data-sb-validations=""
      />
      <label htmlFor="roomStandard">Room Standard</label>
    </div>
    <div className="form-floating mb-3">
      <input
        className="form-control"
        id="amenities"
        type="text"
        placeholder="Amenities"
        data-sb-validations=""
      />
      <label htmlFor="amenities">Amenities</label>
    </div>
    <div className="form-floating mb-3">
      <input
        className="form-control"
        id="poolArea"
        type="text"
        placeholder="Pool Area"
        data-sb-validations=""
      />
      <label htmlFor="poolArea">Pool Area</label>
    </div>
    <div className="form-floating mb-3">
      <input
        className="form-control"
        id="floors"
        type="text"
        placeholder="Floors"
        data-sb-validations=""
      />
      <label htmlFor="floors">Floors</label>
    </div>
    <div className="form-floating mb-3">
      <input
        className="form-control"
        id="freeServices"
        type="text"
        placeholder="Free Services"
        data-sb-validations=""
      />
      <label htmlFor="freeServices">Free Services</label>
    </div>
    <div className="form-floating mb-3">
      <input
        className="form-control"
        id="rentalType"
        type="text"
        placeholder="Rental Type"
        data-sb-validations=""
      />
      <label htmlFor="rentalType">Rental Type</label>
    </div>
    <div className="form-floating mb-3">
      <input
        className="form-control"
        id="image"
        type="text"
        placeholder="Image"
        data-sb-validations=""
      />
      <label htmlFor="image">Image</label>
    </div>
    <div className="d-grid">
      <button
        className="btn btn-primary"
        id="submitButton"
        type="submit"
      >
        Submit
      </button>
    </div>
  </form>
</div>

        </div>
    );
}

export default CreateHouse;