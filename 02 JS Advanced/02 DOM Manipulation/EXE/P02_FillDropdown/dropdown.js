function addItem() {
    let menu = document.getElementById('menu');

    let item = document.getElementById('newItemText');
    let itemValue = document.getElementById('newItemValue');

    let newOption = document.createElement('option');
    newOption.value = itemValue.value;
    newOption.textContent = item.value;

    menu.appendChild(newOption);

    item.value = '';
    itemValue.value = '';
}
