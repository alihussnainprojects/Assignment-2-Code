function save() {
    let array = [document.getElementById("reginput").value, document.getElementById("companyinput").value, document.getElementById("modelinput").value, document.getElementById("colorinput").value];
    localStorage.setItem(document.getElementById("reginput").value, JSON.stringify(array));
}

function search() {
    let array1 = JSON.parse(localStorage.getItem(document.getElementById("reginput").value));
    document.getElementById("reginput").value = array1[0];
    document.getElementById("companyinput").value = array1[1];
    document.getElementById("modelinput").value = array1[2];
    document.getElementById("colorinput").value = array1[3];
}

function remove() {
    localStorage.removeItem(document.getElementById("reginput").value);
}