interface EGButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const EGButton: React.FC<EGButtonProps> = ({ children, ...props }) => {
  return (
    <button className="auth-button" {...props}>
      {children}
    </button>
  );
};

export { EGButton };
