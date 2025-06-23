const textArea = document.getElementById('order-ids');

const convertButton = document.getElementById("convert-button");
convertButton.addEventListener("click", convertData);

const copyToClipboardButton = document.getElementById("copy-to-clipboard");
copyToClipboardButton.addEventListener("click", copyToClipboard);

const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", reset);

let counter = 0;

function convertData() {
    counter++;

    if (counter <= 1) {
        let lines = document.getElementById("order-ids").value.trim().split('\n');
        let result = "";

        for (let i = 0; i < lines.length; i++) {
            if (lines[i].trim() === "") continue;
            if (i !== lines.length - 1) {
                result += `'${lines[i].trim()}',\n`;
            } else {
                result += `'${lines[i].trim()}'`;
            }

        }

        document.getElementById("order-ids").value = result;

        document.getElementById("order-ids").disabled = true;
        document.getElementById("convert-button").disabled = true;
    }
}

function copyToClipboard() {
    const copyOrderIds = document.getElementById("order-ids").value;
    const toast = document.createElement('div');
    const toastParent = document.getElementById('toast');
    
    toast.style.position = 'fixed';
    toast.style.color = 'white';
    toast.style.padding = '10px';
    toast.style.borderRadius = '5px';
    
    navigator.clipboard.writeText(copyOrderIds).then(() => {
        toast.textContent = "Pomyślnie skopiowano przekonwertowane identyfikatory do schowka.";
        toast.style.background = '#4CAF50';
    }).catch(err => {
        toast.textContent = `Błąd kopiowania! ${err}`;
        toast.style.background = '#F44336';
    });

    toastParent.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 5000);
}

function reset() {
    counter = 0;
    textArea.disabled = false;
    convertButton.disabled = false;
}