import IList from './list.dto'

export default class ListsRepository {
  get(): Promise<IList[]> {
    const teste: IList = {
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
