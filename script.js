const drivers = [{"driver_number":1,"full_name":"Max VERSTAPPEN","headshot_url":"https://www.formula1.com/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/1col/image.png"},{"driver_number":2,"full_name":"Logan SARGEANT","headshot_url":"https://www.formula1.com/content/dam/fom-website/drivers/L/LOGSAR01_Logan_Sargeant/logsar01.png.transform/1col/image.png"},{"driver_number":3,"full_name":"Daniel RICCIARDO","headshot_url":null},{"driver_number":4,"full_name":"Lando NORRIS","headshot_url":"https://www.formula1.com/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png.transform/1col/image.png"},{"driver_number":10,"full_name":"Pierre GASLY","headshot_url":"https://www.formula1.com/content/dam/fom-website/drivers/P/PIEGAS01_Pierre_Gasly/piegas01.png.transform/1col/image.png"},{"driver_number":11,"full_name":"Sergio PEREZ","headshot_url":"https://www.formula1.com/content/dam/fom-website/drivers/S/SERPER01_Sergio_Perez/serper01.png.transform/1col/image.png"},{"driver_number":14,"full_name":"Fernando ALONSO","headshot_url":"https://www.formula1.com/content/dam/fom-website/drivers/F/FERALO01_Fernando_Alonso/feralo01.png.transform/1col/image.png"},{"driver_number":16,"full_name":"Charles LECLERC","headshot_url":"https://www.formula1.com/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/1col/image.png"},{"driver_number":18,"full_name":"Lance STROLL","headshot_url":"https://www.formula1.com/content/dam/fom-website/drivers/L/LANSTR01_Lance_Stroll/lanstr01.png.transform/1col/image.png"},{"driver_number":20,"full_name":"Kevin MAGNUSSEN","headshot_url":"https://www.formula1.com/content/dam/fom-website/drivers/K/KEVMAG01_Kevin_Magnussen/kevmag01.png.transform/1col/image.png"},{"driver_number":22,"full_name":"Yuki TSUNODA","headshot_url":"https://www.formula1.com/content/dam/fom-website/drivers/Y/YUKTSU01_Yuki_Tsunoda/yuktsu01.png.transform/1col/image.png"},{"driver_number":23,"full_name":"Alexander ALBON","headshot_url":"https://www.formula1.com/content/dam/fom-website/drivers/A/ALEALB01_Alexander_Albon/alealb01.png.transform/1col/image.png"},{"driver_number":24,"full_name":"ZHOU Guanyu","headshot_url":"https://www.formula1.com/content/dam/fom-website/drivers/G/GUAZHO01_Guanyu_Zhou/guazho01.png.transform/1col/image.png"},{"driver_number":27,"full_name":"Nico HULKENBERG","headshot_url":"https://www.formula1.com/content/dam/fom-website/drivers/N/NICHUL01_Nico_Hulkenberg/nichul01.png.transform/1col/image.png"},{"driver_number":31,"full_name":"Esteban OCON","headshot_url":"https://www.formula1.com/content/dam/fom-website/drivers/E/ESTOCO01_Esteban_Ocon/estoco01.png.transform/1col/image.png"},{"driver_number":44,"full_name":"Lewis HAMILTON","headshot_url":"https://www.formula1.com/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png.transform/1col/image.png"},{"driver_number":55,"full_name":"Carlos SAINZ","headshot_url":"https://www.formula1.com/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png.transform/1col/image.png"},{"driver_number":63,"full_name":"George RUSSELL","headshot_url":"https://www.formula1.com/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png.transform/1col/image.png"},{"driver_number":77,"full_name":"Valtteri BOTTAS","headshot_url":"https://www.formula1.com/content/dam/fom-website/drivers/V/VALBOT01_Valtteri_Bottas/valbot01.png.transform/1col/image.png"},{"driver_number":81,"full_name":"Oscar PIASTRI","headshot_url":"https://www.formula1.com/content/dam/fom-website/drivers/O/OSCPIA01_Oscar_Piastri/oscpia01.png.transform/1col/image.png"}]
const meetings = [{"meeting_key":1140,"meeting_name":"Pre-Season Testing"},{"meeting_key":1141,"meeting_name":"Bahrain Grand Prix"},{"meeting_key":1142,"meeting_name":"Saudi Arabian Grand Prix"},{"meeting_key":1143,"meeting_name":"Australian Grand Prix"},{"meeting_key":1207,"meeting_name":"Azerbaijan Grand Prix"},{"meeting_key":1208,"meeting_name":"Miami Grand Prix"},{"meeting_key":1210,"meeting_name":"Monaco Grand Prix"},{"meeting_key":1211,"meeting_name":"Spanish Grand Prix"},{"meeting_key":1212,"meeting_name":"Canadian Grand Prix"},{"meeting_key":1214,"meeting_name":"British Grand Prix"},{"meeting_key":1215,"meeting_name":"Hungarian Grand Prix"},{"meeting_key":1216,"meeting_name":"Belgian Grand Prix"},{"meeting_key":1217,"meeting_name":"Dutch Grand Prix"},{"meeting_key":1218,"meeting_name":"Italian Grand Prix"},{"meeting_key":1219,"meeting_name":"Singapore Grand Prix"},{"meeting_key":1220,"meeting_name":"Japanese Grand Prix"},{"meeting_key":1221,"meeting_name":"Qatar Grand Prix"},{"meeting_key":1222,"meeting_name":"United States Grand Prix"},{"meeting_key":1223,"meeting_name":"Mexico City Grand Prix"},{"meeting_key":1224,"meeting_name":"SÃ£o Paulo Grand Prix"},{"meeting_key":1225,"meeting_name":"Las Vegas Grand Prix"},{"meeting_key":1226,"meeting_name":"Abu Dhabi Grand Prix"}]


