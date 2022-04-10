//console.log(getElemntsByClassName('item'));
var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px black';

itemList.addEventListener('click', removeItem);

var input = document.querySelector('input');
input.value = 'title...';

var footer = document.querySelector('input(type="submit")');
submit.value="SEND";

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'yellow';

consolee.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentNode);

itemList.children(1).style.backgroundColor = 'yellow';

var button = document.getElementById('button').addEventListener("click", buttonClick);

box.addEventListener('mousemove', runEvent);

function runEvent(e){
    console.log('EVENT TYPE: '+e.type);


document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40)";
var deleteBtn = document.createElement('button');

deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
deleteBtn.appenChild(document.createTextNode('x'));
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
    }
    }
}

function filterItems(e){
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowercase().indexOf(text) |= -1){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}