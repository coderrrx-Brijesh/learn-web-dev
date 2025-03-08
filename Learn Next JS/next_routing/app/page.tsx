import Image from "next/image";
import DocsPage from "./(group_route)/docs/page"; // Rename to use PascalCase

export default function Home() {
  return (
    <>
      <DocsPage /> {/* Use the renamed component */}
      Hello Brijesh Singh
    </>
  );
}
