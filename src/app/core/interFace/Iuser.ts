export interface Iusers {
    filter?: UesrDEtalis
    sorting?: Sorting
    paginator: Paginator

  }
  export interface userRes {
    dataList: UesrDEtalis[]
    totalCount: number
  }
  
  export interface UesrDEtalis {
    id?: number
    firstName?: string
    lastName?: string
    password?: string
    email?: string
    creationDate?: string
    deleteStatus?: number
  }
  
  export interface Sorting {
    column?: string
    direction?: string
    sortingDirection?: number
  }
  
  export interface Paginator {
    page: number
    pageSize: number
  }