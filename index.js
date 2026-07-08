const WEBAPP_URL = "https://curiosity-webapp.vercel.app";

document.getElementById("join-course-btn").addEventListener("click", () => {
  const code = document.getElementById("course-code-input").value.trim();
  const url = new URL(WEBAPP_URL + "/");
  url.searchParams.set("view", "login-code");
  if (code) {
    url.searchParams.set("code", code);
  }
  window.location.href = url.toString();
});
