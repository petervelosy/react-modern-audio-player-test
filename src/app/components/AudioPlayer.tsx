"use client"
import Player, { ActiveUI } from 'react-modern-audio-player';

const AudioPlayer = ({url}: {url: string}) => {
    const playList = [
        {
          name: 'TestTrack',
          writer: 'test',
          src: url,
          id: 1,
        },
      ]
      const ui: ActiveUI = {
        trackInfo: true,
        trackTime: true,
        playButton: true,
        progress: "bar"
      }
    return (
        <Player playList={playList} activeUI={ui} />
    )
}

export default AudioPlayer