'use client';

// import About from './about/page';
// import Navigation from './components/Navigation';
import Login from './login/page';
import Link from 'next/link';

// import Routes from './Routes';

export default function Home() {
  return (
    <div className="flex flex-col h-full">
        <Login />
    </div>
  );
}
