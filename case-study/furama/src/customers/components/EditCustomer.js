import '../components/edit.css'

function EditCustomer () {
    return(
      <div className="body">
  <div className="form">
    <div className="form-header">Edit customer</div>
    <form className="create__form">
      <div className="form__input-content">
        <div className="div">
          <label htmlFor="name">Customer Name</label>
          <input type="text" className="form__input" id="name" />
        </div>
        <div className="div">
          <label htmlFor="time">Id Card</label>
          <input type="number" className="form__input" id="time" />
        </div>
      </div>
      <div className="form__input-content">
        <div className="div">
          <label htmlFor="di">Number Phone</label>
          <input type="text" className="form__input" id="di" />
        </div>
        <div className="div">
          <label htmlFor="date">Date Of Birth</label>
          <input type="date" className="form__input" id="date" />
        </div>
      </div>
      <div className="form__input-content">
        <div className="div">
          <label htmlFor="email">Email</label>
          <input type="text" className="form__input" id="email" />
        </div>
        <div className="div">
          <label>Gender</label>
          <select>
            <option className="option" value>--Gender--</option>
            <option className="option" value="male">Male</option>
            <option className="option" value="famale">Famale</option>
            <option className="option" value="other">Other</option>
          </select>
        </div>
      </div>
      <div className="form__input-content">
        <div className="div">
          <label htmlFor="add">Address</label>
          <input type="text" className="form__input" id="add" />
        </div>
        <div className="div">
          <label>Customer Type</label>
          <select>
            <option className="option" value>--Customer Type--</option>
            <option className="option" value="diamond">Diamond</option>
            <option className="option" value="platinum">Platinum</option>
            <option className="option" value="gold">Gold</option>
            <option className="option" value="silver">Silver</option>
            <option className="option" value="member">Member</option>
          </select>
        </div>
      </div>
      <div className="end-buttons">
        <button className="my-button">Add</button>
      </div>
    </form>
  </div>
</div>

    
    )
}
export default EditCustomer;