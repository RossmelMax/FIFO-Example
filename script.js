// Variables globales
const processQueue = [];
const queueElement = document.getElementById('queue');

// Función para hacer scroll hacia abajo del contenedor
function scrollToBottom(containerElement) {
    containerElement.scrollTop = containerElement.scrollHeight;
}

// Función para hacer scroll hacia arriba del contenedor
function scrollToTop(containerElement) {
    containerElement.scrollTop = 0;
}

// Función para agregar un proceso a la cola
function addProcess() {
    const processId = generateUniqueId();
    processQueue.push(processId);

    const processElement = document.createElement('div');
    processElement.classList.add('process');
    processElement.setAttribute('data-id', processId);
    const randomIcon = getRandomIcon();
    processElement.innerHTML = `<i class="${randomIcon}"></i><span>${processId}</span>`;

    queueElement.appendChild(processElement);

    scrollToBottom(queueElement); // Hacer scroll hacia abajo después de agregar
}

// Función para ejecutar un proceso de la cola
function executeProcess() {
    if (processQueue.length === 0) {
        return;
    }

    const executedProcessId = processQueue.shift();
    const executedProcessElement = document.querySelector(`.process[data-id="${executedProcessId}"]`);

    if (executedProcessElement) {
        executedProcessElement.remove();
        scrollToTop(queueElement); // Hacer scroll hacia arriba después de eliminar
    }
}

// Variable global para mantener un contador
let idCounter = 1;

// Función para generar un ID único en orden con 3 cifras
function generateUniqueId() {
    const paddedId = String(idCounter).padStart(3, '0');
    idCounter++;
    return paddedId;
}

// Función para obtener un icono aleatorio de Font Awesome
function getRandomIcon() {
    const icons = [
        'fas fa-desktop',
        'fas fa-mouse',
        'fas fa-keyboard',
        'fas fa-hdd',
        'fas fa-microchip',
        'fas fa-print',
        'fas fa-headphones',
        'fas fa-camera',
        'fas fa-wifi',
        'fas fa-sim-card',
        'fas fa-memory',
        'fas fa-database',
        'fas fa-server',
        'fas fa-cloud',
    ];
    const randomIndex = Math.floor(Math.random() * icons.length);
    return icons[randomIndex];
}

// Event Listeners
document.getElementById('addProcess').addEventListener('click', addProcess);
document.getElementById('executeProcess').addEventListener('click', executeProcess);
