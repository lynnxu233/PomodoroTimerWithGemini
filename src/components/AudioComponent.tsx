import Image from 'next/image';
import Link from 'next/link';
import { FiThumbsUp } from 'react-icons/fi';



export default function AudioComponent({ result }) {
  
  return (
    <div className='group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200'>
      <Link href={`/movie/${result.id}`}>
        <Image
          src={"https://images.unsplash.com/photo-1732692695680-f4c37b5bbbea?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
          width={500}
          height={300}
          alt=''
          className='sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300'
        ></Image>

        <div className='p-2'>
          <p className='line-clamp-2 text-md'> study advice</p>
          <h2 className='text-lg font-bold truncate'>
            {result}
          </h2>
        </div>
      </Link>
    </div>
  );
}




