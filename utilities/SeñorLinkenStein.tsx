import Link from "next/link";

const SeñorLinkenStein = ({ children: misHijos, aDonde, ...todo }: any) => {
  return (
    <Link href={aDonde.toString()} {...todo}>
      {misHijos}
    </Link>
  );
};

// Dónde estoy

// solo quería darle estilo a un botón
// mucho habre

// Envía ayuda o unos tacos cualquiera servirá.
export default SeñorLinkenStein;
