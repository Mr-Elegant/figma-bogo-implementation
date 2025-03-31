function toggleDetails(event, selectedOption) {
    document.querySelectorAll(".option").forEach((option) => {
      if (option !== selectedOption) {
        option.querySelector(".details").style.display = "none";
        option.classList.remove("selected");
      }
    });

    let details = selectedOption.querySelector(".details");
    if (details) {
      details.style.display =
        details.style.display === "block" ? "none" : "block";
    }

    selectedOption.classList.toggle("selected");
  }