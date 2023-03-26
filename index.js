const element = (
  <div className="main-container">
    <h1 className="heading">Congratulations</h1>
    <div className="card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        alt="person"
        className="image"
      />
      <h1>Kiran v</h1>
      <p>Vishnu Institute of Computer Education and Technology, Bhimavaram</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        alt="watch"
        className="image"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
