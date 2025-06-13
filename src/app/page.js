import Counter from './counter';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-6 p-6">
      <h1 className="text-4xl font-bold text-primary">My Counter App</h1>
      <Counter/>
    </main>
  );
}