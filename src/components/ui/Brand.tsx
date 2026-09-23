import { site } from "@/config/site";

export function Brand() {
  return <span className="brand">{site.name}</span>;
}
