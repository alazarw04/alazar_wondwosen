// file.js
console.log("FAQ script loaded");
const questions = document.querySelectorAll(".faq-question");
questions.forEach(button => {
  button.addEventListener("click", function() {
    const controls = this.getAttribute("aria-controls");
    const answer = document.getElementById(controls);
    const isOpen = (this.getAttribute("aria-expanded") === "true");
    // Close all others
    questions.forEach(btn => {
      if (btn !== this) {
        btn.setAttribute("aria-expanded", "false");
        const otherAnswer = document.getElementById(btn.getAttribute("aria-controls"));
        if (otherAnswer) otherAnswer.style.display = "none";
      }
    });
    // Toggle this one
    this.setAttribute("aria-expanded", String(!isOpen));
    answer.style.display = isOpen ? "none" : "block";
  });
});
