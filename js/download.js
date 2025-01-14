document.addEventListener("DOMContentLoaded", () => {
  const files = [
    {
      filename: "Defence 1 - Plan",
      description: "Plan of first technical defence.",
      path: "Defence1_Plan.pdf",
    },
    {
      filename: "Defence 1 - Report",
      description: "Report of first technical defence.",
      path: "Defence1_Report.pdf",
    },
  ];

  const container = document.getElementById("download-cards-container");
  container.innerHTML = "";

  files.forEach((file) => {
    const card = document.createElement("div");
    card.classList.add("download-card");

    const cardContent = document.createElement("div");
    cardContent.classList.add("download-card-content");

    const title = document.createElement("div");
    title.classList.add("download-card-title");
    title.textContent = file.filename;

    const desc = document.createElement("p");
    desc.textContent = file.description || "";

    const downloadBtn = document.createElement("a");
    downloadBtn.classList.add("download-card-btn");
    downloadBtn.textContent = "Download";
    downloadBtn.href = file.path;
    downloadBtn.download = file.path;

    cardContent.appendChild(title);
    if (desc.textContent) {
      cardContent.appendChild(desc);
    }
    cardContent.appendChild(downloadBtn);
    card.appendChild(cardContent);

    container.appendChild(card);
  });
});
