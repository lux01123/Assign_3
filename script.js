// check email
const buttonCheckJs = document.getElementById("buttonCheck");
const valueCheckJs = document.querySelector(".emailInput").value;
const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

buttonCheckJs.addEventListener("click", function () {
  if (document.querySelector(".emailInput").value.match(regex)) {
    document.querySelector(".checkMail").classList.add("hiddenCheck");
    document.querySelector(".aboutCheck ").classList.remove("hidden");
    console.log(document.querySelector(".emailInput").value);
  } else {
    console.log("Please enter Email again");
    alert("Please enter Email again");
    console.log(document.querySelector(".emailInput").value);
  }
});
// View more less
// Type: Hard way
// const expViewJs = document.querySelector(".expView");
// let expViewTF = false;
// expViewJs.addEventListener("click", function () {
//   if (!expViewTF) {
//     document.querySelector(".Exp-content").classList.remove("hidden");
//     document.querySelector(".expView").textContent = "🔺 VIEW LESS";
//     expViewTF = true;
//     console.log(expViewTF);
//   } else {
//     document.querySelector(".Exp-content").classList.add("hidden");
//     document.querySelector(".expView").textContent = "🔻 VIEW MORE";
//     expViewTF = false;
//     console.log(expViewTF);
//   }
// });
// Type: function
const viewMoreLess = function (viewTF, viewContent, viewML) {
  if (!viewTF.objTF) {
    viewContent.classList.remove("hidden");
    viewML.textContent = "🔺 VIEW LESS";
    viewTF.objTF = true;
    console.log(viewTF);
  } else {
    viewContent.classList.add("hidden");
    viewML.textContent = "🔻 VIEW MORE";
    viewTF.objTF = false;
    console.log(viewTF);
  }
};

const expContentJs = document.querySelector(".Exp-content");
const expViewJs = document.querySelector(".expView");
let expViewTF = { objTF: false };
expViewJs.addEventListener("click", function () {
  viewMoreLess(expViewTF, expContentJs, expViewJs);
});

const skillContentJs = document.querySelector(".Skill-content");
const skillViewJs = document.querySelector(".skillView");
let skillViewTF = { objTF: false };
skillViewJs.addEventListener("click", function () {
  viewMoreLess(skillViewTF, skillContentJs, skillViewJs);
});

const lanContentJs = document.querySelector(".Lan-content");
const lanViewJs = document.querySelector(".lanView");
let lanViewTF = { objTF: false };
lanViewJs.addEventListener("click", function () {
  viewMoreLess(lanViewTF, lanContentJs, lanViewJs);
});

const actiContentJs = document.querySelector(".Acti-content");
const actiViewJs = document.querySelector(".actiView");
let actiViewTF = { objTF: false };
actiViewJs.addEventListener("click", function () {
  viewMoreLess(actiViewTF, actiContentJs, actiViewJs);
});

const eduContentJs = document.querySelector(".Edu-content");
const eduViewJs = document.querySelector(".eduView");
let eduViewTF = { objTF: false };
eduViewJs.addEventListener("click", function () {
  viewMoreLess(eduViewTF, eduContentJs, eduViewJs);
});

const hobbyContentJs = document.querySelector(".Hob-content");
const hobbyViewJs = document.querySelector(".hobbView");
let hobbyViewTF = { objTF: false };
hobbyViewJs.addEventListener("click", function () {
  viewMoreLess(hobbyViewTF, hobbyContentJs, hobbyViewJs);
});
