import{ initializeApp, cert } from 'firebase-admin/app'
const serviceAccount = require('../../firebaseCredentials.json')

class Firebase {
  #firebaseConfig

  constructor() {
    this.#firebaseConfig = {
      credential: cert(serviceAccount)
    }
  }

  initialize(): void {
    initializeApp(this.#firebaseConfig)
  }
}

export default Firebase