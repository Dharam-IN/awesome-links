import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-white">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold tracking-tight mb-4">
          Awesome Links 🚀
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
          A dummy Next.js app for DevOps practice.
        </p>
        
        <div className="flex justify-center gap-4">
          <Link 
            href="/status" 
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition shadow-lg hover:shadow-xl"
          >
            Check System Status
          </Link>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow border border-slate-200 dark:border-slate-700">
          <h3 className="text-lg font-bold mb-2">Docker Ready</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">Containerize this app easily.</p>
        </div>
        <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow border border-slate-200 dark:border-slate-700">
          <h3 className="text-lg font-bold mb-2">CI/CD Friendly</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">Perfect for GitHub Actions or Jenkins.</p>
        </div>
        <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow border border-slate-200 dark:border-slate-700">
          <h3 className="text-lg font-bold mb-2">Kubernetes</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">Deploy it on a K8s cluster.</p>
        </div>
      </div>
    </main>
  );
}