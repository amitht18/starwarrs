import { useEffect } from 'react';
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import './App.scss';
import DetailPage from './ui/DetailPage/DetailPage';
import ListPage from './ui/ListPage/ListPage';
import { PATHS } from './router/router';
import { DATA_URL, loadCharacters } from './api/api';
import { store } from './state/state';
import { Character } from './state/state.types';

function App() {
    const _store = store();

    async function loadInitialData() {
        const loadedCharacters: Awaited<Promise<Character[]>> = await loadCharacters(DATA_URL);
        _store.updateCharacters(loadedCharacters);
    }

    useEffect(() => {
        loadInitialData();
    }, []);

    return (
        <div className="App">
            <Routes>
                <Route
                    path={PATHS.home}
                    index
                    element={<ListPage characters={_store.characters} />}
                />
                <Route path={PATHS.detail} element={<DetailPage />} />
            </Routes>
            <Outlet />
        </div>
    );
}

export default App;
