/**
import { assert } from "console";
import { ByteString, FixedArray, SmartContract, fill, hash256, method, prop, toByteString } from "scrypt-ts";


export type Task = {
    task : ByteString
    isCompleted : boolean
}
export class TodoList extends SmartContract {

    static readonly Max_TASKCOUNT = 10
    @prop(true)
    tasks : FixedArray<Task, typeof TodoList.Max_TASKCOUNT>
    @prop(true)
    taskCount : bigint

    constructor(taskCount : bigint){
      super(...arguments)
      this.taskCount = taskCount
      this.tasks = fill({
          task : toByteString(''),
          isCompleted : false
      }, TodoList.Max_TASKCOUNT)
    }

    @method()
    public addTask(task : Task, taskIdx : bigint) {
        this.taskCount += 1n
        task = this.tasks[Number(taskIdx)]

        const output = this.buildStateOutput(this.ctx.utxo.value) + this.buildChangeOutput()

        assert(hash256(output) == this.ctx.hashOutputs, 'HashOutput Mismatch')
    }

    @method()
    public taskCompleted(taskIdx : bigint) {
        const task = this.tasks[Number(taskIdx)]

        this.tasks[Number(taskIdx)].isCompleted = true

         const output = this.buildStateOutput(this.ctx.utxo.value) + this.buildChangeOutput()

         assert(hash256(output) == this.ctx.hashOutputs, 'HashOutput Mismatch')
    }

}
*/