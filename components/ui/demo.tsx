import Component from "@/components/ui/blogs";
import { NotFoundPage } from "@/components/ui/404-page-not-found";

export default function DemoOne() {
  return <Component />;
}

export function PageNotFoundDemo() {
  return (
    <div className="w-full">
      <NotFoundPage />
    </div>
  );
}

