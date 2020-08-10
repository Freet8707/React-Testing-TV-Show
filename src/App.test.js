import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';

import { fetchShow as mockFetchShow } from './api/FetchShow.js' 

import App from './App'

import { mockEpisodes } from './fixtures/EpisodeData';

jest.mock('./api/FetchShow.js')

test('updates episode data with button press',  async () => {
    mockFetchShow.mockResolvedValueOnce({ data: mockEpisodes })

    const { getByText, queryAllByTestId } = render(<App />)

    expect(queryAllByTestId('episode')).toHaveLength(0)

    await wait();

    const dropdown = getByText(/Select a season/i)

    dropdown.value = 'Season 1'


    expect(queryAllByTestId('episode')).toHaveLength(3)
})