var togglePassword = document.getElementById("togglePassword");
var passwordlogin = document.getElementById("matkhau_dn");
togglePassword.addEventListener("click", (e) => {
  let type =
    passwordlogin.getAttribute("type") === "password" ? "text" : "password";

  passwordlogin.setAttribute("type", type);

  // toggle the icon

  togglePassword.classList.toggle("bi-eye");
});

function sendInformation() {
  var emaillogin = document.getElementById("email_dn");
  var passwordlogin = document.getElementById("matkhau_dn");

  let emailRex = /^[a-zA-z0-9._-]+@[a-zA-z0-9.-]+\.[a-zA-z]{2,4}$/;

  if (emailRex.test(emaillogin.value) == false) {
    alert("Email khong hop le, Vui long nhap lai email");
    return false;
  }

  if (passwordlogin.value.length < 1) {
    alert("Ban chua nhap mat khau!");
    return false;
  }

  alert("Dang nhap thanh cong");
}

function sendInformationSignUp() {
  var formSignUp = document.getElementById("form_signUp");
  var name = document.getElementById("dk_ten");
  var surname = document.getElementById("dk_ho");
  var email = document.getElementById("dk_email");
  var password = document.getElementById("passwordlogin");

  let emailRex = /^[a-zA-z0-9._-]+@[a-zA-z0-9.-]+\.[a-zA-z]{2,4}$/;

  if (name.value.length < 1) {
    alert("Bạn chưa nhập tên!");
    return false;
  }
  if (surname.value.length < 1) {
    alert("Bạn chưa nhập Họ!");
    return false;
  }

  if (emailRex.test(email.value) == false) {
    alert("Email khong hop le, Vui long nhap lai email");
    return false;
  }

  if (password.value.length < 1) {
    alert("Ban chua nhap mat khau!");
    return false;
  }

  alert("Dang nhap thanh cong");
  //   formSignUp.onsubmit();
}
// RealTime
function startTime() {
  const today = new Date();
  let thu = today.getDay();
  let day = today.getDate();
  let month = today.getMonth();
  let year = today.getFullYear();

  var day_name = "";

  // Lấy tên thứ của ngày hiện tại
  switch (thu) {
    case 0:
      day_name = "Chủ nhật";
      break;
    case 1:
      day_name = "Thứ hai";
      break;
    case 2:
      day_name = "Thứ ba";
      break;
    case 3:
      day_name = "Thứ tư";
      break;
    case 4:
      day_name = "Thứ năm";
      break;
    case 5:
      day_name = "Thứ sau";
      break;
    case 6:
      day_name = "Thứ bảy";
  }

  document.getElementById("day").innerHTML =
    day_name + ", " + day + "-" + month + "-" + year;
  // document.getElementById("day").innerHTML = today;
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("txt").innerHTML = h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}

// trang chu

var overlay = document.getElementsByClassName("");
