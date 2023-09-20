function CreateContract () {
    return(
        <>
        <h1>Create Contact</h1>
        <div className="container px-5 my-5">
  <form id="contactForm" data-sb-form-api-token="API_TOKEN">
    <div className="mb-3">
      <label className="form-label" htmlFor="numberContact">
        Number Contact
      </label>
      <input
        className="form-control"
        id="numberContact"
        type="text"
        placeholder="Number Contact"
        data-sb-validations=""
      />
    </div>
    <div className="mb-3">
      <label className="form-label" htmlFor="startDate">
        Start Date
      </label>
      <input
        className="form-control"
        id="startDate"
        type="text"
        placeholder="Start Date"
        data-sb-validations=""
      />
    </div>
    <div className="mb-3">
      <label className="form-label" htmlFor="endDate">
        End Date
      </label>
      <input
        className="form-control"
        id="endDate"
        type="text"
        placeholder="End Date"
        data-sb-validations=""
      />
    </div>
    <div className="mb-3">
      <label className="form-label" htmlFor="deposit">
        Deposit
      </label>
      <input
        className="form-control"
        id="deposit"
        type="text"
        placeholder="Deposit"
        data-sb-validations=""
      />
    </div>
    <div className="mb-3">
      <label className="form-label" htmlFor="totalCoast">
        Total Coast
      </label>
      <input
        className="form-control"
        id="totalCoast"
        type="text"
        placeholder="Total Coast"
        data-sb-validations=""
      />
    </div>
    <div className="d-none" id="submitSuccessMessage">
      <div className="text-center mb-3">
        <div className="fw-bolder">Form submission successful!</div>
        <p>To activate this form, sign up at</p>
        <a href="https://startbootstrap.com/solution/contact-forms">
          https://startbootstrap.com/solution/contact-forms
        </a>
      </div>
    </div>
    <div className="d-none" id="submitErrorMessage">
      <div className="text-center text-danger mb-3">Error sending message!</div>
    </div>
    <div className="d-grid">
      <button
        className="btn btn-primary btn-lg disabled"
        id="submitButton"
        type="submit"
      >
        Submit
      </button>
    </div>
  </form>
</div>

        </>
    )
}
export default CreateContract