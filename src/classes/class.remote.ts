import { Room } from "./class.room";

export class Remote {

    buttons:Button[];
    dispatcher = new IRDispatcher();
    constructor(){
        const buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9","0","Power","Channel Up","Channel Down","Volume Up","Volume Down"];

        this.buttons = buttons.map( buttonLabel => new Button(buttonLabel, this ));

    }

    handelButtonPress(button:Button){
        this.dispatcher.dispatch(button.emblem);
    }
    


}

class Button{

    material:string = "Rubber";
    isPressed:boolean = false;

    protected interval:any;

    constructor(readonly emblem:string, private remote:Remote){

    }*

    press(){
        this.isPressed = true;

        this.interval = setInterval(() => {
            this.remote.handelButtonPress(this);
        }, 1000)

    }
    release(){
        this.isPressed = false;
        clearInterval(this.interval)
    }

}

class IRDispatcher{

    dispatch(code:string){
        const signal = new Signal(code);
    }

}

class Signal {
    constructor( code:string ){
        console.log("Singal: ", code)
        Room.items.push(this);
    }
}