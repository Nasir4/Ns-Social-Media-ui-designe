//SIDEBAR
const menuItems = document.querySelectorAll(".menu-item");

//MESSAGES
const messagesNotification = document.querySelector("#messages-notification");

const messages = document.querySelector(".message");
const message = document.querySelector(".message-container");

const messageSearch = document.querySelector("#message-search");

const changeActiveItem = () => {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
};

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    changeActiveItem();
    item.classList.add("active");
    if (item.id != "notification") {
      document.querySelector(".notifications-popup").style.display = "none";

      //   style.display = "none";
    } else {
      document.querySelector(" .notifications-popup").style.display = "block";
      //   style.display = "block";
      document.querySelector(
        "#notification .notification-count"
      ).style.display = "none";
    }
  });
});

//============= MESSAGES ================== //

const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();
  //   console.log(val);

  message.forEach((chat) => {
    let name = chat.querySelector("h5").textContent.toLowerCase();
    if (name.indexOf(val) != -1) {
      chat.style.display = "flex";
    } else {
      chat.style.display = "none";
    }
  });
};

messageSearch.addEventListener("keyup", searchMessage);

messagesNotification.addEventListener("click", () => {
  messages.style.boxShadow = "0 0 1rem var(--color-primary)";
  messagesNotification.querySelector(".notification-count").style.display =
    "none";
  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 2000);
});
