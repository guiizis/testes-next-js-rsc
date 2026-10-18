import type { Key, ReactNode } from "react";

export type TableColumn<T> = {
  id: string;
  header: string;
  render: (item: T) => ReactNode;
  align?: "left" | "right";
  rowHeader?: boolean;
};

type DataTableProps<T> = {
  title: string;
  caption: string;
  summary?: ReactNode;
  columns: TableColumn<T>[];
  data: T[];
  getRowKey: (item: T) => Key;
  emptyMessage: string;
};

export function DataTable<T>({ title, caption, summary, columns, data, getRowKey, emptyMessage }: DataTableProps<T>) {
  return (
    <section className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-center justify-between gap-4 border-b border-zinc-200 px-6 py-5 dark:border-zinc-800">
        <h2 className="font-semibold text-zinc-900 dark:text-zinc-100">{title}</h2>
        {summary != null && <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">{summary}</span>}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">{caption}</caption>
          <thead className="bg-zinc-50 text-xs uppercase tracking-wider text-zinc-500 dark:bg-zinc-950/50 dark:text-zinc-400">
            <tr>
              {columns.map((column) => (
                <th key={column.id} scope="col" className={`px-6 py-4 font-medium ${column.align === "right" ? "text-right" : "text-left"}`}>
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
            {data.map((item) => (
              <tr key={getRowKey(item)} className="transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800/50">
                {columns.map((column) => {
                  const Cell = column.rowHeader ? "th" : "td";

                  return (
                    <Cell
                      key={column.id}
                      scope={column.rowHeader ? "row" : undefined}
                      className={`px-6 py-5 ${column.align === "right" ? "text-right" : "text-left"} ${column.rowHeader ? "font-medium text-zinc-900 dark:text-zinc-100" : "text-zinc-600 dark:text-zinc-400"}`}
                    >
                      {column.render(item)}
                    </Cell>
                  );
                })}
              </tr>
            ))}
            {data.length === 0 && (
              <tr>
                <td colSpan={columns.length} className="px-6 py-12 text-center text-zinc-500 dark:text-zinc-400">{emptyMessage}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
