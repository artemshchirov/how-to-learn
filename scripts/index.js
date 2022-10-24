const select = document.querySelector(".change-lang");
const allLang = ["en", "ru"];

// go to url with selected language
const changeURLLanguage = () => {
  let lang = select.value;
  location.href = window.location.pathname + "#" + lang;
  location.reload();
};

const changeTextLanguage = (lang) => {
  for (let key in langTextObj) {
    const elem = document.getElementById(key);
    if (elem) {
      if (elem.childNodes.length > 1) {
        elem.childNodes[0].textContent = langTextObj[key][lang];
      } else {
        elem.textContent = langTextObj[key][lang];
      }
    }
  }
};

const changeImageLanguage = (lang) => {
  for (let key in langImagesObj) {
    const image = document.getElementById(key);
    if (image) image.src = langImagesObj[key][lang];
  }
};

const changeLanguage = () => {
  let hash = window.location.hash;
  hash = hash.slice(1);
  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + "#ru";
    location.reload();
  }
  select.value = hash;
  changeImageLanguage(hash);
  changeTextLanguage(hash);
};

changeLanguage();

select.addEventListener("change", changeURLLanguage);
