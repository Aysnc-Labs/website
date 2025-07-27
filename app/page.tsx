import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center">
          <Image src="/logo-aysnc.png" alt="aysnc labs logo" width={100} height={93} className="object-contain" />
          <div className="text-center">
            <h1 className="text-4xl text-black font-serif">Aysnc</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16 relative">
        {/* Abstract gradient backgrounds */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-bl from-purple-100/40 via-blue-50/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-100/30 via-purple-50/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-gradient-to-tl from-purple-50/30 to-transparent rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-16 relative z-10">
          {/* Hero Section */}
          <section className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-normal text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text leading-tight">
              Simplicity is a{" "}
              <span className="font-serif">
                Superpower
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Enterprise consulting and tools.
            </p>
          </section>

          {/* Coming Soon */}
          <section className="space-y-6 relative">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-full">
              <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Coming Soon
              </span>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We&apos;re building something special. Check back later!
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}
