import { LOCALSTORAGEKEY } from "../resources/Contstants.js"
import DummyData from "../resources/DummyData"

export const LoadFromLocalStorage = () => (JSON.parse(localStorage.getItem(LOCALSTORAGEKEY) ?? JSON.stringify(DummyData.products)))

export const SaveToLocalStorage = (links) => { localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(links)) }
