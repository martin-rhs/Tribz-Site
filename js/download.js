document.addEventListener("DOMContentLoaded", () => {
  const files = [
    {
      title: "Game",
      description: "Dowload the game executable !",
      filename: "Tribz setup (x86).exe",
      path: "downloads/Tribz setup (x86).exe",
    },
    {
      title: "Defence 1 - Report",
      description: "Report of first technical defence.",
      filename: "Defence1_Report.pdf",
      path: "downloads/Defence1_Report.pdf",
    },
    {
      title: "Defence 2 - Report",
      description: "Report of second technical defence.",
      filename: "Defence2_Report.pdf",
      path: "downloads/Defence2_Report.pdf",
    },
    {
      title: "Final Defence - Report",
      description: "Report of final technical defence.",
      filename: "FinaleDefence_Report.pdf",
      path: "downloads/FinalDefence_Report.pdf",
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
    title.textContent = file.title;

    const desc = document.createElement("p");
    desc.textContent = file.description || "";

    const downloadBtn = document.createElement("a");
    downloadBtn.classList.add("download-card-btn");
    downloadBtn.textContent = "Download";
    downloadBtn.href = file.path;
    downloadBtn.download = file.filename;

    cardContent.appendChild(title);
    if (desc.textContent) {
      cardContent.appendChild(desc);
    }
    cardContent.appendChild(downloadBtn);
    card.appendChild(cardContent);

    container.appendChild(card);
  });
});
