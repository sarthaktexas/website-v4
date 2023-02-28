import Link from 'next/link'

export default function Nav() {

    const links = [
        { href: '/', label: 'home' },
        // { href: '/about', label: 'about' },
        // { href: '/manifesto', label: 'manifesto' },
        // { href: 'https://www.craft.do/s/5PLFAFavEh6V37', label: 'toolbox' },
        // { href: 'https://www.notion.so/sarthakmohanty/Annual-Review-2020-d8e25a934aa2441fae8cc79a9a1bdbc8', label: 'annual review' },
        // { href: 'https://www.notion.so/sarthakmohanty/Reading-List-2020-10daef3ae49e4b09a1bf6223eaa1b80b', label: 'reading list' },
        // { href: 'https://medium.com/@sarthaktexas', label: 'writing' },
        // { href: 'https://twitter.com/sarthaktexas', label: 'thoughts'}
        { href: 'mailto:sarthak@sarthakmohanty.me', label: 'email'},
        { href: 'https://vsco.co/sarthak-mohanty', label: 'vsco'},
        { href: 'https://srtk.me/gh', label: 'github'},
        { href: 'https://srtk.me/tw', label: 'twitter'},
        { href: 'https://read.cv/srtk', label: 'cv'},
        // { href: '/ol/rob-a-bank', label: 'open letter to rob a bank'},
        // { href: '/ol/art', label: 'open letter about art'},
        // { href: '/manifesto', label: 'manifesto'},
    ]

    return (
        <nav className="grow-0">
            <ul className="flex flex-wrap lg:flex-row gap-x-5 gap-y-1 lg:gap-x-2 px-10 lg:px-0 mt-3 text-sm md:text-base font-inter font-medium justify-around mx-auto lg:w-8/12 xl:w-5/12 text-[#A1A1A1]">
                {links.map(({ href, label }) => (
                    <li key={`${href}${label}`} className="list-none pointer-events-auto p-0 m-0">
                        <Link href={href} className="hover:text-white">
                            {label.toLowerCase()}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}