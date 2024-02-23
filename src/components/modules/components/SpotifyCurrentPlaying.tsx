import { useCurrentlyPlaying } from '@src/hooks/useSpotifyCurrentlyPlaying';
import { PlayCircle } from 'react-feather';
import cn from 'classnames';
import Image from 'next/image';

export default function SpotifyCurrentlyPlaying() {
  const { data } = useCurrentlyPlaying();
  return (
    <div className="bg-gray-100/50 shadow-single border-teal-100 dark:border-teal-900 flex w-[100%] flex-col items-center space-x-2  rounded-md border p-5 text-center md:h-20 md:w-[60rem] md:flex-row dark:bg-[#10161a]/50">
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
        className="dark:text-gray-100 text-gray-600 leading-tight"
        title={data ? `${data.title || 'Not Playing'} - ${data.artist || 'Spotify'}` : undefined}
      >
        {data?.songUrl ? (
          <a
            href={data.songUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="dark:text-gray-100 helper-link-cover min-w-0 flex-1 font-semibold text-[#10161a] hover:underline"
          >
            {data.title}
          </a>
        ) : (
          <span className="dark:text-gray-100 min-w-0 flex-1 font-semibold text-[#10161a]">
            Music Not Playing
          </span>
        )}{' '}
        <span className="dark:text-gray-300 text-gray-800">–</span>&nbsp;
        <span className="dark:text-gray-300 text-gray-800">{data?.artist ?? 'Spotify'}</span>
      </p>
    </div>
  );
}
