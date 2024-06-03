console.log("index");

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    chatbotContainer.classList.remove('visible');
  chatbotContainer.classList.add('leave');
  chatbotContainer.classList.remove('enter');
  minimizeButton.classList.toggle('visible');
  chatIcon.classList.add('visible')
  }
});

const chatIcon = document.querySelector('.chat-icon');
const chatbotContainer = document.getElementById('chatbot-container');
const minimizeButton = document.getElementById('minimize-chat');

chatIcon.addEventListener('click', () => {
    console.log("chatIcon.addEventListener('click'");
  chatbotContainer.classList.add('visible');
  chatIcon.classList.remove('visible');
  chatbotContainer.classList.add('enter'); 
  chatbotContainer.classList.remove('leave');

});

minimizeButton.addEventListener('click', () => {
  chatbotContainer.classList.remove('visible');
  chatbotContainer.classList.add('leave');
  chatbotContainer.classList.remove('enter');
  minimizeButton.classList.toggle('visible');
  chatIcon.classList.add('visible')
});

function handleLanguageClick(event) {
  event.preventDefault();

  console.log("handleLanguageClick");
  const url = new URL(event.target.href);
  const searchParams = url.searchParams;
  const lang = searchParams.get("lang");

  // Update document direction and perform any other actions based on lang
  document.documentElement.lang = lang 
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
}

const languageLinks = document.querySelectorAll(".language-link");
console.log("languageLinks", languageLinks);
languageLinks.forEach((link) =>
  link.addEventListener("click", handleLanguageClick)
);
