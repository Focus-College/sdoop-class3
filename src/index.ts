import prompt from 'prompt';
import { Room } from './classes/class.room';
import { Remote } from './classes/class.remote';
import { Television } from './classes/class.television';
import {Coax} from './classes/class.coax';

const coax = new Coax();
const remote = new Remote();
const tv = new Television();

Room.add(remote);
Room.add(tv);
Room.add(coax);

tv.turnOn();
tv.connectCoax();


prompt.start();

function listenForButtonInput(){
    prompt.get([{
        name: 'button',
        description: 'Press or Release Button',
        type: 'string',
        required: true
    }], (err:any, result:any) => {
        if(!err){
            
            // this is where we start interacting with the remote
            const touchedButton = remote.buttons.find( button => button.emblem === result.button );
                tv.recieveSignal(touchedButton.emblem);
            if( touchedButton.isPressed ){
                touchedButton.release();
            } else {
                touchedButton.press();
            }

            listenForButtonInput();
        }
    })
}

listenForButtonInput();