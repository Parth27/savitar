let params = {
  active: true,
  currentWindow: true,
};

//Preloaded data, with every badge checked initially
let message = {
  experience: {
    checked: true,
  },
  sponsorship: {
    checked: true,
  },
  degree: {
    checked: true,
  },
  remote: {
    checked: true,
  },
};


// Executed when the extension is loaded
document.body.onload = function () {
  chrome.storage.sync.get("data", function (items) {
    if (!chrome.runtime.error) {
      message = items["data"];
      // Default initial values
      message = {
        experience: {
          checked: true,
        },
        sponsorship: {
          checked: true,
        },
        degree: {
          checked: true,
        },
        remote: {
          checked: true,
        },
      };
      for (const badge in message) {
        document.getElementById(badge).checked = message[badge]["checked"];
      }
      chrome.tabs.query(params, gotTabs);
    }
  });
};

function gotTabs(tabs) {
  // Send badge filter information to content script
  chrome.tabs.sendMessage(tabs[0].id, message);
}


// Function to handle the event of toggling switches
function toggle(event) {
  // check if any particular switch is toggled and get the id
  const badge = event.target.id;
  message[badge]["checked"] = event.target.checked;
  chrome.tabs.query(params, gotTabs);
  
  // Update the message variable to set to turn off displaying\
  // that particular badge
  chrome.storage.sync.set({ data: message }, function () {
    if (chrome.runtime.error) {
      console.log("Runtime error.");
    }
  });
}

const checkboxes = document.getElementsByTagName("input");

for (const checkbox of checkboxes) {
  checkbox.addEventListener("change", toggle, false);
}
