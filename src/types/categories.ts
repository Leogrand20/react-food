export interface ICategory {
  idCategory: string
  strCategory: string
  strCategoryThumb: string
  strCategoryDescription: string
}

export type Categories = ICategory[]

export type CategoryListProps = {
  catalogue: Categories
}
