import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-white flex flex-col items-center justify-center p-6 bg-[radial-gradient(circle_at_top_left,#1e293b,#0f172a)]">
      <div className="z-10 w-full max-w-3xl items-center justify-center text-center">
        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-green-400 uppercase bg-green-400/10 border border-green-400/20 rounded-full">
          Examen Parcial - Cloud Computing
        </div>
        
        <h1 className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Hola Mundo en AWS Fargate
        </h1>
        
        <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Esta aplicación Next.js ha sido desplegada automáticamente mediante un 
          <span className="text-indigo-400 font-semibold"> Pipeline de GitHub Actions </span> 
          hacia una infraestructura de contenedores serverless.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
            <h3 className="text-indigo-400 font-bold mb-2">GitHub Actions</h3>
            <p className="text-sm text-slate-500">Automatización de CI/CD completa.</p>
          </div>
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
            <h3 className="text-indigo-400 font-bold mb-2">Amazon ECR</h3>
            <p className="text-sm text-slate-500">Registro seguro de imágenes Docker.</p>
          </div>
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
            <h3 className="text-indigo-400 font-bold mb-2">AWS Fargate</h3>
            <p className="text-sm text-slate-500">Ejecución de contenedores serverless.</p>
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 transition-colors rounded-xl font-bold">
            Ver Documentación
          </button>
          <button className="px-8 py-3 bg-white/10 hover:bg-white/20 transition-colors rounded-xl font-bold">
            Estado del Deployment
          </button>
        </div>
      </div>
      
      <footer className="absolute bottom-8 text-slate-600 text-sm">
        Optativa de Cloud Computing - Parcial
      </footer>
    </main>
  );
}
