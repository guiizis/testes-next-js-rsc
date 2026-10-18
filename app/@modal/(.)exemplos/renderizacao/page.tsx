import { RouteModal } from "@/components/route-modal";
import { RenderingConcept } from "@/app/exemplos/renderizacao/_components/rendering-concept";

export default function RenderingModalPage() {
  return (
    <RouteModal title="Renderização no servidor: SSR e SSG">
      <RenderingConcept />
    </RouteModal>
  );
}
