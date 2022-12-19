function validate() {
  let message = "";
  let nameInput = document.getElementById("name");
  let lastNameInput = document.getElementById("last_name");
  let personNumberInput = document.getElementById("p-number");
  let melNumberInput = document.getElementById("m-number");

  if (nameInput.value.trim() == "") {
    message += "نام وارد نشده!\n";
  }
  if (lastNameInput.value.trim() == "") {
    message += "نام خانوادگی وارد نشده!\n";
  }
  if (personNumberInput.value.trim() == "") {
    message += "شماره پرسنلی وارد نشده!\n";
  }
  if (melNumberInput.value.trim() == "") {
    message += "کد ملی وارد نشده!\n";
  }
  if (message) {
    alert(message);
  } else {
    alert('با موفقیت ثبت شد.')
  }
}
