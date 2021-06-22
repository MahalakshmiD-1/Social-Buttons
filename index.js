function Button(props) {
  //   Write your code here.
  const { className, buttonText } = props;
  return <button className={`button ${className}`}>{buttonText}</button>;
}

const element = (
  //   Write your code here.
  <div className="background-container">
    <div className="sub-container">
      <h1 class="heading">Social Buttons</h1>
      <div className="buttons-container">
      <Button className="btn1" buttonText="Like"/>
      <Button className="btn2" buttonText="Comment"/>
      <Button className="btn3" buttonText="Share"/>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
