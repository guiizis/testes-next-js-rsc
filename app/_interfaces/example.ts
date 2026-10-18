export interface BaseExample {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

export interface PageExample extends BaseExample {
  kind: "page";
  href: string;
}

export interface ModalExample extends BaseExample {
  kind: "modal";
  href: string;
}

export type Example = PageExample | ModalExample;
