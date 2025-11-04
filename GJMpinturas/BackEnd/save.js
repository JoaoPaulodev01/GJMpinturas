    document.addEventListener("DOMContentLoaded", () => {
        const form = document.getElementById("orcamentoForm");

        form.addEventListener("submit", async (e) => {
            e.preventDefault();

            const dados = {
                nome: document.getElementById("nome").value.trim(),
                telefone: document.getElementById("telefone").value.trim(),
                email: document.getElementById("email").value.trim(),
                endereco: document.getElementById("endereco").value.trim(),
                servico: document.getElementById("servico").value.trim(),
                descricao: document.getElementById("descricao").value.trim(),
            };

            const scriptURL = "https://sheetdb.io/api/v1/fplirub8rg32c";

            try {
                await fetch(scriptURL, {
                    method: "POST",
                    body: JSON.stringify(dados),
                    headers: { "Content-Type": "application/json" },
                });
                emailjs.init("ZYB_cGcPfXpqMN8UV"); 
                await emailjs.send("service_gpirhdp", "template_wzhqdze", dados);

                alert("Solicitação enviada com sucesso!");
                form.reset();
            } catch (error) {
                console.error(error);
                alert("Erro ao enviar o formulário.");
            }
        });
    });
