const generateBadge = (color, label, value) => {
  // Function to generate a badge
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

function getElementByXpath(path, document) {
  // Function to return HTML element from given Xpath
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
  // Location when opening job in new tab
  let parentDiv = getElementByXpath(
    "/html/body/div[8]/div[3]/div/div[1]/div[1]/div/div[1]/div/section/div[2]/div[1]",
    document
  );
  // Location when opening job in same tab
  if (parentDiv == null) {
    parentDiv = getElementByXpath(
      "/html/body/div[7]/div[3]/div/div[1]/div[1]/div/div[1]/div/section/div[2]/div[1]",
      document
    );
  }

  const experienceBadge = generateBadge(
    "#44cc11",
    "experience",
    globalThis.getExperience(text)
  );
  const sponsorshipBadge = generateBadge(
    "#00aadd",
    "sponsorship",
    globalThis.getSponsorship(text)
  );
  const degreeBadge = generateBadge("#fa8128", "degree", globalThis.getDegree(text));
  const remoteBadge = generateBadge("#f20463", "remote", globalThis.getRemote(text));
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
// Chrome event listener
chrome.runtime.onMessage.addListener(newMessage);

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
