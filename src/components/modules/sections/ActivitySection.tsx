import { Heading, Text } from '@src/components/design-system';
import { SpotifyCurrentPlaying, SpotifyPlaylistCard } from '@src/components/modules';

export default function ActivitySection() {
  return (
    <section className="mx-auto -mt-12 h-full mb-12 flex flex-col p-4 md:-mt-0 md:p-0">
      <Heading className="mt-5">Activity 🎵</Heading>
      <div className="dark:text-gray-100 prose mt-5 max-w-none text-[#10161a]">
        <Text>This page contains a current activity.</Text>
        <h2 className="dark:text-gray-100 text-[#10161a]">Spotify Activity</h2>
        <SpotifyCurrentPlaying />
        <h2 className="dark:text-gray-100 text-dark">Spotify Playlist</h2>
        <SpotifyPlaylistCard />
      </div>
    </section>
  );
}
