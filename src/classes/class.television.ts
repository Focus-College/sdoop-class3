import { Signal } from "./class.signal";
import { Coax } from './class.coax';
import { Log } from './class.log'
import { throws } from "assert";

export class Television {
    volume = 45
    channel = 1
    channelBuilder:number[] = []
    protected interval:any
    log = new Log;

    private timeout:any;

    constructor(public coax:Coax){
        this.log.write(this.coax.channels[this.channel])
    }
    
    
    recieveSignal( signal:Signal ){
        switch(signal.code){
            case "VUP":
                this.volumeUp()
                break;
            case "VDN":
                this.volumeDown()
                break;
            case "CHUP":
                this.channelUp()
                break;
            case "CHDN":
                this.channelDown()
                break;
            default:
                this.addNumber(Number(signal.code))
        }
    }

    volumeUp(){
        if(this.volume < 50){
            
            this.volume++;
        }
        this.log.write("Volume is now " + this.volume)
    }

    volumeDown(){
        if(this.volume > 0){
            
            this.volume--;
        }
        this.log.write("Volume is now " + this.volume)
    }

    channelUp(){
        if(this.channel <= 99){
            this.channel++
        } else {
            this.channel--
        }
        this.log.write("Channel " + this.channel)
    }

    channelDown(){
        if(this.channel >= 1){
            this.channel--;
        } else {
            this.channel = 99
        }
        this.log.write("Channel " + this.channel)
    }

    addNumber(codeNumber:number){
        this.timeout = setTimeout(() => {
            if(this.channelBuilder[0] && !this.channelBuilder[1]){​​​​​
                this.channelBuilder[0] = 0
                this.channelBuilder[1] = codeNumber
            
            this.changeChannel()
            }
        }, 1500)
        this.channelBuilder.push(codeNumber)
        if(this.channelBuilder.length === 2){
            this.changeChannel()
        }
    }
    changeChannel(){
        clearTimeout(this.timeout)
        this.channel = (this.channelBuilder[0] * 10) + (this.channelBuilder[1])
        this.channelBuilder = []
        this.log.write(this.coax.channels[this.channel])
    
    }

}