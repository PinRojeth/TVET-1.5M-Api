import {
    handleCors,
    handleBodyRequestParsing,
    handleCompression,
    handleHelmet,
    handleMorgan,
    catchZeroSpace
} from "./common";

export default [
    handleCors,
    handleBodyRequestParsing,
    handleCompression,
    handleHelmet,
    handleMorgan,
    catchZeroSpace
];