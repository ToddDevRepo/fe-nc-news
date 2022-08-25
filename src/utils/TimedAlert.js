class TimedAlert {
  #_element;

  constructor(element) {
    this.#_element = element;
  }

  showAlert(alert, ms) {
    this.#_element.innerText = alert;
    setTimeout(() => {
      this.#_element.innerText = "";
    }, ms);
  }
}

export default TimedAlert;
