import { 
  Zap, 
  ShieldCheck, 
  Code, 
  Terminal, 
  Lock, 
  Cpu, 
  ArrowRight,
  ChevronRight,
  Info,
  Globe,
  Package,
  Layers
} from 'lucide-react';
import { Badge } from '@/src/components/ui/badge';
import Link from 'next/link';
import Image from 'next/image';

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-blue-500/30 selection:text-blue-200">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-slate-950/80 backdrop-blur-xl">
        <div className="container max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 group translate-z-0 transition-transform hover:scale-105">
            <div className="bg-slate-900 p-0.5 rounded-xl shadow-2xl border border-white/10 ring-1 ring-white/5">
              <Image 
                src="/logo.png" 
                alt="SyncEthic AI Logo" 
                width={40} 
                height={40} 
                className="rounded-lg grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <Link href="/" className="font-bold text-2xl text-white tracking-tight flex items-center gap-2">
              SyncEthic <span className="text-blue-500 font-black">AI</span>
            </Link>
          </div>
          <Link 
            href="https://syncethic.ai/dashboard" 
            className="text-sm font-semibold bg-white/5 hover:bg-white/10 text-white px-5 py-2.5 rounded-full border border-white/10 transition-all active:scale-95"
          >
            Go to Dashboard
          </Link>
        </div>
      </header>

      <main className="container max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-[1fr_320px] gap-16 items-start">
          
          {/* Main Content */}
          <div className="space-y-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
            
            <section className="space-y-6">
              <Badge variant="outline" className="text-blue-400 border-blue-400/20 bg-blue-400/5 px-4 py-1.5 text-xs tracking-widest uppercase font-bold rounded-full">
                Developer API Documentation
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                Integrate Intelligence with <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-400">Guardrails.</span>
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
                SyncEthic AI provides a unified endpoint for all your LLM needs, automatically protected by enterprise-grade PII filtering and security guardrails.
              </p>
            </section>

            <section id="endpoint" className="space-y-8 pt-10 border-t border-white/5">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <Terminal className="w-6 h-6 text-blue-400" />
                </div>
                <h2 className="text-3xl font-bold text-white">Unified Chat Endpoint</h2>
              </div>
              
              <div className="bg-slate-900/50 rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
                  <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/20 font-mono text-[10px] uppercase">Post</Badge>
                  <code className="text-sm text-slate-300 font-mono">https://syncethic.ai/api/v1/chat</code>
                </div>
                <div className="p-6">
                   <p className="text-slate-400 mb-6 text-sm">
                    This single endpoint routes your messages to the most cost-effective and secure AI model, applying your organization&apos;s rules in real-time.
                  </p>
                </div>
              </div>
            </section>

            <section id="authentication" className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <Lock className="w-6 h-6 text-purple-400" />
                </div>
                <h2 className="text-3xl font-bold text-white">Authentication</h2>
              </div>
              <p className="text-slate-400">
                All requests must be authenticated using the <code className="text-white bg-white/5 px-2 py-0.5 rounded">x-api-key</code> header. You can generate multiple keys in the <Link href="https://syncethic.ai/dashboard/keys" className="text-blue-400 hover:underline">API Keys</Link> section of your dashboard.
              </p>

              <div className="bg-slate-950 rounded-xl border border-white/10 p-6 font-mono text-sm group shadow-xl transition-all hover:border-white/20">
                <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
                  <span className="text-slate-500 text-xs">Request Headers</span>
                  <div className="flex gap-1.5 focus-within:ring-2 ring-blue-500 rounded px-1 transition-all">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/40"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-orange-500/40"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/40"></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <p><span className="text-pink-400">Content-Type</span>: application/json</p>
                  <p><span className="text-pink-400">x-api-key</span>: sync_live_your_key_here</p>
                </div>
              </div>
            </section>

            <section id="sdk" className="space-y-12">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <Globe className="w-6 h-6 text-blue-400" />
                </div>
                <h2 className="text-3xl font-bold text-white">SDK Integration</h2>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                  <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/20">Option 1</Badge>
                  Quick Start (CDN)
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  The fastest way to add SyncEthic to any website. No build step required. Just paste this before the closing <code className="text-blue-300">&lt;/body&gt;</code> tag.
                </p>
                <div className="bg-slate-900/50 rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                  <pre className="p-6 overflow-x-auto text-[13px] font-mono leading-relaxed text-blue-200">
{`<script src="https://syncethic.ai/sdk/syncethic.min.js"></script>
<script>
  SyncEthic.mount({
    apiKey: 'sk_global_YOUR_KEY',
    botSlug: 'your_bot_slug',
    position: 'bottom-right',
    theme: 'auto'
  });
</script>`}
                  </pre>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3 hover:bg-white/10 transition-colors cursor-default">
                    <div className="flex items-center gap-3 text-white font-bold">
                      <div className="p-1.5 bg-blue-500/20 rounded-lg">
                        <Globe className="w-4 h-4 text-blue-400" />
                      </div>
                      WordPress
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      Use a "Header and Footer" plugin to paste the script tag. It will automatically appear on all pages of your site.
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3 hover:bg-white/10 transition-colors cursor-default">
                    <div className="flex items-center gap-3 text-white font-bold">
                       <div className="p-1.5 bg-purple-500/20 rounded-lg">
                        <Package className="w-4 h-4 text-purple-400" />
                      </div>
                      Shopify
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      Edit your <code className="text-blue-300 font-mono">theme.liquid</code> file and paste the snippet just before the <code className="text-slate-400">{'</body>'}</code> tag.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6 pt-6">
                <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                  <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/20">Option 2</Badge>
                  Frameworks (NPM / React)
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  For deep integration in Next.js, React, or Vue apps, use our official NPM package.
                </p>
                
                <div className="bg-slate-950 rounded-xl border border-white/10 p-5 font-mono text-sm text-emerald-400 shadow-inner">
                  pnpm add @syncethic/sdk
                </div>

                <div className="bg-slate-900/50 rounded-2xl border border-white/10 overflow-hidden mt-4 shadow-2xl">
                  <div className="px-6 py-3 bg-white/5 border-b border-white/5 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    Node.js / Core API (Custom Bot)
                  </div>
                  <pre className="p-6 overflow-x-auto text-[13px] font-mono leading-relaxed text-blue-200">
{`import { SyncEthic } from '@syncethic/sdk';

// Auto-provision a custom bot on the fly just by naming it
const bot = new SyncEthic({ 
  apiKey: 'sk_global_YOUR_KEY', 
  botSlug: 'my_hr_assistant', // If it doesn't exist, we create it!
  instructions: 'You are an HR expert. Answer questions carefully.'
});

const response = await bot.chat('What is our remote work policy?');
console.log(response);`}
                  </pre>
                </div>

                <div className="bg-slate-900/50 rounded-2xl border border-white/10 overflow-hidden mt-6 shadow-2xl">
                  <div className="px-6 py-3 bg-white/5 border-b border-white/5 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    React UI Component
                  </div>
                  <pre className="p-6 overflow-x-auto text-[13px] font-mono leading-relaxed text-blue-200">
{`import { ChatWidget } from '@syncethic/sdk/react';

export default function Layout({ children }) {
  return (
    <>
      {children}
      <ChatWidget 
        apiKey="sk_global_YOUR_KEY" 
        botSlug="support_bot" 
      />
    </>
  );
}`}
                  </pre>
                </div>
              </div>
            </section>

            <section id="model" className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-500/10 rounded-lg">
                  <Cpu className="w-6 h-6 text-orange-400" />
                </div>
                <h2 className="text-3xl font-bold text-white">Default Model</h2>
              </div>
              <div className="p-8 rounded-3xl bg-linear-to-br from-indigo-500/10 via-purple-500/5 to-transparent border border-white/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 text-indigo-500/20 group-hover:text-indigo-500/30 transition-colors">
                  <Zap className="w-32 h-32 rotate-12" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-4">Gemini 3.1 Flash-Lite</h3>
                  <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
                    By default, your requests are routed to <span className="text-white font-medium">Gemini 3.1 Flash-Lite</span>. It provides ultra-fast responses with deep reasoning capabilities at the lowest industry cost.
                  </p>
                  <ul className="space-y-3">
                    {['2.0M Context Window', 'Safe-by-default', 'Multimodal native'].map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-slate-300">
                        <ChevronRight className="w-4 h-4 text-blue-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section id="example" className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-500/10 rounded-lg">
                  <Code className="w-6 h-6 text-emerald-400" />
                </div>
                <h2 className="text-3xl font-bold text-white">Implementation Example</h2>
              </div>
              
              <div className="grid gap-6">
                <div className="bg-slate-900/50 rounded-2xl border border-white/10 overflow-hidden">
                  <div className="px-6 py-4 bg-white/5 border-b border-white/5 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400 flex items-center gap-2">
                       <ChevronRight className="w-3 h-3" /> cURL
                    </span>
                  </div>
                  <pre className="p-6 overflow-x-auto text-[13px] font-mono leading-relaxed text-blue-200">
{`curl -X POST https://syncethic.ai/api/v1/chat \\
  -H "Content-Type: application/json" \\
  -H "x-api-key: YOUR_API_KEY" \\
  -d '{
    "messages": [
      { "role": "user", "content": "Hello, how are you?" }
    ],
    "model": "Gemini 3.1 Flash-Lite"
  }'`}
                  </pre>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar Nav */}
          <aside className="hidden lg:block sticky top-32 space-y-10">
            <div className="space-y-4">
              <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Table of Contents</h4>
              <nav className="flex flex-col gap-3">
                {[
                  { id: 'endpoint', label: 'API Endpoint' },
                  { id: 'authentication', label: 'Security & Auth' },
                  { id: 'sdk', label: 'SDK Integration' },
                  { id: 'model', label: 'Models & Logic' },
                  { id: 'example', label: 'Code Examples' },
                ].map((item) => (
                  <a 
                    key={item.id} 
                    href={`#${item.id}`} 
                    className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500/0 group-hover:bg-blue-500 transition-all"></div>
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="p-6 rounded-2xl bg-blue-600/5 border border-blue-500/10 space-y-4 shadow-3xl shadow-blue-500/5">
              <Info className="w-5 h-5 text-blue-400" />
              <p className="text-xs text-slate-400 leading-relaxed">
                Need more help? Contact our support team or check out our community forums for advanced integration patterns.
              </p>
              <button className="text-[10px] font-bold text-blue-400 uppercase tracking-widest hover:text-blue-300 transition-colors flex items-center gap-2 group">
                Contact Support <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </aside>

        </div>
      </main>

      {/* Modern Footer */}
      <footer className="border-t border-white/5 py-12 bg-black/20">
        <div className="container max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-500 italic">
            &copy; 2026 SyncEthic AI. All rights reserved. Secure your intelligence.
          </p>
          <div className="flex gap-8">
            {['Privacy', 'Terms', 'Security'].map((f) => (
              <a key={f} href="#" className="text-xs text-slate-500 hover:text-white transition-colors">{f}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
