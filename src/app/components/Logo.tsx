import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="easyclimb_logo.svg"
      alt="Easyclimb Logo"
      width={50}
      height={50}
      unoptimized
    />
  );
}
