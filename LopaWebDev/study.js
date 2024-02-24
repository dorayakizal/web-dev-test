const button = document.getElementById("butang");
const gambar = document.getElementById("lopaTidur");
const title = document.getElementById("amaran");

const userTekan = document.createElement("h1");
//set attribute
userTekan.textContent = "Lopa: You fool, I was eating my wet food in my dream, now you shall pay the price for waking me up!";
userTekan.id = "tertekan";
userTekan.style.color = "red";

// button.addEventListener("click", function () {
//     title.textContent = "Angry lopa is wide awake!";
//     title.style.textAlign = "center";
//     gambar.src = "bangun.jpg";
//     document.getElementsByClassName('isi')[0].insertBefore(userTekan, button);
//     button.textContent = "Ask lopa for forgiveness";

//     button.addEventListener("click", function () {
//         userTekan.textContent = "Lopa: You dare asking for forgiveness after what you've done?";
//         gambar.src = "madlopa.jpeg";
//         button.textContent = "Please forgive me lopa!";

//         button.addEventListener("click", function () {
//             title.textContent = "Wise lopa is thinking!";
//             userTekan.textContent = "Lopa: Silent mortal, let me think thoroughly first!";
//             gambar.src = "lopaThink.jpeg";
//             button.textContent = "Okay...";

//             button.addEventListener("click", function () {
//                 userTekan.textContent = "Lopa: Fine, I'll forgive you. However, there will be no more next time!";
//                 button.textContent = "Thank you Master Lopa!";
//                 gambar.src = "lopaForgive.jpeg";

//                 button.addEventListener("click", function () {
//                     title.textContent = "Lopa: Sleepy lopa is going back to sleep!";
//                     userTekan.textContent = "Now don't interrupt me, I am going back to sleep!";
//                     button.textContent = "Noted Lopa";
//                     gambar.src = "lopaSleeps.jpeg";

//                     let canShowAlert = true;

//                     button.addEventListener("click", () => {
//                         if (canShowAlert) {
//                             alert("You do not have the courage to disturb lopa anymore!");
//                             canShowAlert = false;
//                             setTimeout(() => {
//                                 canShowAlert = true;
//                             }, 2000); // 5000 milliseconds = 5 seconds
//                         }
//                     });

//                 });
//             });
//         });

//     });

// });

let currentState = 0;

const buttonClickHandler = () => {
    switch (currentState) {
        case 0:
            title.textContent = "Angry lopa is wide awake!";
            title.style.textAlign = "center";
            gambar.src = "gambarLopa/bangun.jpg";
            document.getElementsByClassName('isi')[0].insertBefore(userTekan, button);
            button.textContent = "Ask lopa for forgiveness";
            currentState++;
            break;

        case 1:
            userTekan.textContent = "Lopa: You dare asking for forgiveness after what you've done?";
            gambar.src = "gambarLopa/madlopa.jpeg";
            button.textContent = "Please forgive me lopa!";
            currentState++;
            break;

        case 2:
            title.textContent = "Wise lopa is thinking!";
            userTekan.textContent = "Lopa: Silent mortal, let me think thoroughly first!";
            gambar.src = "gambarLopa/lopaThink.jpeg";
            button.textContent = "Okay...";
            currentState++;
            break;

        case 3:
            userTekan.textContent = "Lopa: Fine, I'll forgive you. However, there will be no more next time!";
            button.textContent = "Thank you Master Lopa!";
            gambar.src = "gambarLopa/lopaForgive.jpeg";
            currentState++;
            break;

        case 4:
            title.textContent = "Lopa: Sleepy lopa is going back to sleep!";
            userTekan.textContent = "Now don't interrupt me, I am going back to sleep!";
            button.textContent = "Noted Lopa";
            gambar.src = "gambarLopa/lopaSleeps.jpeg";
            currentState++;
            break;

        case 5:
            alert("You do not have the courage to disturb lopa anymore!");
            break;
    }
};

button.addEventListener("click", buttonClickHandler);
