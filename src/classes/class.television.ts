import { Signal } from "./class.signal";
import { Coax } from "./class.coax"
export class Television {

    turnedOn:boolean = false;
    coaxConnected:boolean = false;
    protected interval:any;
    volume:number = 5;
    channel:number = 2;
    channelArray:number[] = [];
    coax:Coax;
    

    turnOn(){
        this.turnedOn = true;
    }
    turnOff(){
        this.turnedOn = false;
    }

    connectCoax(){
        this.coaxConnected = true;
        this.coax = new Coax();
    }
    disconnectCoax(){
        this.coaxConnected = false;
    }

    buildChannel(number:number){
        clearTimeout(this.interval);
        //tv would rec 1 sign
        this.channelArray.push(number);
        //2sec timeout start
        this.interval = setTimeout(() => {
                let foundChannel = parseInt(this.channelArray.join('').substr(-2));
                this.setChannel(foundChannel);
        }, 2000);
        

                    
            
            // clearTimeout(this.interval);
        
    }

    setChannel(channel:number){

        this.channel = channel;
        console.log("setChannel: ", channel, "TV CHANNEL", this.channel);
    }

    recieveSignal( signal:Signal ){

            switch(signal.code){
                case "POWER":{
                    if(this.turnedOn){
                        this.turnOff();
                        break;
                    } else{
                        this.turnOn();
                        break;
                    }
                }
                case "CHUP":{
                    this.channel += 1;
                    break;
                }
                case "CHDN":{
                    this.channel -= 1;
                    break;
                }
                case "VUP":{
                    this.volume += 1;
                    break;
                }
                case "VDN":{
                    this.volume -= 1 ;
                    break;
                }
                default:{
                    let numSignal = parseInt(signal.code);
                    this.buildChannel(numSignal);
                }

            }

            console.log("The Channel is set to: ",this.channel)

        }

       
      

    //change coax channel to match tv channel
    tvToCoax(tvChannel:number){
        if(this.turnedOn === true && this.coaxConnected === true){
            //this line should take the tvChannel and set the coax channel to the tvCahnnel
            this.coax.channels[tvChannel]
        }
    }

}





// RETRIEVE SIGNAL CODE
 // if(signal.length > 2){

        //     let _channel:string[] = [];

        //     this.channelSetInterval = setTimeout(() =>{ 
        //         _channel.push((signal));
        //     }, 3000);

        //     _channel.join('');

        //     let numChannel = parseInt(_channel[0]);

        //     this.setChannel(numChannel);
        // } else {