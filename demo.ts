/**
import { assert } from "console";
import { SmartContract, method, prop } from "scrypt-ts";

export class Demo extends SmartContract {

    @prop()
    sum: bigint

    @prop()
    diff : bigint
    
    constructor(sum: bigint, diff : bigint){
        super(...arguments)
        this.sum= sum
        this.diff = diff
    }

    @method()
    public unlock(x: bigint, y: bigint) {
        assert(this.add(x,y) == this.sum, 'incorrect diff')
        assert(x - y == this.diff, 'incorrect diff')
    }

    @method()
    add(x: bigint, y: bigint): bigint {
        return x + y      
       
      }

}
*/