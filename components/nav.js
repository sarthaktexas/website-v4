import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Nav() {

    const links = [
        { href: '/', label: 'home' },
        // { href: '/about', label: 'about' },
        // { href: '/manifesto', label: 'manifesto' },
        // { href: 'https://www.craft.do/s/5PLFAFavEh6V37', label: 'toolbox' },
        // { href: 'https://www.notion.so/sarthakmohanty/Annual-Review-2020-d8e25a934aa2441fae8cc79a9a1bdbc8', label: 'annual review' },
        // { href: 'https://www.notion.so/sarthakmohanty/Reading-List-2020-10daef3ae49e4b09a1bf6223eaa1b80b', label: 'reading list' },
        // { href: 'https://medium.com/@sarthaktexas', label: 'writing' },
        { href: 'mailto:sarthak@sarthakmohanty.me', label: 'email'},
        { href: 'https://github.com/sarthaktexas', label: 'github'},
        // { href: 'https://twitter.com/sarthaktexas', label: 'twitter'},
        { href: 'https://read.cv/srtk', label: 'cv'},
        // { href: '/ol/rob-a-bank', label: 'open letter to rob a bank'},
        // { href: '/ol/art', label: 'open letter about art'},
    ]

    return (
        <nav className="grow-0">
            <motion.ul
                layout
                className="flex flex-wrap lg:flex-row gap-x-5 gap-y-1 lg:gap-x-2 px-10 lg:px-0 mt-3 text-sm md:text-base font-inter font-medium justify-around mx-auto lg:w-8/12 xl:w-5/12 text-[#A1A1A1]"
                initial="hidden"
                animate="visible"
                variants={{
                    visible: { opacity: 1 },
                    hidden: { opacity: 0 },
                }}
                transition={{ type: "easeInOut", delay: 0.8, staggerChildren: 0.2 }}
            >
                {links.map(({ href, label }) => (
                    <motion.li
                        key={`${href}${label}`}
                        className="list-none pointer-events-auto p-0 m-0"
                        variants={{
                            visible: { opacity: 1, y: 0 },
                            hidden: { opacity: 0, y: -10 },
                        }}
                        whileHover={{
                            rotate: [0, 10, -10, 0],
                            transition: { duration: 0.5 }
                        }}
                        >
                        <Link href={href} className="hover:text-white">
                            {label.toLowerCase()}
                        </Link>
                    </motion.li>
                ))}
            </motion.ul>
        </nav>
    )
}
