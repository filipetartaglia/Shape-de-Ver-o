export default function Footer() {
  return (
    <footer className="w-full bg-brand-black text-neutral-500 py-12 px-6 border-t border-neutral-900 font-body text-sm text-center flex flex-col items-center">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center space-y-6">
        <p className="text-base font-bold text-neutral-400 tracking-wide uppercase">
          © 2026 Shape de Verão. Todos os direitos reservados.
        </p>
        <p className="text-xs opacity-50 max-w-4xl mx-auto leading-relaxed">
          Este site não faz parte do site do Facebook ou da Meta Platforms, Inc. Além disso, este site não é endossado pelo Facebook de nenhuma maneira. FACEBOOK é uma marca comercial independente da Meta Platforms, Inc.
        </p>
      </div>
    </footer>
  );
}
