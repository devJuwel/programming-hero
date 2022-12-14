const milestonesData = JSON.parse(data).data;
console.log(milestonesData);

function loadMilestones() {

    const milestones = document.querySelector(".milestones");

    milestones.innerHTML =

        `${milestonesData.map(milestone =>{
        return `
    <div class="milestone border-b">
        <div class="flex">
            <div class="checkbox"><input type="checkbox" name="" id=""></div>
            <div onclick="openMilestone(this, ${milestone._id})">
                <p>
                    ${milestone.name}
                    <span><i class="fas fa-chevron-down"></i></span>
                </p>
            </div>
        </div>
        <div class="hidden_panel">
           ${milestone.modules.map(module=>{
            return ` <div class="module border-b">
            <p>${module.name}</p>
        </div>`
           }).join("")}
        </div>
        
    </div>`
    }).join("")}`;

}


function openMilestone(milestoneElement,id) {
    const currentPanel = milestoneElement.parentNode.nextElementSibling;

    const shownpanel = document.querySelector(".show");
    const active = document.querySelector(".active");
    if (!milestoneElement.classList.contains("active") && active)
        active.classList.remove("active");


    if (!currentPanel.classList.contains("show") && shownpanel)
        shownpanel.classList.remove("show");

    currentPanel.classList.toggle("show");
    milestoneElement.classList.toggle("active");

    showMilestone(id);

}

function showMilestone(id){
    const milestoneImage = document.querySelector(".milestoneImage");
    const title = document.querySelector(".title");
    const details = document.querySelector(".details");


    milestoneImage.style.opacity = "0";
    milestoneImage.src = milestonesData[id].image;
    title.innerHTML= milestonesData[id].name;
    details.innerHTML= milestonesData[id].description;
}

//listen for hero image load
const milestoneImage = document.querySelector(".milestoneImage");
milestoneImage.onload = function(){
    this.style.opacity = "1";  
}

loadMilestones();