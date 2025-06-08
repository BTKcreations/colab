import { Y } from 'yjs';
import { WebrtcProvider } from 'y-webrtc';

export const createYjsDocument = () => {
    const ydoc = new Y.Doc();
    return ydoc;
};

export const setupWebrtcProvider = (roomName, ydoc) => {
    const provider = new WebrtcProvider(roomName, ydoc);
    return provider;
};

export const syncWithYjs = (ydoc, updateCallback) => {
    ydoc.on('update', (update) => {
        updateCallback(update);
    });
};

export const getYjsData = (ydoc, key) => {
    const yMap = ydoc.getMap('data');
    return yMap.get(key);
};

export const setYjsData = (ydoc, key, value) => {
    const yMap = ydoc.getMap('data');
    yMap.set(key, value);
};