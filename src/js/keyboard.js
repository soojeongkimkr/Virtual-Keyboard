export class Keyboard {
    #switchEl;
    #fontSelectEl;
    #containerEl;
    constructor(){
        this.#assignElement();
        this.#addEvent();
    }

    #assignElement(){
        this.#containerEl = document.getElementById("container");
        this.#switchEl = this.#containerEl.querySelector("#switch");
        this.#fontSelectEl = this.#containerEl.querySelector("#font")
    }

    #addEvent(){
        this.#switchEl.addEventListener("change", (event)=>{
            document.documentElement.setAttribute(
                "theme",
                event.target.checked ? "dark-mode" : ""
            );
            // console.log(event.target.checked);
        });
        this.#fontSelectEl.addEventListener("change", (event)=>{
            document.body.style.fontFamily = event.target.value;
        });
    }
}