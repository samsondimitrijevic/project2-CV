function filterSkills() {

    const input = document.getElementById("filter");
    const filter = input.value.toUpperCase();
    const ul = document.getElementById("skills-list");
    const li = ul.getElementsByTagName("li"); // grabs the list of items insîde the unordered list


    for(let i = 0; i < li.length; i++) {
        let textP = li[i].getElementsByTagName("p")[0];
        let textValue = textP.textContent || textP.innerText;

        if(textValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "block";
        } else {
            li[i].style.display = "none";
        };
    };
};
