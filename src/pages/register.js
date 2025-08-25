import Link from 'next/link';

export default function Register() {
  const emojis = ['🎬','🎵','📸','📚','🎧','🎤','🎥','📀','🎶','📺','🎹','🎷','🎺','🎻','📻','🎼','🖼️','📽️','📁','💿'];

  // Génère un tableau de 50 emojis aléatoires pour le fond
  const backgroundEmojis = Array.from({ length: 50 }, (_, i) => {
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    const top = Math.random() * 95;
    const left = Math.random() * 95;
    const size = 20 + Math.random() * 25;
    const rotate = Math.random() * 360;
    const opacity = 0.2 + Math.random() * 0.8;
    const anims = ['animate-bounce','animate-pulse','animate-spin',''];
    const anim = anims[Math.floor(Math.random() * anims.length)];

    return { id: i, emoji, top, left, size, rotate, opacity, anim };
  });

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gray-900 overflow-hidden">

      {/* Emojis dispersés */}
      <div className="absolute w-full h-full pointer-events-none">
        {backgroundEmojis.map(e => (
          <span
            key={e.id}
            className={`${e.anim} absolute`}
            style={{
              top: `${e.top}%`,
              left: `${e.left}%`,
              fontSize: `${e.size}px`,
              transform: `rotate(${e.rotate}deg)`,
              opacity: e.opacity,
            }}
          >
            {e.emoji}
          </span>
        ))}
      </div>

      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Card formulaire */}
      <div className="bg-gray-800/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl w-80 relative z-10 border border-purple-500">
        <h1 className="text-4xl font-extrabold text-center mb-6 text-white drop-shadow-lg">
          🎬 S'inscrire
        </h1>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Nom complet"
            className="w-full p-3 border border-purple-500 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-purple-500 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          />
          <input
            type="password"
            placeholder="Mot de passe"
            className="w-full p-3 border border-purple-500 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          />
          <button
            type="submit"
            className="w-full p-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-pink-500/50"
          >
            S'inscrire
          </button>
        </form>

        <p className="mt-6 text-center text-gray-300">
          Déjà un compte ?{' '}
          <Link href="/login" className="text-pink-400 font-medium hover:text-pink-600 hover:underline transition">
            Se connecter
          </Link>
        </p>
      </div>
    </div>
  );
}
