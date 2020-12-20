interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <button> {children} </button>
  );
}

export default Button;

function Teste(){
  return (
    <Button onClick={() => {}}></Button>
  )
}