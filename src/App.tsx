import TopbarLogo from '@/components/common/TopbarLogo';
import FooterLogo from '@/components/common/FooterLogo';

function App() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-5xl space-y-10">
        <TopbarLogo className="h-8 w-auto" />
        <h1 className="text-2xl font-semibold text-gray-900">React + Vite project setup ready</h1>
        <div className="rounded bg-zinc-900 p-4">
          <FooterLogo className="h-10 w-auto" />
        </div>
      </div>
    </main>
  );
}

export default App;
