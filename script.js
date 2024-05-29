document.addEventListener('DOMContentLoaded', function() {
    const cargos = [
        { id: "1", descricao: "GERENTE" },
        { id: "2", descricao: "SUBORDINADO" }
    ];

    const colaboradores = [
        {id: "fae1", nome: "Pedro Mauricio", cpf: "123.456.789-09", dataAdmissao: "20/02/2024", remuneracao: 2000, cargo: { id: 2 } },
        {id: "fae2", nome: "Maria Silva", cpf: "987.654.321-10", dataAdmissao: "15/03/2024", remuneracao: 3500, cargo: { id: 2 } },
        {id: "fae3", nome: "João Oliveira", cpf: "456.789.012-34", dataAdmissao: "01/04/2024", remuneracao: 2700, cargo: { id: 1 } },
        {id: "fae4",nome: "Ana Souza",cpf: "876.543.210-56",dataAdmissao: "10/05/2024",remuneracao: 4200,cargo: { id: 1 } },
        {id: "fae5", nome: "Carlos Santos",cpf: "321.098.765-43",dataAdmissao: "25/06/2024",remuneracao: 2900,cargo: { id: 2 }},
        {id: "fae6",nome: "Gabriela Pereira", cpf: "765.432.109-87",dataAdmissao: "07/07/2024",remuneracao: 3800,cargo: { id: 2 }},
        {id: "fae7", nome: "Bruno Lopes",cpf: "210.987.654-32",dataAdmissao: "20/08/2024",remuneracao: 2500,cargo: { id: 2 }},
        {id: "fae8",nome: "Carolina Martins",cpf: "654.321.098-76",dataAdmissao: "02/09/2024",remuneracao: 4000,cargo: { id: 1 }},
        {id: "fae9",nome: "Eduardo Silva",cpf: "109.876.543-21",dataAdmissao: "15/10/2024", remuneracao: 2800,cargo: { id: 1 }},
        {id: "fae10",nome: "Fernanda Oliveira",cpf: "543.210.987-65",dataAdmissao: "27/11/2024",remuneracao: 3600,cargo: { id: 2 } },
        {id: "fae11",nome: "Rafael Costa",cpf: "987.654.321-78",dataAdmissao: "09/12/2024",remuneracao: 2600,cargo: { id: 2 }},
        {id: "fae12", nome: "Daniela Almeida",cpf: "456.789.012-56",dataAdmissao: "22/12/2024",remuneracao: 3900,cargo: { id: 2 }},
        {id: "fae13",nome: "André Souza",cpf: "876.543.210-98",dataAdmissao: "04/01/2025",remuneracao: 2400,cargo: { id: 2 }},
        {id: "fae14", nome: "Isabella Xavier",cpf: "321.098.765-87",dataAdmissao: "17/01/2025",remuneracao: 4100,cargo: { id: 2 }},
        {id: "fae15", nome: "Felipe Mendes",cpf: "765.432.109-21", dataAdmissao: "30/01/2025", remuneracao: 2700, cargo: { id: 1 }},
        {id: "fae16",nome: "Mariana Oliveira",cpf: "210.987.654-65",dataAdmissao: "12/02/2025",remuneracao: 3500,cargo: { id: 2 }},
        {id: "fae17",nome: "Guilherme Costa",cpf: "654.321.098-10",dataAdmissao: "25/02/2025",remuneracao: 2900,cargo: { id: 2 }},
        {id: "fae18",nome: "Luisa Santos",cpf: "109.876.543-54",dataAdmissao: "08/03/2025",remuneracao: 4300,cargo: { id: 2 }},
        {id: "fae19",nome: "Marcos Pereira",cpf: "543.210.987-98",dataAdmissao: "21/03/2025",remuneracao: 2500,cargo: { id: 1 }},
        {id: "fae20",nome: "Gabriel Almeida",cpf: "456.789.012-78",dataAdmissao: "16/04/2025",remuneracao: 2400,cargo: { id: 2 }},
        {id: "fae21",nome: "Julia Oliveira",cpf: "876.543.210-12",dataAdmissao: "29/04/2025",remuneracao: 4100,cargo: { id: 2 }},
        {id: "fae22",nome: "Leonardo Costa",cpf: "321.098.765-65",dataAdmissao: "12/05/2025",remuneracao: 2700,cargo: { id: 1 }},
        { id: "fae23", nome: "Amanda Santos",cpf: "765.432.109-01",dataAdmissao: "25/05/2025",remuneracao: 3500,cargo: { id: 1 }},
        {id: "fae24",nome: "Bruno Pereira",cpf: "210.987.654-43",dataAdmissao: "08/06/2025",remuneracao: 2900,cargo: { id: 2 }},
        {id: "fae25",nome: "Carolina Silva",cpf: "654.321.098-87",dataAdmissao: "21/06/2025",remuneracao: 4300,cargo: { id: 2 }},
        {id: "fae26",nome: "Eduardo Oliveira",cpf: "109.876.543-21",dataAdmissao: "04/07/2025",remuneracao: 2500,cargo: { id: 2 }},
        {id: "fae27",nome: "Fernanda Costa",cpf: "543.210.987-65",dataAdmissao: "17/07/2025",remuneracao: 3800,cargo: { id: 2 }},
        {id: "fae28",nome: "Rafael Santos",cpf: "987.654.321-01",dataAdmissao: "30/07/2025",remuneracao: 2600,cargo: { id: 2 }},
        { id: "fae29", nome: "Daniela Pereira", cpf: "456.789.012-43", dataAdmissao: "12/08/2025", remuneracao: 3900, cargo: { id: 2 } }
    ];

    const rowsPerPage = 10;
    const tableBody = document.querySelector('#myTable tbody');
    const pagination = document.getElementById('pagination');
    const searchInput = document.getElementById('searchInput');
    const formId = document.getElementById('formId');
    const formNome = document.getElementById('formNome');
    const formCpf = document.getElementById('formCpf');
    const formDataAdmissao = document.getElementById('formDataAdmissao');
    const formRemuneracao = document.getElementById('formRemuneracao');
    const formCargo = document.getElementById('formCargo');
    const formSaveBtn = document.getElementById('formSaveBtn');
    const formDeleteBtn = document.getElementById('formDeleteBtn');
    let currentPage = 1;
    let filteredData = colaboradores;

    const totalPages = () => Math.ceil(filteredData.length / rowsPerPage);

    function getCargoDescricao(cargoId) {
        const cargo = cargos.find(c => c.id === cargoId.toString());
        return cargo ? cargo.descricao : 'Desconocido';
    }

    function displayTable(page) {
        tableBody.innerHTML = '';
        const startIndex = (page - 1) * rowsPerPage;
        const endIndex = startIndex + rowsPerPage;
        const paginatedData = filteredData.slice(startIndex, endIndex);

        paginatedData.forEach(row => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${row.id}</td>
                <td>${row.nome}</td>
                <td>${row.cpf}</td>
                <td>${row.dataAdmissao}</td>
                <td>${row.remuneracao}</td>
                <td>${getCargoDescricao(row.cargo.id)}</td>
            `;
            tr.addEventListener('click', () => fillForm(row));
            tableBody.appendChild(tr);
        });
    }

    function setupPagination() {
        pagination.innerHTML = '';
        for (let i = 1; i <= totalPages(); i++) {
            const button = document.createElement('button');
            button.textContent = i;
            button.addEventListener('click', () => {
                currentPage = i;
                displayTable(currentPage);
                updateActiveButton();
            });
            pagination.appendChild(button);
        }
    }

    function updateActiveButton() {
        const buttons = pagination.querySelectorAll('button');
        buttons.forEach((button, index) => {
            if (index === currentPage - 1) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }

    function filterData() {
        const searchTerm = searchInput.value.toLowerCase();
        filteredData = colaboradores.filter(c => c.nome.toLowerCase().includes(searchTerm));
        currentPage = 1;
        setupPagination();
        displayTable(currentPage);
    }

    function fillForm(data) {
        formId.value = data.id;
        formNome.value = data.nome;
        formCpf.value = data.cpf;
        formDataAdmissao.value = data.dataAdmissao;
        formRemuneracao.value=data.remuneracao;
        formCargo.value = data.cargo.id
    }

    function guardarCambios(data) {
        const index = colaboradores.findIndex(colaborador => colaborador.id === data.id);
        if (index !== -1) {
            colaboradores[index] = { ...colaboradores[index], ...data };
            displayTable(currentPage)
        } else {
            console.error("No se encontró el colaborador con ID:", data.id);
        }
    }
    
    formSaveBtn.addEventListener('click', function() {
        const newData = {
            id: formId.value,
            nome: formNome.value,
            cpf: formCpf.value,
            dataAdmissao: formDataAdmissao.value,
            remuneracao: formRemuneracao.value,
            cargo: { id: formCargo.value }
        };
        guardarCambios(newData);
    });

    formSaveBtn.addEventListener('click', function() {
        const newData = {
            id: formId.value,
            nome: formNome.value,
            cpf: formCpf.value,
            dataAdmissao: formDataAdmissao.value,
            remuneracao: parseFloat(formRemuneracao.value), // Convierte el valor a número
            cargo: { id: formCargo.value }
        };
        
        const xhr = new XMLHttpRequest();
        xhr.open('PUT', `${BASE_URL}/colaboradores/${newData.id}`, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function() {
            if (xhr.status === 200) {
                console.log('Colaborador actualizado exitosamente:', JSON.parse(xhr.responseText));
                displayTable(currentPage); // Actualiza la tabla después de actualizar el colaborador
            } else {
                console.error('Error al actualizar el colaborador:', xhr.statusText);
            }
        };
        xhr.onerror = function() {
            console.error('Error de red al actualizar el colaborador');
        };
        xhr.send(JSON.stringify(newData));
    });
   

    displayTable(currentPage);
    setupPagination();
    searchInput.addEventListener('input', filterData);

});


