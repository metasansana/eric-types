import path from 'path';
import nunjucks from 'nunjucks';
import Task from './Task';

/**
 * Generator 
 */
class Generator extends Task {

    constructor(fs, runner, context) {

        super(fs, runner, context);
        this._pending = [];
        this.templatePath = 'eric/templates';
        this.files = {};
        this.filters = {};
        this.engine = new nunjucks.Environment(new nunjucks.FileSystemLoader(this.templatePath));
        Object.keys(this.filters).forEach(k => this.engine.addFilter(k, this.filters[k]));

    }

    /**
     * file queues up a file to generate
     * @param {string} file 
     * @param {string} template 
     * @param {object} context 
     */
    file(file, template, context) {

        this._pending.push(this.fs.readFile(path.join(this.templatePath, template)).then(tmpl =>
            this.engine.renderString(tmpl.contents, context, (err, res) => {

                if (err) {

                    console.error('Generator:');
                    console.error(err.stack);
                    process.exit(-1);

                }

                this.files[file] = res

            })));

    }

    execute() {

        this.run();

        return Promise.all(this._pending).
        then(() => Promise.all(Object.keys(this.files).map(k =>
            this.fs.writeFile(k, this.files[k]))));


    }

}

export default Generator
