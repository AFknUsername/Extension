class Item {
    constructor(title, text, date, index) {
        this.title = title;
        this.text = text;
        this.date = date;
        this.i = index;
    }    

    show() {
        $('<li/>', {
            class: 'item',
            id: `item${this.i}`,
        }).appendTo('#list');

        $('<h3/>', {
            class: 'itemHeader',
            id: `header${this.i}`
        }).appendTo(`#item${this.i}`);

        $('<span/>', {
            class: 'itemTitle',
            text: this.title
        }).appendTo(`#header${this.i}`);

        $('<p/>', {
            class: 'itemRemove',
            id: `remove${this.i}`,
            text: 'x'
        }).appendTo(`#header${this.i}`);

        $('<span/>', {
            class: `itemText`,
            html: `${this.text}&nbsp;`
        }).appendTo(`#item${this.i}`);

        $('<span/>', {
            class: `itemDate`,
            text: this.date,
        }).appendTo(`#item${this.i}`);

        $(`#remove${this.i}`).click({
            i: this.i
        }, removeItem);
    }

    cross() {
        $(`#header${this.i}`).css({'font-color': 'grey'});
    }
}

let itemList = [];

function populateItems() {
    for (let item of itemList) {
        item.show();
    }
}

let counter = itemList.length;

function addItem() {
    if ($('input[name="title"]').val() === '') {
        alert('please add a title');
    } else {
        let title = $('input[name="title"]').val();
        let text = $('textarea[name="text"]').val();
        let date = $('#itemDate').val();
        let newItem = new Item(title, text, date, counter);
        itemList.push(newItem);
        console.log(itemList);
        counter++;
        newItem.show();
    }
}

function removeItem(event) {
    let index = event.data.i;
    let length = itemList.length - 1;
    delete itemList[index];
    for (let i = index; i < length; i++) {
        itemList[i] = itemList[i + 1];
        itemList[i].i = i;
    }
    itemList.pop();
    counter--;
    $('#list').empty();
    populateItems();
}

