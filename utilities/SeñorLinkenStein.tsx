import Link from "next/link";

const SeñorLinkenStein = ({ children: misHijos, aDonde, ...todo }: any) => {
  return (
    <Link href={aDonde.toString()} {...todo}>
      {misHijos}
    </Link>
  );
};

export default SeñorLinkenStein;
