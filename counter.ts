/** 
import { ByteString, SmartContract, assert, hash256, method, prop } from "scrypt-ts";


export class Counter extends SmartContract {
    @prop(true)
    count: bigint

    constructor(count: bigint) {
        super(...arguments)
        this.count = count
    }
    @method()
    public incrementOnChain() {

        this.increment()

        const amount: bigint = this.ctx.utxo.value
        const outputs: ByteString = this.buildStateOutput(amount) + this.buildChangeOutput()
        assert(this.ctx.hashOutputs == hash256(outputs),'hashOutputs mismatch')
    }

    @method()
    increment(): void {
        this.count++
    }
}
*/