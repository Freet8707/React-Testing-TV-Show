import React from 'react';
import { render } from '@testing-library/react';
import Episodes from './Episodes'
import { mockEpisodes } from '../fixtures/EpisodeData';

test('renders component', () => {
    render(<Episodes episodes={[]} />)
})

test('component renders with new data', () => {
    const { queryAllByTestId, rerender } = render(<Episodes episodes={[]} />)

    expect(queryAllByTestId('episode')).toHaveLength(0);

    rerender(<Episodes episodes={mockEpisodes} />)

    expect(queryAllByTestId('episode')).toHaveLength(3)
})