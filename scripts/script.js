const convertButton = document.getElementById("convert-button");
convertButton.addEventListener("click", convertData);

const copyToClipboardButton = document.getElementById("copy-to-clipboard");
copyToClipboardButton.addEventListener("click", copyToClipboard);

function convertData() {
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
}

function copyToClipboard() {
    const copyText = document.getElementById("order-ids").value;

    navigator.clipboard.writeText(copyText).then(() => {
        alert("Skopiowano do schowka!");
    }).catch(err => {
        alert("Błąd kopiowania: " + err);
    });
}