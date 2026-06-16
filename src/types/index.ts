import type { EXTENSIONS } from "../constants/data";
import type { FILTERS } from "../constants/filters";

export type Extension = typeof EXTENSIONS[number]
export type Filter = typeof FILTERS[number]["value"]