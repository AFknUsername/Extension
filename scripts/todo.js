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

    checkTime() {
        let currentDate = new Date().getTime();
        let dateArray = this.date.split('-');
        let itemDate = new Date(dateArray[0], dateArray[1] - 1, dateArray[2]).getTime();
        if (itemDate - currentDate < 86400000) {
            $(`#item${this.i}`).css('background-color', '#ff6262');
            return 'yellow';
        } else if (itemDate - currentDate < 432000000) {
            $(`#item${this.i}`).css('background-color', '#ffff4f');
        }
    }
}

let itemList = refresh(JSON.parse(localStorage.getItem('todo')));

function refresh() {
    
    let array;
    if (localStorage.todo === undefined) {
        array = [];
        return array;
    } else {
        array = JSON.parse(localStorage.getItem('todo'));
        let itemList = [];
        for (i = 0; i < array.length; i++) {
            itemList[i] = new Item(array[i].title, array[i].text, array[i].date, array[i].i);
        }
        return itemList; 
    }
}

function populateItems() {
    for (let item of itemList) {
        item.show();
        item.checkTime();
    }
    localStorage.todo = JSON.stringify(itemList);
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
        counter++;
        newItem.show();
        newItem.checkTime();
        localStorage.todo = JSON.stringify(itemList);
        $('input[name="title"]').val('');
        $('textarea[name="text"]').val('');
        $('#itemDate').val('');
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