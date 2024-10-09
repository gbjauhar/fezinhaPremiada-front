import { Link, Ul } from "./style";


const RightNav = ({ open }: { open: boolean }) => {
  return (
    <Ul open={open}>
      <Link href="/">Home</Link>
      <Link href="/">Sorteios</Link>
      <Link href="/">Como funciona</Link>
      <Link href="/">Suporte</Link>
    </Ul>
  );
};

export default RightNav;