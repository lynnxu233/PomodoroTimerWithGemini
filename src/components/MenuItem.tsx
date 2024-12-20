import Link from "next/link";


export default function MenuItem({title, address, Icon}:{title:string, address:string, Icon:React.ComponentType<{ className?: string }>}){
    return(
        <Link href={address} className = 'hover:text-amber-500'>
            <Icon className = "text-2xl sm:hidden"/>
            <p className= 'uppercase hidden sm:inline text-sm font-bold text-red-800 text-xl'> {title} </p>
        
        </Link>

    );
}