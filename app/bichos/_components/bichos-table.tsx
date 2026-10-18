import type { WithId } from "mongodb";
import { DataTable, type TableColumn } from "@/components/data-table";
import type { Bicho } from "../_interfaces/bicho";

const columns: TableColumn<WithId<Bicho>>[] = [
  {
    id: "nome",
    header: "Nome",
    rowHeader: true,
    render: (bicho) => bicho.nome,
  },
  {
    id: "especie",
    header: "Espécie",
    render: (bicho) => (
      <span className="rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
        {bicho.especie}
      </span>
    ),
  },
  {
    id: "idade",
    header: "Idade",
    align: "right",
    render: (bicho) => (
      <span className="whitespace-nowrap tabular-nums">
        {bicho.idade === 0 ? "Menos de 1 ano" : `${bicho.idade} ${bicho.idade === 1 ? "ano" : "anos"}`}
      </span>
    ),
  },
];

export function BichosTable({ bichos }: { bichos: WithId<Bicho>[] }) {
  return (
    <DataTable
      title="Nossos bichos"
      caption="Bichos cadastrados, suas espécies e idades"
      summary={`${bichos.length} ${bichos.length === 1 ? "cadastro" : "cadastros"}`}
      columns={columns}
      data={bichos}
      getRowKey={(bicho) => bicho._id.toString()}
      emptyMessage="Nenhum bicho cadastrado ainda."
    />
  );
}
