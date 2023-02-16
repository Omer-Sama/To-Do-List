let addText = document.getElementById('addText');
let push = document.getElementById('push');
let tasks = document.getElementById('tasks');
let clear = document.getElementById('clear');

push.addEventListener('click',function() {
    let paragraph = document.createElement('li');
    paragraph.classList.add('paragraph-styling');
    tasks.appendChild(paragraph);
    paragraph.innerHTML = addText.value;
    addText.value = '';

    paragraph.addEventListener('click',function() {
        paragraph.style.textDecoration = "line-through";
    });

    paragraph.addEventListener('click',function() {
        push.removeChild("paragraph");
    });
    clear.addEventListener('click',function() {
        paragraph.style.display = "none";
    });
});