const dropdown = () => {
  

  const driverDropdown = document.getElementById("user-input");

  drivers.forEach((driver) => {
    driver.value = driver.driver_number;
    driver.text = driver.full_name;
    const optionD = `<option value=${driver.value}>${driver.text}</option>`;
    driverDropdown.insertAdjacentHTML("beforeend", optionD);
  });


  const meetingsDropdown = document.getElementById("meetings");

  meetings.forEach((meeting) => {
    meeting.value = meeting.meeting_key;
    meeting.text = meeting.meeting_name;
    const optionL = `<option value=${meeting.value}>${meeting.text}</option>`;
    meetingsDropdown.insertAdjacentHTML("beforeend", optionL);
   
  });

}
window.onload = dropdown;

const loadTeams = () => {
  document.getElementById('search-btn').classList.add('hidden');
  document.getElementById('spinner').classList.remove('hidden');
  
  //console.log(drivers);
  
  const userInput = document.getElementById('user-input');
  const driverid = userInput.value;

  const meetingInput = document.getElementById('meetings');
  const meetingid = meetingInput.value;

  const userDriver = driverid
  
  
  fetch(`https://api.openf1.org/v1/sessions?session_name=Race&meeting_key=${meetingid}`)
    .then(res => res.json())
    .then(data => {obj = data})
    .then(() => {
      sessionid = obj[0].session_key;
      //console.log(sessionid);
      //userInput.value = '';
      url = `https://api.openf1.org/v1/team_radio?session_key=${sessionid}&driver_number=${userDriver}`
      fetch(url)
        .then(res => res.json())
        //.then(data => console.log(data))
        .then(data => displayTeams(data))
        }
    )
    .catch(error => {
      throw(error)});
        
        

  
};







const displayTeams = teams => {
  document.getElementById('spinner').classList.add('hidden');
  document.getElementById('search-btn').classList.remove('hidden');

  const teamsContainer = document.getElementById('teams-container');

  
  teamsContainer.textContent = '';

  if (!teams[0].recording_url) {
    alert("Recordings do not exist. Please try searching a driver that exists.")
  }

  //document.getElementById('search-container').classList.remove('search-center');
  //console.log(teams[0])

  function findDriver(drivername) {
    if (drivername.driver_number === teams[0].driver_number) {
      return drivername.full_name
    }
  }
  let myDriver = drivers.find(drivername => findDriver(drivername));

  //console.log(myDriver);
  
  function findSession(sessionname) {
    if (sessionname.meeting_key === teams[0].meeting_key) {
      return sessionname.meeting_name
    }
  }
  let mySession = meetings.find(sessionname => findSession(sessionname));
  //console.log(team)

  //Display Main Card
  const div = document.createElement('div');
  //div.classList.add('col');
  div.innerHTML = `
                <div class="w-screen md:max-w-2xl min-h-min bg-neutral-content opacity-80 rounded overflow-hidden shadow-lg">
                  <img class="w-1/3 mx-auto" src="${myDriver.headshot_url}" alt="Placeholder Image">
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2 text-center text-primary-content">${myDriver.full_name}</div>
                    <p class="text-gray-700 text-base text-center text-primary-content">
                        ${mySession.meeting_name}
                    </p>
                    <div id="recordings" class="grid grid-flow-row auto-rows-max justify-items-center gap-4">
                    </div>
                  </div>
                </div>
  `
  teamsContainer.appendChild(div);



  
  
  const recordingsContainer = document.getElementById('recordings');

  recordingsContainer.textContent = '';

  teams?.forEach(team => {
    

    //Display Final Data
    const list = document.createElement('div');
    //list.classList.add('flex flex-col space-y-4');
    list.innerHTML = `
                     <audio controls><source src="${team.recording_url}" type="audio/mp3"></audio>                     
    `
    recordingsContainer.appendChild(list);
  });
  
}

// const readMore = clubId => {

//   const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${clubId}`;
//   fetch(url)
//     .then(res => res.json())
//     .then(data => displayReadMore(data))
// }

// const displayReadMore = club => {
//   //console.log(club);
//   const { strTeam, strLeague, strTeamBadge, strDescriptionEN, strCountry } = club.teams[0];

//   document.getElementById('modal-header').innerHTML = `
//      <div>
//          <h5 class="modal-title" id="staticBackdropLabel">${strTeam}</h5>
//          <p>${strLeague}</p>
//      </div>
//      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//   `;

//   document.getElementById('modal-footer').innerHTML = `
//     <p>Country: ${strCountry}</p>
//   `;

//   document.getElementById('modal-body').innerHTML = `
//      <img class="mx-auto" width="100px" src="${strTeamBadge}" alt="">
//      <p>${strDescriptionEN}</p>
//   `;

// }