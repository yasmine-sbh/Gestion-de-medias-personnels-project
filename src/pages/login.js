import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Login() {
  const [backgroundEmojis, setBackgroundEmojis] = useState([]);

  useEffect(() => {
    const emojis = ['🎬','🎵','📸','📚','🎧','🎤','🎥','📀','🎶','📺'];
    const generated = Array.from({ length: 50 }, (_, i) => {
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
    setBackgroundEmojis(generated);
  }, []);

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 overflow-hidden">
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

      {/* Card connexion */}
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-80 relative z-10">
        <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">🎵🎬 Connexion</h1>

        <form className="space-y-3">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="password"
            placeholder="Mot de passe"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="w-full p-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition"
          >
            Se connecter
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Pas encore de compte ?{' '}
          <Link href="/register" className="text-purple-600 hover:underline">
            S'inscrire
          </Link>
        </p>
      </div>
    </div>
  );
}
