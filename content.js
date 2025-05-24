let run = true;
let max = 4;

let workList = document.getElementsByClassName("work index group")[0]; //should only be one entry. If not this will break.

let listItems = workList.querySelectorAll('.work > li'); //get all direct li of the ol.

for (let i = 0; i < listItems.length; i++){
    let work = listItems[i]; // get nth work

    let fandomsHeading = work.querySelector("h5.fandoms"); // get heading of fandom tags
    let fandomTags = fandomsHeading.querySelectorAll("a.tag").length; // get number of fandom tags
    //prob a way to do this in one line, IDK what it is though

    if(fandomTags > max){
        let workName = work.querySelector("div > h4 > a").innerHTML;

        console.log("\"" + workName + "\" (" + fandomTags + ") removed.")

        work.remove();
    }

}

