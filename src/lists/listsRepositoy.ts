import List from './IList'

export default class ListsRepository {
  get(): Promise<List[]> {
    const teste: List = {
      id: 'teste',
      items: [
        'idd',
        'tes',
      ]
    }
    console.log('all')
    return Promise.resolve([teste])
  }

  // getById(id: string): List {
  //   console.log('all')
  // }
  
  // create(list: List): List {
  //   console.log(list)
  // }

  // update(id: string, list: List): List {
  //   console.log(id, list)
  // }

  // delete(id: string): void {
  //   console.log(id)    
  // }
}
