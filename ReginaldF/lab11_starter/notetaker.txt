/**
 * notetaker.js implements the functionality of the note taker application:
 * - Tracks an array with the current notes
 * - Displays the notes on the web page
 * - Adds notes entered by the user
 * - Removes notes selected by the user 
 */
const notes = [];
const addButton = document.getElementById("add");
const newnoteField = document.getElementById("newnote");
const noteSelection = document.getElementById("noteselection");
const noteList = document.getElementById("notelist");
const deleteButton = document.getElementById("delete");
addButton.addEventListener('click', () => {
    
    addNote(newnoteField.value);
});

deleteButton.addEventListener("click", deleteNote);
function addNote(note)
{
    if (note === "")
    {
        const div = document.createElement("div");
        div.setAttribute("id", "divErrorMessage");
        div.innerHTML = "<font color='red'>Note empty</font>";
        document.body.appendChild(div);
        return;
    }
    notes.push(note);
    
    const newLI = document.createElement('li');
    newLI.appendChild(document.createTextNode(note));
    noteList.appendChild(newLI);
    noteSelection.options[noteSelection.options.length] = new Option(note, notes.length);
    newnoteField.value = "";
}
newnoteField.addEventListener("keypress", () => {
    const div = document.getElementById("divErrorMessage");
    if (div)
    {
        div.innerHTML = "";    
    }
})
function deleteNote()
{
    const idx = noteSelection.selectedIndex;
    notes.splice(idx, 1);
    render();
}
function render()
{
    
    noteList.innerHTML = "";
    noteSelection.innerHTML = "";
    for (let note of notes)
    {
        const newLI = document.createElement('li');
        newLI.appendChild(document.createTextNode(note));
        noteList.appendChild(newLI);
        noteSelection.options[noteSelection.options.length] = new Option(note, notes.length);
    }
}
