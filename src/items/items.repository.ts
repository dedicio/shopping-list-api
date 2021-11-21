import { getFirestore } from 'firebase-admin/firestore'

class itemsRepository {
  #db
  #collection

  constructor () {
    this.#db = getFirestore()
    this.#collection = this.#db.collection('items')
  }

  async get() {
    const snapshot = await this.#collection.get()
    const docs: any[] = []
    snapshot.forEach(item => {
      docs.push({
        id: item.id,
        ...item.data()
      })
    })

    return docs
  }
}

export default itemsRepository