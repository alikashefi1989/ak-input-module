import { FC } from 'react'

export type DataVod = Record<string, string>

const Player: FC<DataVod> = ({ url }) => {
    return (
        <video
            style={{
                boxSizing: 'border-box',
                width: '100%',
                height: '100%',
                borderRadius: '8px',
            }}
            muted
            controls
            src={url}
            autoPlay
        />
    )
}

export default Player