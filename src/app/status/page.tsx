import Link from "next/link";

export default function Status() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-white">
      <div className="max-w-md w-full p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700">
        
        <div className="flex items-center gap-3 mb-6">
          <span className="relative flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
          </span>
          <h1 className="text-3xl font-bold">System Status</h1>
        </div>
        
        <p className="text-slate-600 dark:text-slate-300 mb-6">
          All systems are fully operational.
        </p>
        
        <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg font-mono text-sm mb-8 border border-slate-200 dark:border-slate-700">
          <div className="flex justify-between mb-2">
            <span className="text-slate-500">Environment:</span>
            <span className="font-semibold text-green-600 dark:text-green-400">Production</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-slate-500">Version:</span>
            <span className="font-semibold">v1.0.0</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Database:</span>
            <span className="font-semibold">Connected</span>
          </div>
        </div>

        <Link 
          href="/" 
          className="text-blue-600 dark:text-blue-400 hover:underline font-medium flex items-center gap-1"
        >
          &larr; Back to Dashboard
        </Link>
      </div>
    </main>
  );
}