import React, { useState } from 'react';
import { SpotifyPlaylist } from '@src/types/spotify';
import { useSpotifyPlaylist } from '@src/hooks/useSpotifyPlaylist';
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from 'react-loading-skeleton';
import Image from 'next/image';
import { useTheme } from '@src/context/ThemeContext';

const SpotifyPlaylistCard: React.FC = () => {
  const { data, isLoading, isError } = useSpotifyPlaylist();
  const [isLoadingImage, setLoadingImage] = useState(true);
  const { theme } = useTheme();

  const renderSkeletons = (): React.ReactNode => {
    const skeletons: JSX.Element[] = [];
    for (let i = 0; i < 10; i++) {
      skeletons.push(
        <div key={i} className="mb-4 w-[100%] md:w-[60rem]">
          <Skeleton
            style={{ marginTop: '0.5rem' }}
            highlightColor={theme === 'dark' ? '#000000' : '#F5F5F5'}
            baseColor={theme === 'dark' ? '#10161a' : '#F5F5F5'}
            className="h-10 w-12 bg-gray-200 p-14 dark:bg-gray-800"
          />
        </div>,
      );
    }
    return <>{skeletons}</>;
  };

  return (
    <>
      {isError && <div className="text-gray-800 dark:text-gray-100">Failed Fetch Data</div>}
      {isLoading ? (
        <div className="text-gray-800 dark:text-gray-100">{renderSkeletons()}</div>
      ) : (data ?? []).length === 0 ? (
        <div>Data tidak di temukan</div>
      ) : (
        <div
          key={data.id}
          className="shadow-single relative my-2 flex items-center space-x-4 rounded-md border border-teal-100 bg-gray-100/50 px-5 dark:border-teal-900 dark:bg-[#10161a]/50"
        >
          {data?.albumImageUrl ? (
            <Image
              width={100}
              height={100}
              src={data?.albumImageUrl || ''}
              alt={data?.artist || ''}
              className={`
                h-10 w-12 rounded-sm duration-700 ease-in-out group-hover:opacity-75
                ${
                  isLoadingImage ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'
                })`}
              onLoadingComplete={() => setLoadingImage(false)}
              style={{ width: '10%', height: 'auto' }}
            />
          ) : null}
          <p
            className="leading-tight text-gray-600 dark:text-gray-100"
            title={
              data ? `${data.title || 'Not Playing'} - ${data.artist || 'Spotify'}` : undefined
            }
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
      )}
    </>
  );
};

export default SpotifyPlaylistCard;
