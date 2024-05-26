document.addEventListener("DOMContentLoaded", function() {
    const blackList = [
        { 
            nome: "Goiaba XerecrazyJR", 
            rg: "2150", 
            dataInclusao: "08/05/2024", 
            motivo: "Falta de respeito generalizado", 
            responsavel: "Ministro [273]", 
            servicosNegados: "Compras de Bandagens, Compras de Bloody Mary, Tratamentos, Emissão do Laudo AP para o porte de arma, Fazer parte da equipe HP/SAMU", 
            servicosLiberados: "Ser reanimado" 
        },
        { 
            nome: "Ribeiro Miro", 
            rg: "7928", 
            dataInclusao: "09/05/2024", 
            motivo: "Falta de respeito generalizado", 
            responsavel: "Startino [278]", 
            servicosNegados: "Compras de Bandagens, Compras de Bloody Mary, Tratamentos, Emissão do Laudo AP para o porte de arma, Fazer parte da equipe HP/SAMU", 
            servicosLiberados: "Ser reanimado" 
        },
        { 
            nome: "Roberto Hensel", 
            rg: "12056", 
            dataInclusao: "18/05/2024", 
            motivo: "Racismo", 
            responsavel: "Prozi Mal [390]", 
            servicosNegados: "Compras de Bandagens, Compras de Bloody Mary, Tratamentos, Emissão do Laudo AP para o porte de arma, Fazer parte da equipe HP/SAMU", 
            servicosLiberados: "Ser reanimado" 
        },
        { 
            nome: "Anthony Becker", 
            rg: "12054", 
            dataInclusao: "18/05/2024", 
            motivo: "Racismo", 
            responsavel: "Prozi Mal [390]", 
            servicosNegados: "Compras de Bandagens, Compras de Bloody Mary, Tratamentos, Emissão do Laudo AP para o porte de arma, Fazer parte da equipe HP/SAMU", 
            servicosLiberados: "Ser reanimado" 
        },
        { 
            nome: "Jair Bolsonaro", 
            rg: "283", 
            dataInclusao: "18/05/2024", 
            motivo: "Atrapalhando o RP do HP de maneira geral", 
            responsavel: "Ministro [273]", 
            servicosNegados: "Compras de Bandagens, Compras de Bloody Mary, Tratamentos, Emissão do Laudo AP para o porte de arma, Fazer parte da equipe HP/SAMU", 
            servicosLiberados: "Ser reanimado" 
        },
        { 
            nome: "Alencar Oliveira", 
            rg: "9548", 
            dataInclusao: "18/05/2024", 
            motivo: "Desrespeito", 
            responsavel: "Ministro [273]", 
            servicosNegados: "Compras de Bandagens, Compras de Bloody Mary, Tratamentos, Emissão do Laudo AP para o porte de arma, Fazer parte da equipe HP/SAMU", 
            servicosLiberados: "Ser reanimado" 
        },
        { 
            nome: "Junior Rangel", 
            rg: "7658", 
            dataInclusao: "26/05/2024", 
            motivo: "Falta de Compromisso, com repetidas entradas e saídas da equipe", 
            responsavel: "Ministro [273]", 
            servicosNegados: "Compras de Bandagens, Compras de Bloody Mary, Tratamentos, Emissão do Laudo AP para o porte de arma, Fazer parte da equipe HP/SAMU", 
            servicosLiberados: "Ser reanimado" 
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
            document.getElementById("servicos-negados").innerHTML = "<ul><li>" + this.dataset.servicosNegados.split(", ").join("</li><li>") + "</li></ul>";
            document.getElementById("servicos-liberados").innerHTML = "<ul><li>" + this.dataset.servicosLiberados.split(", ").join("</li><li>") + "</li></ul>";
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
