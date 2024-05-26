document.addEventListener("DOMContentLoaded", function() {
    const blackList = [
        { 
            nome: "Roberto Hensel", 
            rg: "12056", 
            dataInclusao: "2023-05-18", 
            motivo: "Racismo", 
            responsavel: "Prozi Mal [390]", 
            servicosNegados: "Compras de bandagens, laudo psicológico", 
            servicosLiberados: "Reanimação" 
        },
        { 
            nome: "Maria Oliveira", 
            rg: "87654321", 
            dataInclusao: "2023-02-20", 
            motivo: "Violência verbal", 
            responsavel: "Enfermeira Carla", 
            servicosNegados: "Não pode comprar bandagem, emitir laudo psicológico", 
            servicosLiberados: "Pode ser reanimado" 
        },
        { 
            nome: "Carlos Souza", 
            rg: "11223344", 
            dataInclusao: "2023-03-12", 
            motivo: "Conduta imprópria", 
            responsavel: "Dr. Bezerra", 
            servicosNegados: "Não pode comprar bandagem, emitir laudo psicológico", 
            servicosLiberados: "Pode ser reanimado" 
        },
        { 
            nome: "Ana Costa", 
            rg: "44332211", 
            dataInclusao: "2023-04-10", 
            motivo: "Não pagamento de contas", 
            responsavel: "Administrativo Pedro", 
            servicosNegados: "Não pode comprar bandagem, emitir laudo psicológico", 
            servicosLiberados: "Pode ser reanimado" 
        }
    ];

    const tbody = document.getElementById("blackListBody");

    blackList.forEach(person => {
        let row = tbody.insertRow();
        let cells = ["nome", "rg", "dataInclusao", "motivo", "responsavel"];

        cells.forEach(cell => {
            let newCell = row.insertCell();
            newCell.textContent = person[cell];
        });

        let clickableCell = row.cells[0];
        clickableCell.classList.add('clickable');
        clickableCell.dataset.servicosNegados = person.servicosNegados;
        clickableCell.dataset.servicosLiberados = person.servicosLiberados;
    });

    const popup = document.getElementById("popup");
    const span = document.getElementsByClassName("close")[0];

    document.querySelectorAll('.clickable').forEach(item => {
        item.addEventListener('click', function() {
            document.getElementById("servicos-negados").textContent = this.dataset.servicosNegados;
            document.getElementById("servicos-liberados").textContent = this.dataset.servicosLiberados;
            popup.style.display = "block";
        });
    });

    span.onclick = function() {
        popup.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    }
});

function searchRG() {
    const input = document.getElementById("searchRG");
    const filter = input.value.toUpperCase();
    const table = document.getElementById("blackListTable");
    const tr = table.getElementsByTagName("tr");

    for (let i = 1; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            let txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }       
    }
}
