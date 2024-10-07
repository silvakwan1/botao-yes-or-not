const paragraph = document.querySelector("#text");
const img = document.querySelector("#img");
const link = document.querySelector("#link");
const titlee = document.querySelector("#title");

(async function () {
  const params = new URLSearchParams(window.location.search);

  const id = params.get("id");

  if (!id) {
    console.error("ID não fornecido na URL");
    window.location.href = "/erro.html";
    return;
  }
  try {
    const response = await fetch(
      `https://escape-button-api-silvakwan1s-projects.vercel.app/getdate/${id}`
    );

    if (!response.ok) {
      console.error(
        "Erro na requisição:",
        response.status,
        response.statusText
      );
      window.location.href = "/erro.html";
      return;
    }

    const data = await response.json();
    const { title, text, lestUrl, imgUrl } = data;
    titlee.innerHTML = title;
    paragraph.innerHTML = text;
    img.src = imgUrl;
    link.href = lestUrl;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    window.location.href = "/erro.html";
  }
})();
