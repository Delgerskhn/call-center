import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const navigateToDial = () => {
    router.push('/dial');
  };

  return (
    navigateToDial
  );
}
