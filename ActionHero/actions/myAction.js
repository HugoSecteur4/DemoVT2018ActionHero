const {Action, api} = require('actionhero')

module.exports = class MyAction extends Action {
    constructor () {
    super()

    this.name = 'randomNumberBetween1AndMax'

    this.description = 'Cette API génère un nombre entre 1 et max, le paramètre passé à l API'

    this.inputs = {
      max: {
        required: true,
        validator: (param, connection, actionTemplate) => {
          if (param < 1) { throw new Error('must be > 1') }
        },
        formatter: (param, connection, actionTemplate) => {
          return parseInt(param)
        },
        default: (param, connection, actionTemplate) => {
          return 1
        },
      }
    },

    this.outputExample = { randomNumber: 123 }

  }

    async run (data) {
      data.response.randomNumber = Math.random() * (data.params.max-1)+1;
    }
}
