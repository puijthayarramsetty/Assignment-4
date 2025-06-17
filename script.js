document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!validatePhone(username)) {
    showMessage("📵 Invalid phone number! Must start with 6-9 and be 10 digits.", "danger");
    return;
  }

  if (!validatePassword(password)) {
    showMessage("🔑 Password must be at least 4 characters long.", "danger");
    return;
  }

  if (isLoginValid(username, password)) {
    showMessage("✅ Login successful!", "success");
    // Optionally redirect here
  } else {
    showMessage("❌ Invalid login credentials!", "danger");
  }
});

function validatePhone(phone) {
  const regex = /^[6-9]\d{9}$/;
  return regex.test(phone);
}

function validatePassword(pass) {
  return pass.length >= 4;
}

function isLoginValid(user, pass) {
  const validUser = "9876543210";
  const validPass = "1234";
  return user === validUser && pass === validPass;
}

function showMessage(message, type) {
  const msgDiv = document.getElementById("message");
  msgDiv.innerHTML = `<div class="alert alert-${type}" role="alert">${message}</div>`;
}
