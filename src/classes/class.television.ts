import { Signal } from "./class.signal";

export class Television {

    inputs:Input[]=[];

    screenSize:number;
    
    recieveSignal( signal:Signal ){
        
    }

}

export class SmartTV extends Television {

    hasWifi: boolean = true;

}

export class LgModelX extends SmartTV {

    brand = "LG";
    screenSize = 48;

}

export class SamsungModelY extends SmartTV {

    brand = "Samsung";
    screenSize = 50;

}

export class HaeirModelZ extends Television {

    brand = "Haeir";
    screenSize = 32;

}

const danielle = new LgModelX();
const derrick = new SamsungModelY();
const doug = new HaeirModelZ();

console.log( danielle, derrick, doug );

const hdmi1 = new YourClassInput();

if( hdmi1 instanceof Input ){

}


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