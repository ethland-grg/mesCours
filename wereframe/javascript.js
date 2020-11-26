var taskNumber = 1;
var pageNumber = 1;
var currentPage = 1;





function valider() {
    var pages = document.getElementById("pages");
    var row = document.getElementById("task");
    var desc = document.getElementById("description").value; 
    // document.getElementById : on cherche un élément dans le document entier (à l'interieur de la balise hmtl)
    var desc = document.getElementById("description").value;
    var prio = document.getElementById("exampleCheck1").checked;
    var nouvelleLigne = row.cloneNode(true);//cloneNode() copier un élément; cloneNode(true) copier un élément et ses enfant

    nouvelleLigne.id = "task" + taskNumber;
    nouvelleLigne.querySelector("#desc").id = `desc${taskNumber}`; // concatenation ` entre` pareil que "prio" + taskNumber 
    nouvelleLigne.querySelector("#prio").id = "prio" + taskNumber;

    nouvelleLigne.querySelector("#termineInput").value = taskNumber;
    nouvelleLigne.querySelector("#termineInput").id = `termineInput${taskNumber}`;  // on a rajouter id en  paramettre sur input pour recuperer le numero de laliste
    nouvelleLigne.querySelector("#termine").id = `termine${taskNumber}`;

    
    nouvelleLigne.querySelector("#progressionInput").value = taskNumber;
    nouvelleLigne.querySelector("#progressionInput").id = `progressionInput${taskNumber}`;
    nouvelleLigne.querySelector("#progression").style.background = "green";
    nouvelleLigne.querySelector("#progression").id = `progre${taskNumber}`; 
    // querySelector : on cherche un élément dans un autre élément (dans une balise div par ex.)
    //                 le parametre peut être l'"id" ou la "class" ou le nom de balise d'un élément
    nouvelleLigne.querySelector("#pas-prio").id = "pas-prio" + taskNumber;
    

    nouvelleLigne.querySelector("#desc" + taskNumber).innerText = desc;
    if (prio) {
        nouvelleLigne.querySelector("#prio" + taskNumber).style.display = "block";
        nouvelleLigne.querySelector("#pas-prio" + taskNumber).style.display = "none";
    } else {
        nouvelleLigne.querySelector("#prio" + taskNumber).style.display = "none";
        nouvelleLigne.querySelector("#pas-prio" + taskNumber).style.display = "block";
    }

    var page = document.getElementById("page");
    var nouvellePage = page.cloneNode(true);
    if ((taskNumber - 1) % 6 == 0 && taskNumber > 1) {
        pageNumber++;
        var pageNum = document.getElementById("pageNumber");
        // pageNum.id = "pageNumber" + pageNumber;
        var link = pageNum.querySelector("a");
        link.href = "#page" + pageNumber;
        link.innerText = pageNumber;
        currentPage = pageNumber;
        // var paging = document.getElementById("paging");
        // paging.append(pageNum);
        var previousPage = document.getElementById("previousPage");
        var nextPage = document.getElementById("nextPage");
        if(pageNumber > 1)
            previousPage.querySelector("a").href = "#page" + (pageNumber - 1);
    } else if ((taskNumber - 1) % 6 < 6 && taskNumber > 1) {
        nouvellePage = document.getElementById("page" + pageNumber);
    }
    nouvellePage.append(nouvelleLigne);
    if (pageNumber == 1 || (taskNumber - 1) % 6 == 0) {
        nouvellePage.id = "page" + pageNumber;
        pages.append(nouvellePage);
    }

    taskNumber++;



}

function enCours(progressId) {
    var id = document.getElementById(progressId).querySelector("input").value;
   document.getElementById(`desc${id}`).style.textDecoration = "none";
   document.getElementById(`termine${id}`).style.background = "#80808075";
   document.getElementById(`progre${id}`).style.background = "green";
}

function terminer(cercleId) {
    var id = document.getElementById(cercleId).querySelector("input").value;
   document.getElementById(`desc${id}`).style.textDecoration = "line-through";
   document.getElementById(`termine${id}`).style.background = "green";
   document.getElementById(`progre${id}`).style.background = "#80808075";
}

function previousPage() {
    if(currentPage > 1)
    {
        currentPage--;
        document.getElementById("pageNumber").querySelector("a").innerText = currentPage;
        document.getElementById("previousPage").querySelector("a").href = "#page" + currentPage;
    }
}

function nextPage() {
    if(currentPage < pageNumber)
    {
        currentPage++;
        document.getElementById("pageNumber").querySelector("a").innerText = currentPage;
        document.getElementById("nextPage").querySelector("a").href = "#page" + currentPage;
    }
}





