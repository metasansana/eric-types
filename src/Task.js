import Promise from 'bluebird';

/**
 * Task is the parent class for all eric tasks, every task
 * must either inherit from it directly or via some sub class.
 * @param {FileSystem} fs 
 * @param {CommandRunner} runner 
 * @param {Context} context 
 */
class Task {

    constructor(fs, runner, context) {

        this.fs = fs;
        this.runner = runner;
        this.context = context;
        this.$args = null;

    }

    /**
     * setArgs changes the arguments provided to the command
     * @param {object} args 
     * @returns {Command}
     */
    setArgs(args) {

        this.$args = args;
        return this;

    }

    /**
     * @returns {Promise|null}
     */
    run() {

    }

    execute() {

        return Promise.resolve().
        then(() => this.run());

    }

}

export default Task
