import { RouteModal } from "@/components/route-modal";
import { RenderingConcept } from "@/app/exemplos/renderizacao/_components/rendering-concept";

export default function RenderingModalPage() {
  return (
    <RouteModal title="Tipos de renderização">
      <RenderingConcept />
    </RouteModal>
  );
}
