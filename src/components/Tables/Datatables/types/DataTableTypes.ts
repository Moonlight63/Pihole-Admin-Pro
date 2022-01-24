type DataTableRow = Record<string, unknown>
type DataTableRows = Array<DataTableRow>

type DataTableColumn =
  | string
  | {
      key?: string
      label?: string
      sortable?: boolean
      idx?: string
    }

type DataTableColumns = Array<DataTableColumn>

type DataTableSortation = {
  sortByKey?: string
  ascending?: boolean
  sortedInput?: DataTableRows
}

type DataTablePagination = {
  totalRecordCount?: number
  perPage?: number
  page?: number
  pagedInput?: DataTableRows
}

type DataTablePaginationOptions =
  | boolean
  | Array<string>
  | Record<number, string>

type MandateProps<T, K extends keyof T> = Omit<T, K> & {
  [MK in K]-?: NonNullable<T[MK]>
}

type HavinaProblem = {
  key: string
  label: string
  sortable: boolean
  idx: string
}

export {
  MandateProps,
  DataTableRow,
  DataTableRows,
  DataTableColumns,
  DataTableColumn,
  DataTableSortation,
  DataTablePagination,
  DataTablePaginationOptions,
  HavinaProblem
}
