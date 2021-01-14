import prompt from 'prompt';
import { Room } from './classes/class.room';
import { Remote } from './classes/class.remote';
import {Television} from './classes/class.television'

const remote = new Remote();
const TV = new Television();
Room.add(remote);
Room.add(TV)

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