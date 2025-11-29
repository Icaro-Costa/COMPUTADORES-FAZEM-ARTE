export default function Footer() {
    return (
        <footer className="py-8 bg-black border-t border-zinc-800 text-center">
            <div className="max-w-7xl mx-auto px-4">
                <p className="text-gray-500 font-mono text-sm">
                    Desenvolvido com 🧡 e ⚡ no Recife.
                </p>
                <p className="text-gray-600 text-xs mt-2">
                    © {new Date().getFullYear()} Curso de Desenho - Computadores Fazem Arte.
                </p>
            </div>
        </footer>
    );
}
