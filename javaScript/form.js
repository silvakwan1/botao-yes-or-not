document
  .getElementById("dataForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    // Captura os dados do formulário
    const title = document.getElementById("title").value;
    const text = document.getElementById("text").value;
    const lestUrl = document.getElementById("lestUrl").value;
    const imgUrl = document.getElementById("imgUrl").value;

    try {
      const response = await fetch(
        "https://escape-button-api-silvakwan1s-projects.vercel.app/craeteDataEscape",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, text, lestUrl, imgUrl }),
        }
      );

      if (!response.ok) {
        throw new Error(
          `Erro na requisição: ${response.status} ${response.statusText}`
        );
      }

      const data = await response.json();

      console.log("Dados recebidos:", data);

      location.href = `./data/?id=${data._id}`;
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      alert("algo deu errado, tente novamente.");
    }
  });
