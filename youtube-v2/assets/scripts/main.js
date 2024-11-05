//the following is for js-demo.html page 
function handleStylize() {
  // DOM querying and manipulation
  const myDiv = document.getElementById("myDiv1");

  // adding inline styles
  myDiv.style.backgroundColor = "lightblue";
  myDiv.style.color = "red";
  myDiv.style.border = "solid 3px green";
  myDiv.style.padding = "10px";
}

function handleChangeContent() {
  let myDiv2 = document.getElementById("myDiv2");
  myDiv2.innerText = "Text Changed";
  myDiv2.style.fontSize = "30px";
  myDiv2.style.color = "red";
}

// adding li element inside ul 
function handleAddElement() {
  // find the parent element that should host the li
  const menuList = document.getElementById("menuList");

  // create the li element <li></li>
  const li = document.createElement("li"); // <li></li>
  // create the text content that should later be part of the li 'Home'
  const text = document.createTextNode(document.getElementById("menuInput").value);
  // put the text inside the li   <li>Home</li>
  li.appendChild(text); // <li>Home</li>

  // append the above li in parent element
  menuList.appendChild(li);
}

const skills = [
  {
    id: 1,
    topic: "HTML",
  },
  {
    id: 2,
    topic: "CSS",
  },
  {
    id: 3,
    topic: "JS",
  }
];

function handleAddSkill() {
 let skillSet = skills.map((skill) => { 
  return (
    `<li id="skillList">     
    ${skill.topic}  
    </li>`
    ) 
  }).join(''); 
    
    let skillList = document.getElementById('skillList'); 
    skillList.innerHTML = skillSet;
   }


let locationButton = document.getElementById('locationButton');
locationButton?.addEventListener('click', function () {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      console.log('allowed');
      console.log(position);
      let latitudeValue = document.getElementById('latitude').innerHTML = position.coords.latitude;
      let longitudeValue = document.getElementById('longitude').innerHTML = position.coords.longitude;
    },
    function () {
      console.log('not allowed');
    }
  );
});

document.getElementById('savePincodeBtn')?.addEventListener('click', function (event) {
  let pincodeValue = document.getElementById('pincodeInput');
  localStorage.setItem('pincode', pincodeValue.value);

  let savePincode = document.getElementById('savePincodeBtn');
  console.log(event.target);
  savePincode.innerText = 'Saved';
  document.getElementById('savePincodeBtn').disabled = true;
});

document.getElementById('removePincodeBtn')?.addEventListener('click', function (event) {
  let removePincode = document.getElementById('removePincodeBtn');
  console.log(event.target);
  removePincode.innerText = 'Removed';
  localStorage.removeItem('pincode');
  document.getElementById('removePincodeBtn').disabled = true;
});
