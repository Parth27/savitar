const generateBadge = (color, label, value) => {
  let badgeDiv = document.createElement("div");
  badgeDiv.setAttribute("id", label);
  badgeDiv.style = `display: inline-block;
                      border-radius: .75em;
                      font-family: 'Dejavu Sans','Arial';
                      margin-right: 20px;`;
  let titleDiv = document.createElement("div");
  titleDiv.style = `border-top-left-radius: .25em; 
                      border-bottom-left-radius: .25em;
                      background: #555555;
                      display: inline-block;
                      float: left;
                      text-transform: lowercase;
                      color: #FFF;
                      text-shadow: 0px 0.1em 0px rgba(0, 0, 0, 0.5);
                      margin: 0;
                      border: 0;
                      padding-left: 10px;
                      padding-right: 10px;`;
  titleDiv.innerHTML = label;
  let valueDiv = document.createElement("div");
  valueDiv.style = `background: ${color};
                      border-top-right-radius: .25em;
                      border-bottom-right-radius: .25em;
                      display: inline-block;
                      float: left;
                      text-transform: lowercase;
                      color: #FFF;
                      text-shadow: 0px 0.1em 0px rgba(0, 0, 0, 0.5);
                      margin: 0;
                      border: 0;
                      padding-left: 10px;
                      padding-right: 10px;`;
  valueDiv.innerHTML = value;
  badgeDiv.appendChild(titleDiv);
  badgeDiv.appendChild(valueDiv);
  return badgeDiv;
};

const getExperience = (text) => {
  var pattern = /[0-9]*[\s]*[\-]*[\s]*[0-9]+[\+]*[\s]*[or\smore]*[\s]*years/g;
  var result = text.match(pattern);
  var maxNum = parseInt("0")
    var maxIdx = 0
    if (result.length > 1 ){   

        for (i = 0; i < result.length; i++) {
        num = result[i].match(/\d+/)[0];
        if (num > maxNum){
            maxNum = num
            maxIdx = i
        }
            
        }
   }

  if (result == null){
        result = "N/A"
  }
  return result[maxIdx];
};

const getSponsorship = (text) => {
  var pattern = /(U[/.]*S Citizens|No sponsorship|No Sponsorship)/g;
  var result = text.match(pattern);
  if (result == null){
        result = "Available"
  }
  return result;
};

const getDegree = (text) => {
  var pattern = /(Master[\'s]*[\s]+|Bachelor[\'s]*[\s]*|M[\.]*s[\s]+|B[\.]*S[\s]+|BA[\s]*|Postdoctoral[\s]+|PhD[\s]+)/g;

  var result = text.match(pattern);
     
  if (result == null){
        result = "N/A"
    }
  return result ;
};

const getRemote = (text) => {
  var pattern = /(work from home|remote work)/g;
  var result = text.match(pattern);
  if (result == null){
        result = "N/A"
    }else{
    result = "Yes"
    }
  return result;
};

function getElementByXpath(path, document) {
  return document.evaluate(
    path,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;
}

const displayBadge = (document) => {
  const text = document.getElementsByTagName("article")[0].textContent;

  let parentDiv = getElementByXpath(
    "/html/body/div[8]/div[3]/div/div[1]/div[1]/div/div[1]/div/section/div[2]/div[1]",
    document
  );
  if (parentDiv == null) {
    parentDiv = getElementByXpath(
      "/html/body/div[7]/div[3]/div/div[1]/div[1]/div/div[1]/div/section/div[2]/div[1]",
      document
    );
  }

  const experienceBadge = generateBadge(
    "#44cc11",
    "experience",
    getExperience(text)
  );
  const sponsorshipBadge = generateBadge(
    "#00aadd",
    "sponsorship",
    getSponsorship(text)
  );
  const degreeBadge = generateBadge("#fa8128", "degree", getDegree(text));
  const remoteBadge = generateBadge("#f20463", "remote", getRemote(text));
  const badges = {
    experience: experienceBadge,
    sponsorship: sponsorshipBadge,
    degree: degreeBadge,
    remote: remoteBadge,
  };
  return [parentDiv, badges];
};

function DelayedCount() {
  const [count, setCount] = useState(0);
}

function handleClickAsync() {
  setTimeout(function delay() {
    setCount((count) => count + 1);
  }, 1000);
}

//chrome.runtime.onMessage.addListener(newMessage);

function newMessage(message, sender, sendResponse) {
  console.log("Message received");
  resetBadges(message, document);
}

function resetBadges(message, document) {
  let [parentDiv, badges] = displayBadge(document);
  for (const badge in message) {
    const badgeElement = document.getElementById(badge);
    if (message[badge]["checked"]) {
      if (!badgeElement) {
        parentDiv.appendChild(badges[badge]);
      }
    } else {
      if (badgeElement) {
        badgeElement.remove();
      }
    }
  }
}

module.exports = { getExperience, getDegree, getRemote, getSponsorship};
