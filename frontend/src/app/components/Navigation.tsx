'use client';
import Link from 'next/link';
import { useState } from 'react';

type Props = {
  new: boolean;
};

const Navigation = () => {
  return (
    <nav className="flex justify-center text-5xl font-extrabold text-slate-200  shadow-slate-700 mt-20 mx-20 p-3 ">
      <Link
        href="/home"
        className="text-transparent bg-gradient-to-r from-blue-500 to-cyan-700 bg-clip-text p-5"
      >
        InCollege
      </Link>
    </nav>
  );
};

export default Navigation;
