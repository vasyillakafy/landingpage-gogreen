// Form
function checkboxIsChecked() {
    return document.getElementById("status").checked;
  }
  
  function handleGetFormData() {
    const email = document.getElementById("email").value;
    const msg = document.getElementById("msg").value;
    const status = document.getElementById("status").checked;
    const props = {
      msg: msg,
      email: email,
      status: status,
    };
    return props;
  }
  
  function validateFormData(props) {
    if (props != null && checkboxIsChecked()) {
      return true;
    } else {
      return false;
    }
  }
  
  document.getElementById("btn-send").addEventListener("click", function (event) {
    event.preventDefault();
    submit();
  });
  
  function submit() {
    event.preventDefault;
    const props = handleGetFormData();
    const hasil = validateFormData(props);
    if (hasil == false) {
      document.getElementById("warning").innerText = "Periksa form anda sekali lagi!";
    } else {
      return hasil;
    }
  }