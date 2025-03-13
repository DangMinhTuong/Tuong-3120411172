// Cuộn trang đến section tương ứng
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// Nút "Lên đầu trang" (Back to Top)
const backToTopBtn = document.getElementById("backToTop");

// Hiển thị nút khi cuộn xuống dưới 200px
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

// Cuộn lên đầu trang
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
