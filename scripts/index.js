const select = document.querySelector('.change-lang');
const allLang = ['en', 'ru'];

// go to url with choosed language
const changeURLLanguage = () => {
  let lang = select.value;
  location.href = window.location.pathname + '#' + lang; //? узнать разницу location и window.location
  location.reload();
}

const translateHeader = (section, lang) => {

}

const changeLanguage = () => {
  let hash = window.location.hash;
  hash = hash.slice(1);
  // console.log(hash)
  if (!allLang.includes(hash)) {
    console.log('!allLang')
    location.href = window.location.pathname + '#en';
    location.reload();
  }

  select.value = hash;

  for (let key in langTextObj) {
    const elem = document.getElementById(key);
    console.log(elem)
    if (elem) {
      if (elem.childNodes.length > 1) {
        elem.childNodes[0].textContent = langTextObj[key][hash];
      } else {
        elem.textContent = langTextObj[key][hash];
      };
    }
  };

  // for (let key in langImgObj) {
  //   const image = document.getElementById
  // }
}


changeLanguage();

select.addEventListener('change', changeURLLanguage);


