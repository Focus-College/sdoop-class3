import { HDMI, Input } from "./class.input";
import { NetworkAdapter, Wifi } from "./class.network";
import { Signal } from "./class.signal";

export class Television {

    inputs:Input[]=[];

    screenSize:number;
    
    recieveSignal( signal:Signal ){
        
    }

    protected addInput( input:Input ){
        this.inputs.push( input );
    }

}

export class SmartTV extends Television {

    network: NetworkAdapter;

}

export class LgModelX extends SmartTV {

    brand = "LG";
    screenSize = 48;

}

export class SamsungModelY extends SmartTV {

    brand = "Samsung";
    screenSize = 50;
    
    constructor(){
        super();
        this.addInput( new HDMI() );
        this.addInput( new HDMI() )
        this.addInput( new HDMI() );
        this.addInput( new HDMI() );
        this.network = new Wifi();
    }

}

export class HaeirModelZ extends Television {

    brand = "Haeir";
    screenSize = 32;

}

const danielle = new LgModelX();
const derrick = new SamsungModelY();
const doug = new HaeirModelZ();

console.log( derrick );


/**
 * 
 * Television 1
 * 
 * Brand: LG
 * Has Wifi
 * 48" (Diagnal)
 * 4K
 * 
 * Inputs / Outputs:
 * 2x HDMI
 * AUX
 * Optical
 * 
 */

/**
 * 
 * Television 2
 * 
 * Brand: Samsumg
 * Has Wifi
 * 50" (Diagnal)
 * 1080P
 * 
 * Inputs / Outputs:
 * 4x HDMI
 * AUX
 * Optical
 * Special Adapter Input
 * 
 * 
 * Adapter:
 * RCA
 * 
 */

/**
 * 
 * Television 3
 * 
 * Brand: Haier
 * No Wifi
 * 32" (Diagnal)
 * 1080P
 * 
 * Inputs / Outputs:
 * 3x HDMI
 * USB
 * Optical
 * RCA
 * Component HD
 * 
 */