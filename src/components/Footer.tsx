const Footer = () => {
  return (
    <footer className="py-8 bg-foreground text-center">
      <div className="container px-6">
        <p className="text-sm font-body text-primary-foreground/60">
          © {new Date().getFullYear()} Nutricionista Evelyn Prates. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
