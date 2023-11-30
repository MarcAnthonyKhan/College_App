import Link from "next/link";

const Home = () => {
  const borderStyle = ' flex justify-center items-center shadow-md shadow-slate-800 p-5 rounded m-3 w-3/12 h-96 bg-slate-800 font-semibold'
  return (<div className='text-3xl items-center justify-center flex flex-wrap text-white w-full mt-20'>
    <Link href='jobs-and-internships' className={`${borderStyle}`}>Jobs and Internships</Link>
    <Link href='new-network' className={`${borderStyle}`}>Find a new network</Link>
    <Link href='my-network' className={`${borderStyle}`}>My Network</Link>
    <Link href='learn-skills' className={`${borderStyle}`}>Learn new skills</Link>
    <Link href='helpful-links' className={`${borderStyle}`}>Helpful Links</Link>
  </div>);
};

export default Home;
