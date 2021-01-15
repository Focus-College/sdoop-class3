import { Signal } from "./class.signal";
import { Coax } from "./class.coax"
export class Television {

    turnedOn:boolean = false;
    coaxConnected:boolean = false;
    protected channelSetInterval:any;
    volume:number = 5;
    channel:number = 2;
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

    setChannel(channel:number){
        this.channel = channel;
    }

    recieveSignal( signal:string ){
        console.log(signal);

        if(signal.length === 1){

            let _channel:string[] = [];

            this.channelSetInterval = setTimeout(() =>{ 
                _channel.push((signal));
            }, 3000);

            _channel.join('');

            let numChannel = parseInt(_channel[0]);

            this.setChannel(numChannel);
        } else {

            switch(signal){
                case "Power":{
                    if(this.turnedOn){
                        this.turnOff();
                        break;
                    } else{
                        this.turnOn();
                        break;
                    }
                }
                case "Channel Up":{
                    this.channel + 1;
                    break;
                }
                case "Channel Down":{
                    this.channel - 1;
                    break;
                }
                case "Volume Up":{
                    this.volume + 1;
                    break;
                }
                case "Volume Down":{
                    this.volume - 1 ;
                    break;
                }

            }

        }
        console.log( "Channel set to : ", this.channel );
    }

    //change coax channel to match tv channel
    tvToCoax(tvChannel:number){
        if(this.turnedOn === true && this.coaxConnected === true){
            //this line should take the tvChannel and set the coax channel to the tvCahnnel
            this.coax.channels[tvChannel]
        }
    }

}


