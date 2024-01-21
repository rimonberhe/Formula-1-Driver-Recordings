//import {drivers} from "./drivers.js"
const drivers = [{"driver_number":1,"broadcast_name":"M VERSTAPPEN","full_name":"Max VERSTAPPEN","name_acronym":"VER","team_name":"Red Bull Racing","team_colour":"3671C6","first_name":"Max","last_name":"Verstappen","headshot_url":"https://www.formula1.com/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/1col/image.png","country_code":"NED","session_key":9197,"meeting_key":1226},{"driver_number":2,"broadcast_name":"L SARGEANT","full_name":"Logan SARGEANT","name_acronym":"SAR","team_name":"Williams","team_colour":"37BEDD","first_name":"Logan","last_name":"Sargeant","headshot_url":"https://www.formula1.com/content/dam/fom-website/drivers/L/LOGSAR01_Logan_Sargeant/logsar01.png.transform/1col/image.png","country_code":"USA","session_key":9197,"meeting_key":1226},{"driver_number":3,"broadcast_name":"D RICCIARDO","full_name":"Daniel RICCIARDO","name_acronym":"RIC","team_name":"AlphaTauri","team_colour":"5E8FAA","first_name":"Daniel","last_name":"Ricciardo","country_code":"AUS","session_key":9197,"meeting_key":1226,"headshot_url":null},{"driver_number":4,"broadcast_name":"L NORRIS","full_name":"Lando NORRIS","name_acronym":"NOR","team_name":"McLaren","team_colour":"F58020","first_name":"Lando","last_name":"Norris","headshot_url":"https://www.formula1.com/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png.transform/1col/image.png","country_code":"GBR","session_key":9197,"meeting_key":1226},{"driver_number":10,"broadcast_name":"P GASLY","full_name":"Pierre GASLY","name_acronym":"GAS","team_name":"Alpine","team_colour":"2293D1","first_name":"Pierre","last_name":"Gasly","headshot_url":"https://www.formula1.com/content/dam/fom-website/drivers/P/PIEGAS01_Pierre_Gasly/piegas01.png.transform/1col/image.png","country_code":"FRA","session_key":9197,"meeting_key":1226},{"driver_number":11,"broadcast_name":"S PEREZ","full_name":"Sergio PEREZ","name_acronym":"PER","team_name":"Red Bull Racing","team_colour":"3671C6","first_name":"Sergio","last_name":"Perez","headshot_url":"https://www.formula1.com/content/dam/fom-website/drivers/S/SERPER01_Sergio_Perez/serper01.png.transform/1col/image.png","country_code":"MEX","session_key":9197,"meeting_key":1226},{"driver_number":14,"broadcast_name":"F ALONSO","full_name":"Fernando ALONSO","name_acronym":"ALO","team_name":"Aston Martin","team_colour":"358C75","first_name":"Fernando","last_name":"Alonso","headshot_url":"https://www.formula1.com/content/dam/fom-website/drivers/F/FERALO01_Fernando_Alonso/feralo01.png.transform/1col/image.png","country_code":"ESP","session_key":9197,"meeting_key":1226},{"driver_number":16,"broadcast_name":"C LECLERC","full_name":"Charles LECLERC","name_acronym":"LEC","team_name":"Ferrari","team_colour":"F91536","first_name":"Charles","last_name":"Leclerc","headshot_url":"https://www.formula1.com/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/1col/image.png","country_code":"MON","session_key":9197,"meeting_key":1226},{"driver_number":18,"broadcast_name":"L STROLL","full_name":"Lance STROLL","name_acronym":"STR","team_name":"Aston Martin","team_colour":"358C75","first_name":"Lance","last_name":"Stroll","headshot_url":"https://www.formula1.com/content/dam/fom-website/drivers/L/LANSTR01_Lance_Stroll/lanstr01.png.transform/1col/image.png","country_code":"CAN","session_key":9197,"meeting_key":1226},{"driver_number":20,"broadcast_name":"K MAGNUSSEN","full_name":"Kevin MAGNUSSEN","name_acronym":"MAG","team_name":"Haas F1 Team","team_colour":"B6BABD","first_name":"Kevin","last_name":"Magnussen","headshot_url":"https://www.formula1.com/content/dam/fom-website/drivers/K/KEVMAG01_Kevin_Magnussen/kevmag01.png.transform/1col/image.png","country_code":"DEN","session_key":9197,"meeting_key":1226},{"driver_number":22,"broadcast_name":"Y TSUNODA","full_name":"Yuki TSUNODA","name_acronym":"TSU","team_name":"AlphaTauri","team_colour":"5E8FAA","first_name":"Yuki","last_name":"Tsunoda","headshot_url":"https://www.formula1.com/content/dam/fom-website/drivers/Y/YUKTSU01_Yuki_Tsunoda/yuktsu01.png.transform/1col/image.png","country_code":"JPN","session_key":9197,"meeting_key":1226},{"driver_number":23,"broadcast_name":"A ALBON","full_name":"Alexander ALBON","name_acronym":"ALB","team_name":"Williams","team_colour":"37BEDD","first_name":"Alexander","last_name":"Albon","headshot_url":"https://www.formula1.com/content/dam/fom-website/drivers/A/ALEALB01_Alexander_Albon/alealb01.png.transform/1col/image.png","country_code":"THA","session_key":9197,"meeting_key":1226},{"driver_number":24,"broadcast_name":"G ZHOU","full_name":"ZHOU Guanyu","name_acronym":"ZHO","team_name":"Alfa Romeo","team_colour":"C92D4B","first_name":"Guanyu","last_name":"Zhou","headshot_url":"https://www.formula1.com/content/dam/fom-website/drivers/G/GUAZHO01_Guanyu_Zhou/guazho01.png.transform/1col/image.png","country_code":"CHN","session_key":9197,"meeting_key":1226},{"driver_number":27,"broadcast_name":"N HULKENBERG","full_name":"Nico HULKENBERG","name_acronym":"HUL","team_name":"Haas F1 Team","team_colour":"B6BABD","first_name":"Nico","last_name":"Hulkenberg","headshot_url":"https://www.formula1.com/content/dam/fom-website/drivers/N/NICHUL01_Nico_Hulkenberg/nichul01.png.transform/1col/image.png","country_code":"GER","session_key":9197,"meeting_key":1226},{"driver_number":31,"broadcast_name":"E OCON","full_name":"Esteban OCON","name_acronym":"OCO","team_name":"Alpine","team_colour":"2293D1","first_name":"Esteban","last_name":"Ocon","headshot_url":"https://www.formula1.com/content/dam/fom-website/drivers/E/ESTOCO01_Esteban_Ocon/estoco01.png.transform/1col/image.png","country_code":"FRA","session_key":9197,"meeting_key":1226},{"driver_number":44,"broadcast_name":"L HAMILTON","full_name":"Lewis HAMILTON","name_acronym":"HAM","team_name":"Mercedes","team_colour":"6CD3BF","first_name":"Lewis","last_name":"Hamilton","headshot_url":"https://www.formula1.com/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png.transform/1col/image.png","country_code":"GBR","session_key":9197,"meeting_key":1226},{"driver_number":55,"broadcast_name":"C SAINZ","full_name":"Carlos SAINZ","name_acronym":"SAI","team_name":"Ferrari","team_colour":"F91536","first_name":"Carlos","last_name":"Sainz","headshot_url":"https://www.formula1.com/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png.transform/1col/image.png","country_code":"ESP","session_key":9197,"meeting_key":1226},{"driver_number":63,"broadcast_name":"G RUSSELL","full_name":"George RUSSELL","name_acronym":"RUS","team_name":"Mercedes","team_colour":"6CD3BF","first_name":"George","last_name":"Russell","headshot_url":"https://www.formula1.com/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png.transform/1col/image.png","country_code":"GBR","session_key":9197,"meeting_key":1226},{"driver_number":77,"broadcast_name":"V BOTTAS","full_name":"Valtteri BOTTAS","name_acronym":"BOT","team_name":"Alfa Romeo","team_colour":"C92D4B","first_name":"Valtteri","last_name":"Bottas","headshot_url":"https://www.formula1.com/content/dam/fom-website/drivers/V/VALBOT01_Valtteri_Bottas/valbot01.png.transform/1col/image.png","country_code":"FIN","session_key":9197,"meeting_key":1226},{"driver_number":81,"broadcast_name":"O PIASTRI","full_name":"Oscar PIASTRI","name_acronym":"PIA","team_name":"McLaren","team_colour":"F58020","first_name":"Oscar","last_name":"Piastri","headshot_url":"https://www.formula1.com/content/dam/fom-website/drivers/O/OSCPIA01_Oscar_Piastri/oscpia01.png.transform/1col/image.png","country_code":"AUS","session_key":9197,"meeting_key":1226}]
const meetings = [{"meeting_name":"Pre-Season Testing","meeting_official_name":"FORMULA 1 ARAMCO PRE-SEASON TESTING 2023","location":"Sakhir","country_key":36,"country_code":"BRN","country_name":"Bahrain","circuit_key":63,"circuit_short_name":"Sakhir","date_start":"2023-02-23T07:00:00","gmt_offset":"03:00:00","meeting_key":1140,"year":2023},{"meeting_name":"Bahrain Grand Prix","meeting_official_name":"FORMULA 1 GULF AIR BAHRAIN GRAND PRIX 2023","location":"Sakhir","country_key":36,"country_code":"BRN","country_name":"Bahrain","circuit_key":63,"circuit_short_name":"Sakhir","date_start":"2023-03-03T11:30:00","gmt_offset":"03:00:00","meeting_key":1141,"year":2023},{"meeting_name":"Saudi Arabian Grand Prix","meeting_official_name":"FORMULA 1 STC SAUDI ARABIAN GRAND PRIX 2023","location":"Jeddah","country_key":153,"country_code":"KSA","country_name":"Saudi Arabia","circuit_key":149,"circuit_short_name":"Jeddah","date_start":"2023-03-17T13:30:00","gmt_offset":"03:00:00","meeting_key":1142,"year":2023},{"meeting_name":"Australian Grand Prix","meeting_official_name":"FORMULA 1 ROLEX AUSTRALIAN GRAND PRIX 2023","location":"Melbourne","country_key":5,"country_code":"AUS","country_name":"Australia","circuit_key":10,"circuit_short_name":"Melbourne","date_start":"2023-03-31T01:30:00","gmt_offset":"11:00:00","meeting_key":1143,"year":2023},{"meeting_name":"Azerbaijan Grand Prix","meeting_official_name":"FORMULA 1 AZERBAIJAN GRAND PRIX 2023","location":"Baku","country_key":30,"country_code":"AZE","country_name":"Azerbaijan","circuit_key":144,"circuit_short_name":"Baku","date_start":"2023-04-28T09:30:00","gmt_offset":"04:00:00","meeting_key":1207,"year":2023},{"meeting_name":"Miami Grand Prix","meeting_official_name":"FORMULA 1 CRYPTO.COM MIAMI GRAND PRIX 2023","location":"Miami","country_key":19,"country_code":"USA","country_name":"United States","circuit_key":151,"circuit_short_name":"Miami","date_start":"2023-05-05T18:00:00","gmt_offset":"-04:00:00","meeting_key":1208,"year":2023},{"meeting_name":"Monaco Grand Prix","meeting_official_name":"FORMULA 1 GRAND PRIX DE MONACO 2023","location":"Monaco","country_key":114,"country_code":"MON","country_name":"Monaco","circuit_key":22,"circuit_short_name":"Monte Carlo","date_start":"2023-05-26T11:30:00","gmt_offset":"02:00:00","meeting_key":1210,"year":2023},{"meeting_name":"Spanish Grand Prix","meeting_official_name":"FORMULA 1 AWS GRAN PREMIO DE ESPAÃ‘A 2023","location":"Barcelona","country_key":1,"country_code":"ESP","country_name":"Spain","circuit_key":15,"circuit_short_name":"Catalunya","date_start":"2023-06-02T11:30:00","gmt_offset":"02:00:00","meeting_key":1211,"year":2023},{"meeting_name":"Canadian Grand Prix","meeting_official_name":"FORMULA 1 PIRELLI GRAND PRIX DU CANADA 2023","location":"MontrÃ©al","country_key":46,"country_code":"CAN","country_name":"Canada","circuit_key":23,"circuit_short_name":"Montreal","date_start":"2023-06-16T17:30:00","gmt_offset":"-04:00:00","meeting_key":1212,"year":2023},{"meeting_name":"British Grand Prix","meeting_official_name":"FORMULA 1 ARAMCO BRITISH GRAND PRIX 2023","location":"Silverstone","country_key":2,"country_code":"GBR","country_name":"Great Britain","circuit_key":2,"circuit_short_name":"Silverstone","date_start":"2023-07-07T11:30:00","gmt_offset":"01:00:00","meeting_key":1214,"year":2023},{"meeting_name":"Hungarian Grand Prix","meeting_official_name":"FORMULA 1 QATAR AIRWAYS HUNGARIAN GRAND PRIX 2023","location":"Budapest","country_key":14,"country_code":"HUN","country_name":"Hungary","circuit_key":4,"circuit_short_name":"Hungaroring","date_start":"2023-07-21T11:30:00","gmt_offset":"02:00:00","meeting_key":1215,"year":2023},{"meeting_name":"Belgian Grand Prix","meeting_official_name":"FORMULA 1 MSC CRUISES BELGIAN GRAND PRIX 2023","location":"Spa-Francorchamps","country_key":16,"country_code":"BEL","country_name":"Belgium","circuit_key":7,"circuit_short_name":"Spa-Francorchamps","date_start":"2023-07-28T11:30:00","gmt_offset":"02:00:00","meeting_key":1216,"year":2023},{"meeting_name":"Dutch Grand Prix","meeting_official_name":"FORMULA 1 HEINEKEN DUTCH GRAND PRIX 2023","location":"Zandvoort","country_key":133,"country_code":"NED","country_name":"Netherlands","circuit_key":55,"circuit_short_name":"Zandvoort","date_start":"2023-08-25T10:30:00","gmt_offset":"02:00:00","meeting_key":1217,"year":2023},{"meeting_name":"Italian Grand Prix","meeting_official_name":"FORMULA 1 PIRELLI GRAN PREMIO Dâ€™ITALIA 2023","location":"Monza","country_key":13,"country_code":"ITA","country_name":"Italy","circuit_key":39,"circuit_short_name":"Monza","date_start":"2023-09-01T11:30:00","gmt_offset":"02:00:00","meeting_key":1218,"year":2023},{"meeting_name":"Singapore Grand Prix","meeting_official_name":"FORMULA 1 SINGAPORE AIRLINES SINGAPORE GRAND PRIX 2023","location":"Marina Bay","country_key":157,"country_code":"SGP","country_name":"Singapore","circuit_key":61,"circuit_short_name":"Singapore","date_start":"2023-09-15T09:30:00","gmt_offset":"08:00:00","meeting_key":1219,"year":2023},{"meeting_name":"Japanese Grand Prix","meeting_official_name":"FORMULA 1 LENOVO JAPANESE GRAND PRIX 2023","location":"Suzuka","country_key":4,"country_code":"JPN","country_name":"Japan","circuit_key":46,"circuit_short_name":"Suzuka","date_start":"2023-09-22T02:30:00","gmt_offset":"09:00:00","meeting_key":1220,"year":2023},{"meeting_name":"Qatar Grand Prix","meeting_official_name":"FORMULA 1 QATAR AIRWAYS QATAR GRAND PRIX 2023","location":"Lusail","country_key":149,"country_code":"QAT","country_name":"Qatar","circuit_key":150,"circuit_short_name":"Lusail","date_start":"2023-10-06T13:30:00","gmt_offset":"03:00:00","meeting_key":1221,"year":2023},{"meeting_name":"United States Grand Prix","meeting_official_name":"FORMULA 1 LENOVO UNITED STATES GRAND PRIX 2023","location":"Austin","country_key":19,"country_code":"USA","country_name":"United States","circuit_key":9,"circuit_short_name":"Austin","date_start":"2023-10-20T17:30:00","gmt_offset":"-05:00:00","meeting_key":1222,"year":2023},{"meeting_name":"Mexico City Grand Prix","meeting_official_name":"FORMULA 1 GRAN PREMIO DE LA CIUDAD DE MÃ‰XICO 2023","location":"Mexico City","country_key":8,"country_code":"MEX","country_name":"Mexico","circuit_key":65,"circuit_short_name":"Mexico City","date_start":"2023-10-27T18:30:00","gmt_offset":"-06:00:00","meeting_key":1223,"year":2023},{"meeting_name":"SÃ£o Paulo Grand Prix","meeting_official_name":"FORMULA 1 ROLEX GRANDE PRÃŠMIO DE SÃƒO PAULO 2023","location":"SÃ£o Paulo","country_key":10,"country_code":"BRA","country_name":"Brazil","circuit_key":14,"circuit_short_name":"Interlagos","date_start":"2023-11-03T14:30:00","gmt_offset":"-03:00:00","meeting_key":1224,"year":2023},{"meeting_name":"Las Vegas Grand Prix","meeting_official_name":"FORMULA 1 HEINEKEN SILVER LAS VEGAS GRAND PRIX 2023","location":"Las Vegas","country_key":19,"country_code":"USA","country_name":"United States","circuit_key":152,"circuit_short_name":"Las Vegas","date_start":"2023-11-17T04:30:00","gmt_offset":"-08:00:00","meeting_key":1225,"year":2023},{"meeting_name":"Abu Dhabi Grand Prix","meeting_official_name":"FORMULA 1 ETIHAD AIRWAYS ABU DHABI GRAND PRIX 2023","location":"Yas Island","country_key":21,"country_code":"UAE","country_name":"United Arab Emirates","circuit_key":70,"circuit_short_name":"Yas Marina Circuit","date_start":"2023-11-24T09:30:00","gmt_offset":"04:00:00","meeting_key":1226,"year":2023}]

const meetingsDropdown = () => {

  const dropdown = document.getElementById("meetings");

  meetings.forEach((meeting) => {
    meeting.value = meeting.meeting_key;
    meeting.text = meeting.meeting_name;
    const optionL = `<option value=${meeting.value}>${meeting.text}</option>`;
    dropdown.insertAdjacentHTML("beforeend", optionL);
    //console.log(document.querySelector("#meetings").insertAdjacentHTML(beforeend, optionL))
    
    //const option = document.createElement("option");
    //dropdown.appendChild(option.text);
    //console.log(option.text)
  });

}
window.onload = meetingsDropdown;

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
      userInput.value = '';
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
                <div class="w-screen md:max-w-2xl max-h-fit bg-neutral-content opacity-80 rounded overflow-hidden shadow-lg">
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