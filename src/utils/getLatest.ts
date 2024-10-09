import { Editions } from "../services/editions";

export async function getLatest(objectArray: Editions[] | null) {
    if (objectArray?.length === 0) {
        return null;
    }
    if(!objectArray) return null

    let latestObject = objectArray[0];
    let latestDate = new Date(latestObject.edition.draw_date);

    for (let i = 1; i < objectArray.length; i++) {
        const currentDate = new Date(objectArray[i].edition.draw_date);
        if (currentDate > latestDate) {
            latestDate = currentDate;
            latestObject = objectArray[i];
        }
    }

    return latestObject;
}