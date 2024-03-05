import { useCurrentlyPlaying } from '@src/hooks/useSpotifyCurrentlyPlaying';
import { PlayCircle } from 'react-feather';
import cn from 'classnames';
import Image from 'next/image';

export default function SpotifyCurrentlyPlaying() {
  const { data } = useCurrentlyPlaying();
  return (
    <div className="shadow-single flex w-[100%] flex-col items-center space-x-2 rounded-md border border-teal-100  bg-gray-100/50 p-5 text-center md:h-20 md:w-[60rem] md:flex-row dark:border-teal-900 dark:bg-[#10161a]/50">
      {data?.albumImageUrl ? (
        <Image
          width={80}
          height={80}
          className="w-20 rounded-sm sm:h-12 sm:w-12"
          src={data?.albumImageUrl || ''}
          alt={data?.artist}
        />
      ) : null}
      <PlayCircle
        aria-hidden
        size={20}
        className={cn('h-8 w-8 flex-shrink-0', data?.isPlaying ? 'text-blue-500' : 'text-gray-600')}
      />
      <p
        className="leading-tight text-gray-600 dark:text-gray-100"
        title={data ? `${data.title || 'Not Playing'} - ${data.artist || 'Spotify'}` : undefined}
      >
        {data?.songUrl ? (
          <a
            href={data.songUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="helper-link-cover min-w-0 flex-1 font-semibold text-[#10161a] hover:underline dark:text-gray-100"
          >
            {data.title}
          </a>
        ) : (
          <span className="min-w-0 flex-1 font-semibold text-[#10161a] dark:text-gray-100">
            Music Not Playing
          </span>
        )}{' '}
        <span className="text-gray-800 dark:text-gray-300">–</span>&nbsp;
        <span className="text-gray-800 dark:text-gray-300">{data?.artist ?? 'Spotify'}</span>
      </p>
    </div>
  );
}
