import cors from 'cors'
import express, { Application } from 'express'
import Firebase from './config/db'
import Routes from './routes'

class Api {
  #app: Application
  #routes: Routes
  #firebase: Firebase

  constructor() {
    this.#firebase = new Firebase()
    this.#app = express()
    this.#firebaseConfig()
    this.#config()
    this.#routes = new Routes(this.#app)
  }

  start() {
    const port = this.#app.get('port')
    try {
      this.#app.listen(port, (): void => {
        console.log(`Server running on port ${port}`)
      })
    } catch( error: any ) {
      console.error(`A wild error appears: ${error.message}`)
    }
  }

  #firebaseConfig(): void {
    this.#firebase.initialize()
  }

  #config() {
    this.#app
      .use(cors())
      .use(express.json())
      .use(express.urlencoded({ extended: true  }))
      .set('port', process.env.PORT || 3000)
  }
}

export const api = new Api().start()
