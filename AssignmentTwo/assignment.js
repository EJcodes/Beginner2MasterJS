const task3Element = document.getElementById('task-3');

function anAlert() {
    alert( "blah blah");
}

function nameCaller(name) {
    alert(`Yoooooo ${name}`);
}

nameCaller('Evan');
threeNames('Mari', 'Lisa', 'Ashely');

task3Element.addEventListener('click', anAlert);

function threeNames(name1, name2, name3) {
    return alert(`name1: ${name1}, name2: ${name2}, name3: ${name3}`)
}

