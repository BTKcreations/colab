import { Doc } from 'yjs';
import { WebrtcProvider } from 'y-webrtc';
import { YArray } from 'yjs';
import { YMap } from 'yjs';

export const initializeYjs = (roomId: string, userId: string) => {
    const doc = new Doc();
    const provider = new WebrtcProvider(roomId, doc, {
        signaling: ['wss://signaling.yjs.dev'],
        password: userId,
    });

    const yMap = doc.getMap('whiteboard');
    const yArray = doc.getArray('drawings');

    return { doc, provider, yMap, yArray };
};

export const addDrawing = (yArray: YArray<any>, drawing: any) => {
    yArray.push([drawing]);
};

export const getDrawings = (yArray: YArray<any>) => {
    return yArray.toArray();
};

export const updateDrawing = (yArray: YArray<any>, index: number, newDrawing: any) => {
    yArray.delete(index);
    yArray.insert(index, [newDrawing]);
};

export const deleteDrawing = (yArray: YArray<any>, index: number) => {
    yArray.delete(index);
};