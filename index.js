let display = document.querySelector("#display");
let buttons = Array.from(document.querySelector(".button"));

buttons.map((button) => {
        button.addEventListener('click', (e) =>{

            switch (e.target.innerText) {
                case 'C':
                    display.innerText= '';
                    break;
                case '←':
                    display.inner
                default:
                    display.innerText += e.target.innerText;
            }
        });
    });