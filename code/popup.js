let params = {
  active: true,
  currentWindow: true,
};

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

function toggle(event) {
  const badge = event.target.id;
  message[badge]["checked"] = event.target.checked;
  chrome.tabs.query(params, gotTabs);
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
