import Link from 'next/link'

export default function Nav() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        {/* Blog. */}
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        <Link href="/about">
          <a className="hover:text-success duration-200 transition-colors">about</a>
        </Link>
        {' '} | {' '}
        <Link href="/blog">
          <a className="hover:text-success duration-200 transition-colors">blog</a>
        </Link>
        {' '} | {' '}
        <a
          href="https://github.com/AlanDonohoe"
          className="hover:text-success duration-200 transition-colors"
          target="_blank"
        >
          github
        </a>
      </h4>
    </section>
  )
}
