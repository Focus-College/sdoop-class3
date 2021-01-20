import fs from 'fs';

export class Log {

    private stream = fs.createWriteStream(`${process.cwd()}/remote.txt`, { flags: 'a' });
    private timeout:any;

    constructor(){
        this.endWhenQuiet();
        this.clear()
    }

    endWhenQuiet(){
        this.timeout = setTimeout(() => {
            this.stream.end();
            // console.log(this.stream.path);
            process.exit(0);
        }, 10000);
    }

    write( line:string ){
        clearTimeout(this.timeout);
        this.stream.write( line + "\n" );
        this.endWhenQuiet();
    }

    clear(){
        fs.writeFile(`${process.cwd()}/remote.txt`, '', function(){})
    }

}